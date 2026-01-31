import fs from 'fs';
import path from 'path';

export interface Venture {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
  status: 'planning' | 'in-progress' | 'launched';
}

export interface DonationInfo {
  paypal?: string;
  upi?: string;
  email: string;
}

export interface VenturesData {
  ventures: Venture[];
  donation: DonationInfo;
}

const VENTURES_PATH = path.join(process.cwd(), 'content', 'ventures.json');

/**
 * Get ventures data
 */
export function getVenturesData(): VenturesData {
  if (!fs.existsSync(VENTURES_PATH)) {
    return {
      ventures: [],
      donation: {
        email: 'aakashdeep0551@gmail.com',
      },
    };
  }

  const content = fs.readFileSync(VENTURES_PATH, 'utf-8');
  return JSON.parse(content);
}
