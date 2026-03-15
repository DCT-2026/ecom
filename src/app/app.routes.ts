import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Blog } from './blog/blog';
import { ProductList } from './pages/product-list/product-list';
import {MobileProduct} from './pages/mobile-product/mobile-product'
export const routes: Routes = [
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
