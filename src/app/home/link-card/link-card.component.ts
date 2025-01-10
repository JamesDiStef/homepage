import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-card',
  standalone: true,
  imports: [],
  templateUrl: './link-card.component.html',
  styleUrl: './link-card.component.css',
})
export class LinkCardComponent {
  @Input()
  title!: string;
  @Input() description!: string;
  @Input() buttonText!: string;
  @Input() link!: string;
}
