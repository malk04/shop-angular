import { Routes } from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {CartComponent} from "./components/cart/cart.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";

export const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'cart', component: CartComponent},
  {path: '**', component: NotFoundComponent},
];
