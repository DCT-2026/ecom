import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class CheckoutComponent {
  constructor(private readonly cartService: CartService) {}

  get cartCount(): number {
    return this.cartService.cartCount();
  }

  get subtotal(): number {
    return this.cartService.subtotal();
  }
}
