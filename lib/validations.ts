import { z } from 'zod';

// Typing API validation
export const typingParamsSchema = z.object({
  minLength: z.string().regex(/^\d+$/, 'minLength must be a number'),
});

export const typingResponseSchema = z.object({
  quote: z.string(),
  author: z.string(),
});

// User Info by IP validation
export const userInfoByIPParamsSchema = z.object({
  userInfo: z.string().ip({ message: 'Invalid IP address' }).or(z.string().min(1)),
});

export const userInfoResponseSchema = z.object({
  zip: z.string(),
  country: z.string().optional(),
  countryCode: z.string().optional(),
  region: z.string().optional(),
  regionName: z.string().optional(),
  city: z.string().optional(),
  datetime: z.string().optional(),
  lat: z.number().optional(),
  lon: z.number().optional(),
  timezone: z.string().optional(),
  isp: z.string().optional(),
  org: z.string().optional(),
  as: z.string().optional(),
  query: z.string().optional(),
});

// User Info by Lat/Lon validation
export const userInfoByLatLonParamsSchema = z.object({
  lat: z.string().regex(/^-?\d+\.?\d*$/, 'lat must be a valid number'),
  lon: z.string().regex(/^-?\d+\.?\d*$/, 'lon must be a valid number'),
});

// Contact form validation (example for future use)
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

// Post validation schemas
export const postMetaSchema = z.object({
  id: z.string().min(1, 'Post ID is required'),
  title: z.string().min(1, 'Title is required').max(200, 'Title too long'),
  date: z.string().datetime({ message: 'Invalid date format' }),
  excerpt: z.string().min(10, 'Excerpt must be at least 10 characters').max(500, 'Excerpt too long'),
  tags: z.array(z.string()).optional(),
});

export const postSchema = postMetaSchema.extend({
  content: z.string().min(10, 'Content must be at least 10 characters'),
  imageUrl: z.string().url('Invalid image URL').optional().or(z.literal('')),
  videoUrl: z.string().url('Invalid video URL').optional().or(z.literal('')),
});

export const createPostSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title too long'),
  content: z.string().min(10, 'Content must be at least 10 characters'),
  excerpt: z.string().min(10, 'Excerpt must be at least 10 characters').max(500, 'Excerpt too long').optional(),
  imageUrl: z.string().url('Invalid image URL').optional().or(z.literal('')),
  videoUrl: z.string().url('Invalid video URL').optional().or(z.literal('')),
  tags: z.array(z.string()).optional(),
});

// Admin auth validation
export const adminAuthSchema = z.object({
  password: z.string().min(1, 'Password is required'),
});

export type TypingParams = z.infer<typeof typingParamsSchema>;
export type TypingResponse = z.infer<typeof typingResponseSchema>;
export type UserInfoByIPParams = z.infer<typeof userInfoByIPParamsSchema>;
export type UserInfoResponse = z.infer<typeof userInfoResponseSchema>;
export type UserInfoByLatLonParams = z.infer<typeof userInfoByLatLonParamsSchema>;
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type PostMeta = z.infer<typeof postMetaSchema>;
export type Post = z.infer<typeof postSchema>;
export type CreatePostData = z.infer<typeof createPostSchema>;
export type AdminAuth = z.infer<typeof adminAuthSchema>;
