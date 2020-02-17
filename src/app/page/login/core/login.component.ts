import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Usernamepassword} from '../../../constant/usernamepassword';

@Component({
    templateUrl: '../../../../template/noop.template.html',
})


export class LoginComponent {
    userNameVal;
    passwordVal;

    userNamePasswordVal = Usernamepassword.list;

    validUserName: boolean = false;
    validPassword: boolean = false;

    constructor(private router: Router) {
    }

    userName(data) {
        this.userNameVal = data;
        let self = this;
        self.validUserName = false;
        this.userNamePasswordVal.some(function (item, index) {
            if (item.userName == data) {
                self.validUserName = true;
                return true;
            } else {
                self.validUserName = false;
            }
        });
    }

    passWord(data) {
        this.passwordVal = data;
        let self = this;
        self.validPassword = false;
        this.userNamePasswordVal.some(function (item, index) {
            if (item.password == data) {
                self.validPassword = true;
                return true;
            } else {
                self.validPassword = false;
            }
        });
    }

    register() {
        //this.router.navigate(['/register']);
    }

    submit() {
        localStorage.setItem('userNameVal', this.userNameVal);
        this.router.navigate(['/home']);
    }
}
