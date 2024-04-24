import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss', '../../app.component.scss']
})
export class NotFoundComponent {

}
