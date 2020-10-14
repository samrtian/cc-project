declare var CryptoJS: any;

export class SecurityUtil {
    /**
     * 加
     * @param data 
     */
    static encrypt(data: any, key: any) {
        const parseKey = CryptoJS.enc.Utf8.parse(key);
        const srcs = CryptoJS.enc.Utf8.parse(data);
        const encrypted = CryptoJS.AES.encrypt(srcs, parseKey, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
        return encrypted.toString();
    }

    /**
     * 解
     * @param data 
     */
    static decrypt(data: any, key: any) {
        const parseKey = CryptoJS.enc.Utf8.parse(key);
        const decrypt = CryptoJS.AES.decrypt(data, parseKey, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
        return CryptoJS.enc.Utf8.stringify(decrypt).toString();
    }
}
