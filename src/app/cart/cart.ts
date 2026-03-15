import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class CartComponent {
  constructor(private readonly cartService: CartService) {}

  get cartItems() {
    return this.cartService.cartItems();
  }

  get subtotal(): number {
    return this.cartService.subtotal();
  }

  increaseQuantity(index: number): void {
    this.cartService.increaseQuantity(index);
  }

  decreaseQuantity(index: number): void {
    this.cartService.decreaseQuantity(index);
  }

  removeCartItem(index: number): void {
    this.cartService.removeCartItem(index);
  }
}
