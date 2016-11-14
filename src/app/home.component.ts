import { Component } from '@angular/core';

@Component({
    selector: "home",
    template: `
        <h1>App de Angular 2 (Locales)</h1>
        <a routerLink="paths">Paths</a>
        <a routerLink="path-detail">Path Detail</a>
        <router-outlet></router-outlet>
    `
})

export class HomeComponent{}