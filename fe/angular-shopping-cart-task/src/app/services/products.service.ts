import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../models/product.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private subject = new Subject<any>();

  constructor(private http: HttpClient) {}

  addToCart(product: ProductModel) {
    this.subject.next({ product: product });
  }

  emptyCart() {
    this.subject.next();
  }

  getCartObservable(): Observable<any> {
    return this.subject.asObservable();
  }

  public async getAllProductsBySearchedValue(searchedValue: string) {
    try {
      const products = await this.http
        .get<ProductModel[]>(
          'http://localhost:3007/api/products/' + searchedValue
        )
        .toPromise();
      console.log('product', products);

      if (products[0] === null) {
        return null;
      }
      return products;
    } catch (err: any) {
      console.log(err.message);
    }
    return null;
  }
}
