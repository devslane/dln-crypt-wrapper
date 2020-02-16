import * as crypto from 'crypto';

export class DlnCryptUtil {
    static generateKey(): string {
        return crypto.randomBytes(32).toString('hex');
    }

    static generateIV(): string {
        return crypto.randomBytes(16).toString('hex');
    }
}
