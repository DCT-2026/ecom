import { Injectable, computed, signal } from '@angular/core';

export interface CartItem {
  image: string;
  name: string;
  quantity: number;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly cartItemsSignal = signal<CartItem[]>([
    {
      image: 'assets/banner2.jpg',
      name: 'Mport 45W GaN Fast Charger',
      quantity: 1,
      price: 1499,
    },
    {
      image: 'assets/banner3.jpg',
      name: 'Zeno Buds Wireless Earbuds',
      quantity: 1,
      price: 1999,
    },
  ]);

  readonly cartItems = this.cartItemsSignal.asReadonly();
  readonly cartCount = computed(() =>
    this.cartItemsSignal().reduce((count, item) => count + item.quantity, 0),
  );
  readonly subtotal = computed(() =>
    this.cartItemsSignal().reduce((total, item) => total + item.price * item.quantity, 0),
  );

  increaseQuantity(index: number): void {
    this.cartItemsSignal.update((items) =>
      items.map((item, itemIndex) =>
        itemIndex === index ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  decreaseQuantity(index: number): void {
    this.cartItemsSignal.update((items) =>
      items.map((item, itemIndex) =>
        itemIndex === index && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item,
      ),
    );
  }

  removeCartItem(index: number): void {
    this.cartItemsSignal.update((items) => items.filter((_, itemIndex) => itemIndex !== index));
  }
}
