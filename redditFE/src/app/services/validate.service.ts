import { Injectable } from '@angular/core';
/**
 * 
 * 
 * @export
 * @class ValidateService
 */
@Injectable()
export class ValidateService {
/**
 * Creates an instance of ValidateService.
 * @memberof ValidateService
 */
constructor() { }

/**
 * 
 * Validate the username and password
 * @param {any} user 
 * @returns 
 * @memberof ValidateService
 */
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