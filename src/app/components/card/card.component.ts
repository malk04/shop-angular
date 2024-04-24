import {Component, DoCheck, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {IProductItem} from "../../models/products";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss', '../../app.component.scss']
})
export class CardComponent implements DoCheck{
  constructor(private ProductsService: ProductsService) { }

  @Input() data!: IProductItem;
  @Input() cart!: IProductItem[];
  flag: boolean = false;
  @Output() cartChange = new EventEmitter<IProductItem[]>();

  addToCart(product: IProductItem){
    if (!this.flag){
      product.count = 1;
      this.ProductsService.postProductToCart(product).subscribe((data) => {
        this.flag = true
        this.cart.push(data)
        this.cartChange.emit(this.cart);
      })
    }
  }

  ngDoCheck(): void {
    this.flag = !!this.cart?.find(i => i.id === this.data?.id)
  }
}
