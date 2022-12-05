export class Utilisateur {
    constructor(public courriel: string, public id: string, public accessToken?: string, public refreshToken?: string) {}

    /*get token() {
        if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            return '';
        }
        return this._token;
    }*/
}
