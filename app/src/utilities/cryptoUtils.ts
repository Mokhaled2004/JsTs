import CryptoJS from 'crypto-js';
const secretKey = '0123456789abcDEF';

export function encrypt(text: string): string {
    return CryptoJS.AES.encrypt(text, secretKey).toString();
}

export function decrypt(encryptedData: string): string {
    var bytes  = CryptoJS.AES.decrypt(encryptedData, secretKey);
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
}
