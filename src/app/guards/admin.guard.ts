import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CanActivate } from "@angular/router";

@Injectable()
export class AdminGuard implements CanActivate {

    constructor(
        private router: Router
    ) {

    }

    canActivate() {

        //verificando se há um usuário autenticado com um token preenchido
        if (localStorage.getItem('dados-usuario') != null) {
            var json = JSON.parse(localStorage.getItem('dados-usuario') as string);
            return json.token != null;
        }

        this.router.navigate(['/acessar-conta']);
        return false;
    }
}