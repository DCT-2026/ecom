import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class HeaderComponent {
  constructor(
    private readonly router: Router,
    private readonly cartService: CartService,
  ) {}

  readonly navItems = [
    'Categories',
    'New Arrivals',
    'Corporate Gifting',
    'Warranty Registration',
    'Support',
  ];

  readonly accountFeatures = [
    {
      title: 'Superior Quality',
      description: 'Premium gadgets. Sleek design. Powerful performance. Shop now!',
    },
    {
      title: 'Secure Payment',
      description: 'Shop worry-free! Secure payments are guaranteed',
    },
    {
      title: '7-Day Replacement',
      description: '7 days to swap! We guarantee hassle-free replacements',
    },
  ];

  readonly whatsappLink = 'https://wa.me/919999999999';

  searchQuery = '';
  mobileNumber = '';
  notifyOffers = true;
  accountMessage = '';
  accountMessageType: 'error' | 'success' | '' = '';
  isMobileMenuOpen = false;
  isSearchOpen = false;
  isCartOpen = false;
  isAccountModalOpen = false;

  get cartCount(): number {
    return this.cartService.cartCount();
  }

  get subtotal(): number {
    return this.cartService.subtotal();
  }

  get cartItems() {
    return this.cartService.cartItems();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    if (window.innerWidth >= 992) {
      this.isMobileMenuOpen = false;
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeSearch();
    this.closeCart();
    this.closeMobileMenu();
    this.closeAccountModal();
  }

  openSearch(): void {
    this.isSearchOpen = true;
    this.isCartOpen = false;
    this.isMobileMenuOpen = false;
    this.isAccountModalOpen = false;
  }

  closeSearch(): void {
    this.isSearchOpen = false;
  }

  openCart(): void {
    this.isCartOpen = true;
    this.isSearchOpen = false;
    this.isMobileMenuOpen = false;
    this.isAccountModalOpen = false;
  }

  closeCart(): void {
    this.isCartOpen = false;
  }

  toggleAccountModal(event?: Event): void {
    event?.preventDefault();
    event?.stopPropagation();
    this.accountMessage = '';
    this.accountMessageType = '';
    this.isAccountModalOpen = !this.isAccountModalOpen;
    this.isSearchOpen = false;
    this.isCartOpen = false;
    this.isMobileMenuOpen = false;
  }

  closeAccountModal(): void {
    this.isAccountModalOpen = false;
    this.accountMessage = '';
    this.accountMessageType = '';
  }

  increaseQuantity(index: number): void {
    this.cartService.increaseQuantity(index);
  }

  decreaseQuantity(index: number): void {
    this.cartService.decreaseQuantity(index);
  }

  removeCartItem(index: number): void {
    this.cartService.removeCartItem(index);
    if (this.cartItems.length === 0) {
      this.closeCart();
    }
  }

  viewCart(): void {
    this.closeCart();
    void this.router.navigate(['/cart']);
  }

  checkout(): void {
    this.closeCart();
    void this.router.navigate(['/checkout']);
  }

  submitAccountForm(): void {
    const normalizedNumber = this.mobileNumber.replace(/\D/g, '');

    if (normalizedNumber.length !== 10) {
      this.accountMessage = 'Enter a valid 10-digit mobile number.';
      this.accountMessageType = 'error';
      return;
    }

    this.mobileNumber = normalizedNumber;
    this.accountMessage = 'Mobile number accepted. You can continue with sign-in next.';
    this.accountMessageType = 'success';
  }
}
