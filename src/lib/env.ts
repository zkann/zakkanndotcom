/**
 * Environment configuration utilities
 */

export const isProduction = process.env.NODE_ENV === 'production';
export const isDevelopment = process.env.NODE_ENV === 'development';
export const isTest = process.env.NODE_ENV === 'test';

/**
 * Check if analytics should be enabled
 * Currently only enabled in production, but can be overridden with env var
 */
export const shouldEnableAnalytics = isProduction && process.env.DISABLE_ANALYTICS !== 'true';

/**
 * Check if tracking pixels should be enabled
 * Currently only enabled in production, but can be overridden with env var
 */
export const shouldEnableTracking = isProduction && process.env.DISABLE_TRACKING !== 'true'; 