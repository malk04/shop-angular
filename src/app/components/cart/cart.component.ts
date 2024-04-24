import {Component, DoCheck, OnDestroy, OnInit} from '@angular/core';
import {IProductItem} from "../../models/products";
import {Subscription} from "rxjs";
import {ProductsService} from "../../services/products.service";
import {CardInCartComponent} from "../card-in-cart/card-in-cart.component";
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CardInCartComponent, HeaderComponent, FooterComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss', '../../app.component.scss']
})
export class CartComponent implements OnInit, OnDestroy, DoCheck{
  constructor(private ProductsService: ProductsService) { }
  cart!: IProductItem[];
  cartSubscription!: Subscription;
  itog: number = 0
  count: number = 0

  ngOnInit(): void {
    this.cartSubscription = this.ProductsService.getProductsFromCart().subscribe((data) => {
      this.cart = data
    })
  }

  ngOnDestroy(){
    if (this.cartSubscription) this.cartSubscription.unsubscribe();
  }

  ngDoCheck(): void {
    let sum: number = 0;
    let totalPrice: number = 0;
    this.cart?.forEach(obj => {
      if (obj.count){
        sum += obj.count;
        totalPrice += obj.price * obj.count;
      }
    });
    this.count = sum
    this.itog = totalPrice
  }
}
