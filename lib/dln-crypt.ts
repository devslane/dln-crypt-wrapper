import { CryptAlg } from './helpers/enums/crypt-alg.enum';
import * as crypto from 'crypto';

export class DlnCrypt {
    private readonly ALG: CryptAlg;
    private readonly KEY: string;
    private readonly IV: string;

    constructor(key: string, iv: string, algorithm = CryptAlg.AES_128_CBC) {
        this.ALG = algorithm;
        this.KEY = key;
        this.IV = iv;
    }

    encrypt(plainText: string): string {
        const cipher = crypto.createCipheriv(this.ALG, Buffer.from(this.KEY, 'hex'), Buffer.from(this.IV, 'hex'));
        const data = new Buffer(plainText);

        const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);

        return encrypted.toString('hex');
    }

    decrypt(encryptedText: string): string {
        const decipher = crypto.createDecipheriv(this.ALG, Buffer.from(this.KEY, 'hex'), Buffer.from(this.IV, 'hex'));

        let text = decipher.update(encryptedText, 'hex', 'utf8');
        text += decipher.final('utf8');

        return text;
    }
}
