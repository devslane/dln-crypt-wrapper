import * as bcrypt from "bcrypt";

export class DlnHash {
    private readonly SALT_ROUNDS: number;

    constructor(saltRounds = 8) {
        this.SALT_ROUNDS = saltRounds;
    }

    hash(plainText: string): Promise<string> {
        return bcrypt.hash(plainText, this.SALT_ROUNDS);
    }

    hashSync(plainText: string): string {
        return bcrypt.hashSync(plainText, this.SALT_ROUNDS);
    }

    compareHash(plainText: string, hash: string): Promise<boolean> {
        return bcrypt.compare(plainText, hash);
    }

    compareHashSync(plainText: string, hash: string): boolean {
        return bcrypt.compareSync(plainText, hash);
    }
}
