import {Component, DoCheck, OnDestroy, OnInit} from '@angular/core';
import {IProductItem, IProducts} from "../../models/products";
import {ProductsService} from "../../services/products.service";
import {Subscription} from "rxjs";
import {NgForOf} from "@angular/common";
import {CardComponent} from "../card/card.component";
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    NgForOf,
    CardComponent,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss', '../../app.component.scss']
})
export class MainComponent implements OnInit, OnDestroy, DoCheck{
  products!: IProducts;
  productsSubscription!: Subscription;
  cart!: IProductItem[];
  cartSubscription!: Subscription;
  count: number = 0

  constructor(private ProductsService: ProductsService) { }

  ngOnInit(){
    this.productsSubscription = this.ProductsService.getProducts().subscribe((data) => {
      this.products = data;
    })
    this.cartSubscription = this.ProductsService.getProductsFromCart().subscribe((data) => {
      this.cart = data
    })
  }

  ngOnDestroy(){
    if (this.productsSubscription) this.productsSubscription.unsubscribe();
    if (this.cartSubscription) this.cartSubscription.unsubscribe();
  }

  ngDoCheck(): void {
    let sum: number = 0;
    this.cart?.forEach(obj => {
      if (obj.count){
        sum += obj.count;
      }
    });
    this.count = sum
  }
}
