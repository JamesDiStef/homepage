import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-link-card',
    imports: [],
    templateUrl: './link-card.component.html',
    styleUrl: './link-card.component.css'
})
export class LinkCardComponent {
  @Input()
  title!: string;
  @Input() description!: string;
  @Input() buttonText: string = 'Visit the Page';
  @Input() link!: string;
  @Input() codeButtonText: string = 'See the code';
  @Input() codeButtonLink!: string;
  @Input() backendCodeButtonText?: string = 'See the backend code here';
  @Input() backendCodeButtonLink?: string = '';
}
