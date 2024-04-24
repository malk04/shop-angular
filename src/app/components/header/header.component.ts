import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../../app.component.scss']
})
export class HeaderComponent {
  @Input() count: number = 0;

}
