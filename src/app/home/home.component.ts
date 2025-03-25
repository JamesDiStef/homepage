import { Component } from '@angular/core';
import { LinkCardComponent } from './link-card/link-card.component';

@Component({
    selector: 'app-home',
    imports: [LinkCardComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {}
