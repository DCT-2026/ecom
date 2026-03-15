import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart';
import { CheckoutComponent } from './checkout/checkout';
import { Home } from './home/home';
import { Blog } from './blog/blog';
import { ProductList } from './pages/product-list/product-list';
import {MobileProduct} from './pages/mobile-product/mobile-product'
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
    {
        path:'', component:Home
    },{
        path:'products',component:ProductList
    },{
        path:'Mobile',component:MobileProduct
    },
      {
        path:'', component:Blog
      }
];
