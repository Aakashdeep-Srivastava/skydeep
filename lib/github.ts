/**
 * GitHub API helper for creating commits via the GitHub API
 * This enables the admin to create new blog posts without direct file access
 */

interface GitHubFileContent {
  sha?: string;
  content: string;
}

interface CreateCommitOptions {
  path: string;
  content: string;
  message: string;
}

const GITHUB_API_BASE = 'https://api.github.com';

/**
 * Get the GitHub token and repo from environment variables
 */
function getGitHubConfig() {
  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPO;

  if (!token || !repo) {
    throw new Error('GitHub configuration missing. Set GITHUB_TOKEN and GITHUB_REPO environment variables.');
  }

  return { token, repo };
}

/**
 * Get a file's current content and SHA (needed for updates)
 */
async function getFileContent(path: string): Promise<GitHubFileContent | null> {
  const { token, repo } = getGitHubConfig();

  const response = await fetch(`${GITHUB_API_BASE}/repos/${repo}/contents/${path}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/vnd.github.v3+json',
    },
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(`Failed to get file: ${response.statusText}`);
  }

  const data = await response.json();
  return {
    sha: data.sha,
    content: Buffer.from(data.content, 'base64').toString('utf-8'),
  };
}

/**
 * Create or update a file in the repository
 */
export async function createOrUpdateFile({ path, content, message }: CreateCommitOptions): Promise<void> {
  const { token, repo } = getGitHubConfig();

  // Check if file exists to get its SHA
  const existingFile = await getFileContent(path);

  const body: Record<string, string> = {
    message,
    content: Buffer.from(content).toString('base64'),
  };

  // If file exists, include SHA to update it
  if (existingFile?.sha) {
    body.sha = existingFile.sha;
  }

  const response = await fetch(`${GITHUB_API_BASE}/repos/${repo}/contents/${path}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to create/update file: ${error}`);
  }
}

/**
 * Delete a file from the repository
 */
export async function deleteFile(path: string, message: string): Promise<void> {
  const { token, repo } = getGitHubConfig();

  // Get the file's SHA
  const existingFile = await getFileContent(path);

  if (!existingFile?.sha) {
    throw new Error('File not found');
  }

  const response = await fetch(`${GITHUB_API_BASE}/repos/${repo}/contents/${path}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message,
      sha: existingFile.sha,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to delete file: ${error}`);
  }
}
