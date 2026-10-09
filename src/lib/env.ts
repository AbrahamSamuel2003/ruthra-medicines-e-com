/**
 * Environment variable validation helper.
 * Strictly avoids importing any Node.js-specific modules (fs, crypto, etc.)
 * so that it executes safely across both Node.js and Edge/Middleware runtimes.
 */
export function requireEnv(name: string, minLength = 16): string {
  const value = process.env[name];
  if (!value || typeof value !== 'string' || value.trim().length < minLength) {
    throw new Error(`Missing or weak env var: ${name}`);
  }
  return value.trim();
}
