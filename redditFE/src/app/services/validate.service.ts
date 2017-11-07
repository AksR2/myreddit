import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

    constructor() { }


    validateLogin(user) {
        if (user.username === undefined ||
            user.username === '' ||
            user.password === undefined ||
            user.password === '') {
        return false;
        } else {
        return true;
        }
    }
}