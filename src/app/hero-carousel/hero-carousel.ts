import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-carousel.html',
  styleUrls: ['./hero-carousel.css']
})
export class HeroCarousel {
  slides = [
    {
      image: '/assets/banner1.jpg',
      title: 'SMART SPEAKER',
      subtitle: 'Powerful Sound Experience',
      price: '\u20B94,999',
      oldPrice: '\u20B97,999'
    },
    {
      image: '/assets/banner2.jpg',
      title: 'TUNE PRIME',
      subtitle: 'Turn your car into entertainment hub',
      price: '\u20B911,999',
      oldPrice: '\u20B924,999'
    },
    {
      image: '/assets/banner3.jpg',
      title: 'POWER BANK',
      subtitle: 'Fast charging experience',
      price: '\u20B91,499',
      oldPrice: '\u20B92,499'
    }
  ];
}
