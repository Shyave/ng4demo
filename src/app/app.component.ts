import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'app';

    navBar = [
        { name: 'Products', desc: 'This section is related to products', link: 'products' },
        { name: 'Suppliers', desc: 'This section is related to suppliers', link: 'suppliers' }
    ];
}
