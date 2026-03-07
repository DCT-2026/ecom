import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-carousel',
  imports: [CommonModule],
  templateUrl: './hero-carousel.html',
  styleUrl: './hero-carousel.css',
})
export class HeroCarousel {

slides = [
    {
      title: 'TUNE PRIME',
      subtitle: 'Turn Your Car Into an Entertainment Hub',
      price: '₹ 11,999',
      oldPrice: '₹ 24,999',
      image: '/assets/bannerimg/std.webp'
    },
    {
      title: 'SMART SPEAKER',
      subtitle: 'Powerful Sound Experience',
      price: '₹ 4,999',
      oldPrice: '₹ 7,999',
      image: '/assets/bannerimg/std1.webp'
    },
    {
      title: 'SPEAKER',
      subtitle: 'Powerful Sound Experience',
      price: '₹ 4,999',
      oldPrice: '₹ 7,999',
      image: '/assets/bannerimg/std1.webp'
    }
  ];

}
