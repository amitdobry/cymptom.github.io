import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  public products: ProductModel[] | null;
  public searchFound: boolean = false;
  public menuItemList: any;

  @ViewChildren('myItems')
  private items: QueryList<ElementRef> | undefined;

  constructor(private productsService: ProductsService) {
    this.products = [];
    this.menuItemList = [];
  }

  public async setFocusOnFirstMenuItem() {
    console.log('trying to focus');

    if (this.items != null && this.items.first != null) {
      console.log('in the if');
      console.log(this.items);

      console.log(this.items.first.nativeElement);
      console.log(this.items.first.nativeElement.focus());
      setTimeout(() => {
        console.log('focusing');
        if (this.items) {
          this.items.first.nativeElement.focus();
        }
      });
    }
  }
  public async focusChangeOrSubmitWithKeyboard(e: any, index: number) {
    console.log('e', e.key);
    if (this.items)
      switch (e.key) {
        case 'ArrowUp':
          e.stopPropagation();
          (index === 0
            ? this.items.last
            : this.items?.get(index - 1)
          )?.nativeElement.focus();
          break;
        case 'ArrowDown':
          e.stopPropagation();
          (index === this.items.length - 1
            ? this.items.first
            : this.items.get(index + 1)
          )?.nativeElement.focus();
          break;
        case 'Enter':
          console.log('e', e);
          console.log('this.products', this.products);
          if (this.products)
            this.addToCart(this.products[e.target.firstChild.id]);
      }
  }

  async onKeypressEvent(searchedValue: any) {
    console.log('searchedValue', await searchedValue.target.value);
    console.log('this.items', this.items);
    console.log('searchedValue', searchedValue);
    ('use strick');
    if (
      searchedValue.code === 'ArrowDown' ||
      searchedValue.code === 'Enter' ||
      searchedValue.which === 9
    ) {
      this.setFocusOnFirstMenuItem();
    } else {
      try {
        this.products =
          await this.productsService.getAllProductsBySearchedValue(
            await searchedValue.target.value
          );
        if (this.products === null) {
          this.searchFound = false;
        } else {
          this.searchFound = true;
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  async addToCart(product: any) {
    console.log(product);

    await this.productsService.addToCart(product);
    console.log('this.items', this.items);
  }

  public async onMouseEvent(event: MouseEvent) {
    this.setFocusOnFirstMenuItem();
  }
  public onKeyDown(event: KeyboardEvent, index: number) {
    console.log('in on key down');
  }

  async ngOnInit() {}
}
