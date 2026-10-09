/**
 * Password Hashing Utility for Ruthra Medicines Admin
 * Generates a bcrypt hash (cost factor 12) for secure ADMIN_PASSWORD_HASH configuration.
 *
 * Usage:
 *   npx tsx scripts/hash-password.ts "yourSecurePasswordHere"
 *
 * Example:
 *   npx tsx scripts/hash-password.ts "MySuperSecretAdmin2026!"
 *   Output:
 *   $2a$12$e8hF1yQj6n3K8u5z7X9v...
 *
 * Copy the generated hash and set it in your production .env:
 *   ADMIN_PASSWORD_HASH="$2a$12$..."
 */

import bcrypt from 'bcryptjs';

async function main() {
  const plainPassword = process.argv[2];

  if (!plainPassword || plainPassword.trim().length === 0) {
    console.error('\x1b[31mError: Please provide a password to hash.\x1b[0m');
    console.log('\nUsage:');
    console.log('  npx tsx scripts/hash-password.ts "<password>"');
    console.log('\nExample:');
    console.log('  npx tsx scripts/hash-password.ts "AdminSecure2026!"\n');
    process.exit(1);
  }

  const saltRounds = 12;
  const hash = await bcrypt.hash(plainPassword.trim(), saltRounds);

  console.log('\n========================================');
  console.log('\x1b[32m✔ Bcrypt Hash Generated Successfully (Cost 12)\x1b[0m');
  console.log('========================================\n');
  console.log('Password Length :', plainPassword.length);
  console.log('Bcrypt Hash     : \x1b[36m' + hash + '\x1b[0m\n');
  console.log('To use this in your .env or server environment:');
  console.log(`ADMIN_PASSWORD_HASH="${hash}"\n`);
}

main().catch((err) => {
  console.error('Fatal error generating password hash:', err);
  process.exit(1);
});
