var CryptoJS = require('crypto-js');
// var key = '889381';
// const message = 'Hello World';
// var result = CryptoJS.AES.encrypt(message, key).toString();
// console.log({ result });


// const CryptoJS = require('crypto-js');

// Function to encrypt data with a fixed IV
function encrypt(text, secretKey) {
  const key = CryptoJS.enc.Utf8.parse(secretKey);  // Parse the secret key
  const iv = CryptoJS.enc.Utf8.parse('1234567890123456'); // Fixed IV (16 bytes for AES)

  const encrypted = CryptoJS.AES.encrypt(text, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });

  return encrypted.toString();
}

// Function to decrypt data with a fixed IV
function decrypt(encryptedData, secretKey) {
  const key = CryptoJS.enc.Utf8.parse(secretKey);  // Parse the secret key
  const iv = CryptoJS.enc.Utf8.parse('1234567890123456'); // Fixed IV (same as encryption)

  const decrypted = CryptoJS.AES.decrypt(encryptedData, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });

  return decrypted.toString(CryptoJS.enc.Utf8);
}
// Example usage
const secretKey = '123123'; // Your custom secret key (shorter keys are automatically padded to fit AES requirements)
const textToEncrypt = 'Hello World';

const encrypted = encrypt(textToEncrypt, secretKey);
console.log('Encrypted:', encrypted);

// const decrypted = decrypt(encrypted, secretKey);
// console.log('Decrypted:', decrypted);