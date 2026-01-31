'use client';

import { useQuery, useMutation } from '@tanstack/react-query';
import type { TypingResponse, UserInfoResponse } from '@/lib/validations';

// Typing quote fetcher
async function fetchTypingQuote(minLength: number): Promise<TypingResponse> {
  const response = await fetch(`/api/typing/${minLength}`);
  if (!response.ok) {
    throw new Error('Failed to fetch quote');
  }
  return response.json();
}

// User info fetcher by IP
async function fetchUserInfoByIP(ip: string): Promise<UserInfoResponse> {
  const response = await fetch(`/api/userInfoByIP/${ip}`);
  if (!response.ok) {
    throw new Error('Failed to fetch user info');
  }
  return response.json();
}

// User info fetcher by lat/lon
async function fetchUserInfoByLatLon(lat: number, lon: number): Promise<string> {
  const response = await fetch(`/api/userInfoByLatLon/${lat}/${lon}`);
  if (!response.ok) {
    throw new Error('Failed to fetch location info');
  }
  return response.json();
}

// Hook to fetch typing quote
export function useTypingQuote(minLength: number, enabled = true) {
  return useQuery({
    queryKey: ['typing', minLength],
    queryFn: () => fetchTypingQuote(minLength),
    enabled,
    staleTime: 0, // Always fetch fresh quote
    refetchOnWindowFocus: false,
  });
}

// Hook to fetch user info by IP
export function useUserInfoByIP(ip: string, enabled = true) {
  return useQuery({
    queryKey: ['userInfo', ip],
    queryFn: () => fetchUserInfoByIP(ip),
    enabled: enabled && !!ip,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

// Hook to fetch user info by lat/lon
export function useUserInfoByLatLon(lat: number, lon: number, enabled = true) {
  return useQuery({
    queryKey: ['userInfoLatLon', lat, lon],
    queryFn: () => fetchUserInfoByLatLon(lat, lon),
    enabled: enabled && lat !== 0 && lon !== 0,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

// Mutation hook for fetching new typing quote (useful for restart functionality)
export function useRefetchTypingQuote() {
  return useMutation({
    mutationFn: (minLength: number) => fetchTypingQuote(minLength),
  });
}
