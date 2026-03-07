import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { HeroCarousel } from "../hero-carousel/hero-carousel";

@Component({
  selector: 'app-home',
  imports: [Header, Footer, HeroCarousel],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
