const CryptoJS = require("crypto-js")

/**
 * 对密码加密
 * @param passwd {string} 明文的密码
 * @return {string} 加密之后的密码
 */
function encryptPasswd(passwd) {
    const key = "passport-gw-pc";
    const keyUTF8 = CryptoJS.enc.Utf8.parse(key);
    const encrypted = CryptoJS.DES.encrypt(passwd, keyUTF8, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
}

console.log(encryptPasswd("nopasswd"));
// Output:
// CuAXgrdSbJgz0pUfjgPwhg==




