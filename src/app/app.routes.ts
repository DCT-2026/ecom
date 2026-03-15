import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart';
import { CheckoutComponent } from './checkout/checkout';
import { Home } from './home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
];
