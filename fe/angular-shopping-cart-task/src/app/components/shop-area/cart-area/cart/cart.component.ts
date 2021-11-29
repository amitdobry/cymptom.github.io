import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductModel } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public products: {
    product: ProductModel;
  }[];
  private subscription: Subscription;
  constructor(private productService: ProductsService) {
    this.products = [];
    this.subscription = this.productService
      .getCartObservable()
      .subscribe((updatedProduct) => {
        if (updatedProduct) {
          this.products.push(updatedProduct);
        } else {
          this.products = [];
        }
      });
  }

  async removeFromCart(product: ProductModel) {
    console.log(product);
    const indexOfProductToSlice = this.products
      .map((x) => x.product)
      .indexOf(product);
    console.log(indexOfProductToSlice);
    console.log(
      'this.products[indexOfProductToSlice]',
      this.products[indexOfProductToSlice]
    );

    indexOfProductToSlice > -1
      ? this.products.splice(indexOfProductToSlice, 1)
      : false;
    console.log('this.products', this.products);
  }

  emptyCart() {
    this.productService.emptyCart();
  }
  ngOnInit(): void {}
}
