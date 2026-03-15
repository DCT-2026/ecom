import { Component } from '@angular/core';
import { Product } from "../product/product";
import { Categories } from '../categories/categories';
import { CommonModule } from '@angular/common';
import { Footer } from '../footer/footer';
import { HeroCarousel } from '../hero-carousel/hero-carousel';
import {CarAccessoriesComponent} from '../car-accessories/car-accessories'
import {MobileAccessories} from '../mobile-accessories/mobile-accessories'


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    Categories,
    Footer,
    Product,
    HeroCarousel,CarAccessoriesComponent,MobileAccessories
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {}