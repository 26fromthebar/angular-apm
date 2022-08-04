import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  showImage: boolean = false;

  private _listFilter: string = '';

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: IProduct[] = [];

  products: IProduct[] = [
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2022',
      description: '15 litre capacity rolling garden cart',
      price: 32.99,
      starRating: 4.2,
      imageUrl: '../../assets/images/clipper.svg',
    },
    {
      productId: 6,
      productName: 'Hammer',
      productCode: 'TXB-0048',
      releaseDate: 'May 5, 2022',
      description: 'Curved claw steel hammer',
      price: 8.9,
      starRating: 4.8,
      imageUrl: '../../assets/images/directions_marker.svg',
    },
  ];

  ngOnInit(): void {
    // this._listFilter = 'cart';
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLowerCase();
    const filteredProducts = this.products.filter((product) => {
      return product.productName.toLowerCase().includes(filterBy);
    });
    return filteredProducts;
  }
}
