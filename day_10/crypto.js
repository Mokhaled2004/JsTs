const encryptionKey = '0123456789abcDEF';

function decrypt(encryptedData) {
    var bytes  = CryptoJS.AES.decrypt(encryptedData, encryptionKey);
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
}
