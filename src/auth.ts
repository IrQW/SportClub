export class Auth {
    title: string = "Вход";
    path: string = "user/auth";

    constructor(flag: boolean) {
        if (flag) {
            this.title = "Выход";
            this.path = "/"
        }
        else {
            this.title = "Вход";
            this.path = "user/auth";
        }
    }
}