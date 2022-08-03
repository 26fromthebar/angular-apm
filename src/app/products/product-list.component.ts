import { Component } from '@angular/core';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  pageTitle: string = 'Product List';
  showImage: boolean = false;
  listFilter = '';
  products: any[] = [
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

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
