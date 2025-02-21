import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product: any;

  likeProduct() {
    this.product.likes += 1;
  }

  deleteProduct() {
    this.product.deleted = true;
  }

  shareOnWhatsApp(product: any) {
    const url = `https://api.whatsapp.com/send?text=Check out this product: ${product.name} - ${product.link}`;
    window.open(url, '_blank');
  }

  shareOnTelegram(product: any) {
    const url = `https://t.me/share/url?url=${product.link}&text=Check out this product: ${product.name}`;
    window.open(url, '_blank');
  }
}