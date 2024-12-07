const crypto = require('crypto');

// 1-9 a-z special characters - 100
// 1 char:  a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z
// 2 chars: ab, ac 
// 3 chars: 
// secret key: a9k
// dsfsdfskdjfh skdjfh skdjfh skdjhf ksjdhf skdjfh dksjfh skdjfh sjkdhfg sjdhfg sjdhfg sdhjf gsjdhfg w hiwuyiw7ey 8wefy78wef
// const key = '1234456789abcdefghijklmnopqrstuvwxyz';

const key = '0123456789abcDEF';
const message = 'Hello World';
// 0 1 2 3 4 5 6 7 8 9 a b c d e f (16 hex-decimal characters)
function encrypt(text, secretKey) {
  const key = crypto.createHash('sha256').update(secretKey).digest();
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  return iv.toString('hex') + ':' + encrypted;
}

// Function to decrypt data
function decrypt(encryptedData, secretKey) {
  // Ensure the key is 32 bytes for AES-256
  const key = crypto.createHash('sha256').update(secretKey).digest();

  // Split the IV and the encrypted data
  const parts = encryptedData.split(':');
  const iv = Buffer.from(parts.shift(), 'hex');
  const encryptedText = parts.join(':');

  // Create a decipher
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);

  // Decrypt the text
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
}

// const encrypted = encrypt(message, key);
// console.log('Encrypted:', encrypted);

const decrypted = decrypt('4792c3b7a25644a2a9f9156c139614c8:db0fdf8c6ffafa20f69cf47f73a37743e92a47704060b8c23519e7dd7fd86c25', key);
console.log('Decrypted:', decrypted);