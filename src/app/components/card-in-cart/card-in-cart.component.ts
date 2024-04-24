import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IProductItem} from "../../models/products";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-card-in-cart',
  standalone: true,
  imports: [],
  templateUrl: './card-in-cart.component.html',
  styleUrls: ['./card-in-cart.component.scss', '../../app.component.scss']
})
export class CardInCartComponent {
  constructor(private ProductsService: ProductsService) { }
  @Input() data!: IProductItem;
  @Input() cart!: IProductItem[];
  @Output() cartChange = new EventEmitter<IProductItem[]>();
  deleteFromCart(id: string){
    this.ProductsService.deleteProduct(id).subscribe(() => {
      const index = this.cart.findIndex(item => item.id === id);
      if (index !== -1) {
        this.cart.splice(index, 1);
        this.cartChange.emit(this.cart);
      }
    })
  }

  onPlus(){
    if (this.data.count) {
      this.data.count += 1
      this.ProductsService.updateProductInCart(this.data).subscribe(() => {
        const index = this.cart.findIndex(obj => obj.id === this.data.id);
        this.cart[index] = this.data;
        this.cartChange.emit(this.cart);
      })
    }
  }

  onMinus(){
    if (this.data.count && this.data.count > 1){
      this.data.count -= 1
      this.ProductsService.updateProductInCart(this.data).subscribe(() => {
        const index = this.cart.findIndex(obj => obj.id === this.data.id);
        this.cart[index] = this.data;
        this.cartChange.emit(this.cart);
      })
    }
  }
}
