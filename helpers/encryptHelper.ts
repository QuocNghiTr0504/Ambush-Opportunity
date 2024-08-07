// src/encryptionUtils.js
import CryptoJS from 'crypto-js';

// Provided by the system
const name = 'AMBUSHOPPORTUNITY';
const key = 'Gt!aP7#NeXqBMpd6!=eaVeu#5SaTVrRt';
const apiKey = 'C39RZVZaYr2Ah3UBqYrpBF?33rPmas@F';

export function encrypt(text: string, key: string) {
    var iv = CryptoJS.lib.WordArray.random(16);
    var encrypted = CryptoJS.AES.encrypt(text, CryptoJS.enc.Utf8.parse(key), {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return iv.concat(encrypted.ciphertext).toString(CryptoJS.enc.Base64);
}

export function getEncryptedData() {
    var dataToEncrypt = name + ':' + apiKey;
    var encryptedData = encrypt(dataToEncrypt, key);
    return {
        platformName: name,
        encryptedData: encryptedData
    };
}
