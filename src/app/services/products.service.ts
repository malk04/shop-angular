import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IProductItem, IProducts} from "../models/products";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url: string = 'http://localhost:3000/products'
  urlCart: string = 'http://localhost:3000/cart'
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<IProducts>(this.url)
  }

  postProductToCart(product: IProductItem){
    return this.http.post<IProductItem>(this.urlCart, product)
  }

  getProductsFromCart() {
    return this.http.get<IProductItem[]>(this.urlCart)
  }

  deleteProduct(id: string){
    return this.http.delete<any>(`${this.urlCart}/${id}`)
  }

  updateProductInCart(product: IProductItem){
    return this.http.put<IProductItem>(`${this.urlCart}/${product.id}`, product)
  }
}
