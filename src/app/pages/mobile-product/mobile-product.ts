import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mobile-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobile-product.html',
  styleUrl: './mobile-product.css',
})
export class MobileProduct {

  category:string = '';

  products = [
{
category: "Charges",
name: "Adapto 65 Pro",
desc: "Charge Laptop | Dual Port",
price: 2999,
oldPrice: 3499,
discount: "14% OFF",
image: "/assets/mobileaccessories/Adapto 65 Pro.webp"
},
{
category: "Charges",
name: "Adapto 100 Pro",
desc: "100W Charger | 3 x Type C PD Port | 1 x USB-A Port",
price: 2499,
oldPrice: 4999,
discount: "50% OFF",
image: "/assets/mobileaccessories/Adapto 100 Pro.webp"
}, 
{
category: "Phone Wallets",
name: "Ruffpad 21 Pro",
desc: "21 Inch LCD Writing Tablet | Eco-Friendly | One Tap Erase",
price: 1399,
oldPrice: 3999,
discount: "65% OFF",
image: "/assets/mobileaccessories/Ruffpad 21 Pro.webp"
},
{
category: "Charges",
name: "Adapto 20X",
desc: "20W Type C PD Charger | PPS Fast Charging",
price: 399,
oldPrice: 599,
discount: "33% OFF",
image: "/assets/mobileaccessories/Adapto 20X.webp"
},
{
category: "Powerbanks",
name: "Moji 10",
desc: "10000mAh Magnetic Powerbank | 15W Wireless Charging",
price: 1549,
oldPrice: 3499,
discount: "56% OFF",
image: "/assets/mobileaccessories/Moji 10.webp"
},
{
category: "Powerbanks",
name: "Aqua 65",
desc: "20000mAh Power Bank | 65W Fast Charging | LED Display",
price: 2149,
oldPrice: 3999,
discount: "46% OFF",
image: "/assets/mobileaccessories/Aqua 65.webp"
},
{
category: "Powerbanks",
name: "Aero 65",
desc: "20000mAh Battery | 65W Fast Charging Powerbank",
price: 2199,
oldPrice: 3999,
discount: "45% OFF",
image: "/assets/mobileaccessories/Aero 65.webp"
},
{
category: "Powerbanks",
name: "Ignis 65",
desc: "20000mAh Laptop Power Bank | 65W PD Output",
price: 2049,
oldPrice: 3999,
discount: "49% OFF",
image: "/assets/mobileaccessories/Ignis 65.webp"
},
{
category: "Charges",
name: "Adapto 100D",
desc: "100W Multiport Charger | 3 Type-C PD Ports | LCD Display",
price: 3999,
oldPrice: 6999,
discount: "43% OFF",
image: "/assets/mobileaccessories/Adapto 100D.webp"
},
{
category: "Cables",
name: "SnapCase 5",
desc: "Retractable Type-C Cable | 8 Pin & USB-A Connector",
price: 699,
oldPrice: 1499,
discount: "53% OFF",
image: "/assets/mobileaccessories/SnapCase 5.webp"
},
{
category: "Cables",
name: "Net X20",
desc: "20M CAT6 Ethernet Cable | 1000Mbps Speed",
price: 499,
oldPrice: 1999,
discount: "75% OFF",
image: "/assets/mobileaccessories/Net X20.webp"
},
{
category: "Cables",
name: "Net X10",
desc: "10M CAT6 Ethernet Cable | High Speed Networking",
price: 349,
oldPrice: 999,
discount: "65% OFF",
image: "/assets/mobileaccessories/Net X10.webp"
},
{
category: "Cables",
name: "EtherC",
desc: "Type-C to RJ45 Ethernet Cable | Gigabit Speed",
price: 949,
oldPrice: 1999,
discount: "53% OFF",
image: "/assets/mobileaccessories/EtherC.webp"
},
{
category: "Cables",
name: "Konnect B",
desc: "100W Type-C Fast Charging Cable | Laptop Compatible",
price: 299,
oldPrice: 899,
discount: "67% OFF",
image: "/assets/mobileaccessories/Konnect B - Type.webp"
},
{
category: "Wireless Charges",
name: "Movo II",
desc: "3-in-1 Wireless Charger | 15W Charging | Bluetooth Speaker",
price: 2849,
oldPrice: 2999,
discount: "5% OFF",
image: "/assets/mobileaccessories/Movo II.webp"
},
{
category: "Powerbanks",
name: "Revvo",
desc: "10000mAh Magnetic Wireless Powerbank | 15W Wireless",
price: 1549,
oldPrice: 2999,
discount: "48% OFF",
image: "/assets/mobileaccessories/Revvo.webp"
},
{
category: "Gadget Cleaner",
name: "Clean One",
desc: "16-in-1 Gadget Cleaning Kit | Mobile & Laptop Cleaner",
price: 549,
oldPrice: 799,
discount: "31% OFF",
image: "/assets/mobileaccessories/Clean One.webp"
},
{
category: "Gadget Cleaner",
name: "Prysta",
desc: "Gadget Cleaner Spray | Microfiber Cloth",
price: 249,
oldPrice: 499,
discount: "50% OFF",
image: "/assets/mobileaccessories/Prysta.webp"
},
{
category: "Cables",
name: "Konnect X",
desc: "USB-A to Micro USB Cable | 3A Fast Charging",
price: 199,
oldPrice: 499,
discount: "60% OFF",
image: "/assets/mobileaccessories/Konnect X - USB.webp"
},
{
category: "Charges",
name: "Adapto 25A",
desc: "25W Fast Charging Adapter | VOOC / QC Support",
price: 399,
oldPrice: 999,
discount: "60% OFF",
image: "/assets/mobileaccessories/Adapto 25A.webp"
},{
category: "Charges",
name: "Konnect Sync",
desc: "200W Car Inverter | Dual USB Output",
price: 2999,
oldPrice: 3499,
discount: "14% OFF",
image: "/assets/mobileaccessories/Konnect Sync- 10m.webp"
},
{
category: "Charges",
name: "Adapto 100 Pro",
desc: "100W Charger | 3 x Type C PD Port | 1 x USB-A Port",
price: 2499,
oldPrice: 4999,
discount: "50% OFF",
image: "/assets/mobileaccessories/Adapto 100 Pro"
},
{
category: "Phone Wallets",
name: "Ruffpad 21 Pro",
desc: "21 Inch LCD Writing Tablet | Eco-Friendly | One Tap Erase",
price: 1399,
oldPrice: 3999,
discount: "65% OFF",
image: "/assets/mobileaccessories/Ruffpad 21 Pro.webp"
},
{
category: "Charges",
name: "Adapto 20X",
desc: "20W Type C PD Charger | PPS Fast Charging",
price: 399,
oldPrice: 599,
discount: "33% OFF",
image: "/assets/mobileaccessories/Adapto 20X.webp"
},

{
category: "Powerbanks",
name: "Moji 10",
desc: "10000mAh Magnetic Powerbank | 15W Wireless Charging",
price: 1549,
oldPrice: 3499,
discount: "56% OFF",
image: "/assets/mobileaccessories//assets/mobileaccessories/Moji 10.webp"
},
{
category: "Powerbanks",
name: "Aqua 65",
desc: "20000mAh Power Bank | 65W Fast Charging | LED Display",
price: 2149,
oldPrice: 3999,
discount: "46% OFF",
image: "/assets/mobileaccessories/Aqua 65.webp"
},
{
category: "Powerbanks",
name: "Aero 65",
desc: "20000mAh Battery | 65W Fast Charging Powerbank",
price: 2199,
oldPrice: 3999,
discount: "45% OFF",
image: "/assets/mobileaccessories//assets/mobileaccessories/Aero 65.webp"
},
{
category: "Powerbanks",
name: "Ignis 65",
desc: "20000mAh Laptop Power Bank | 65W PD Output",
price: 2049,
oldPrice: 3999,
discount: "49% OFF",
image: "/assets/mobileaccessories/Ignis 65.webp"
},

{
category: "Charges",
name: "Adapto 100D",
desc: "100W Multiport Charger | 3 Type-C PD Ports | LCD Display",
price: 3999,
oldPrice: 6999,
discount: "43% OFF",
image: "/assets/mobileaccessories/Adapto 100D.webp"
},

{
category: "Cables",
name: "SnapCase 5",
desc: "Retractable Type-C Cable | 8 Pin & USB-A Connector",
price: 699,
oldPrice: 1499,
discount: "53% OFF",
image: "/assets/mobileaccessories/SnapCase 5.webp"
},
{
category: "Cables",
name: "Net X20",
desc: "20M CAT6 Ethernet Cable | 1000Mbps Speed",
price: 499,
oldPrice: 1999,
discount: "75% OFF",
image: "/assets/mobileaccessories/Net X20.webp"
},
{
category: "Cables",
name: "Net X10",
desc: "10M CAT6 Ethernet Cable | High Speed Networking",
price: 349,
oldPrice: 999,
discount: "65% OFF",
image: "/assets/mobileaccessories/Net X10.webp"
},
{
category: "Cables",
name: "EtherC",
desc: "Type-C to RJ45 Ethernet Cable | Gigabit Speed",
price: 949,
oldPrice: 1999,
discount: "53% OFF",
image: "/assets/mobileaccessories/EtherC.webp"
},
{
category: "Cables",
name: "Konnect B",
desc: "100W Type-C Fast Charging Cable | Laptop Compatible",
price: 299,
oldPrice: 899,
discount: "67% OFF",
image: "/assets/mobileaccessories/Kconnect B.webp"
},

{
category: "Wireless Charges",
name: "Movo II",
desc: "3-in-1 Wireless Charger | 15W Charging | Bluetooth Speaker",
price: 2849,
oldPrice: 2999,
discount: "5% OFF",
image: "/assets/mobileaccessories/Movo II.webp"
},

{
category: "Powerbanks",
name: "Revvo",
desc: "10000mAh Magnetic Wireless Powerbank | 15W Wireless",
price: 1549,
oldPrice: 2999,
discount: "48% OFF",
image: "/assets/mobileaccessories/Revvo.webp"
},

{
category: "Gadget Cleaner",
name: "Clean One",
desc: "16-in-1 Gadget Cleaning Kit | Mobile & Laptop Cleaner",
price: 549,
oldPrice: 799,
discount: "31% OFF",
image: "/assets/mobileaccessories/Clean One.webp"
},
{
category: "Gadget Cleaner",
name: "Prysta",
desc: "Gadget Cleaner Spray | Microfiber Cloth",
price: 249,
oldPrice: 499,
discount: "50% OFF",
image: "/assets/mobileaccessories/Prysta.webp"
},

{
category: "Cables",
name: "Konnect X",
desc: "USB-A to Micro USB Cable | 3A Fast Charging",
price: 199,
oldPrice: 499,
discount: "60% OFF",
image: "/assets/mobileaccessories/Kcoonect X.webp"
},

{
category: "Charges",
name: "Adapto 25A",
desc: "25W Fast Charging Adapter | VOOC / QC Support",
price: 399,
oldPrice: 999,
discount: "60% OFF",
image: "/assets/mobileaccessories/Adapto 25A.webp"
},

{
category: "Wireless Charges",
name: "Freedom 4E",
desc: "15W Wireless Charger | Dual Alarm Clock | LED Display",
price: 1399,
oldPrice: 2999,
discount: "53% OFF",
image: "/assets/mobileaccessories/Freedom 4E.webp"
},

{
category: "Charges",
name: "Adapto 30V",
desc: "30W Fast Charging Adapter | Multiple Protocol",
price: 699,
oldPrice: 999,
discount: "30% OFF",
image: "/assets/mobileaccessories/Adapto 30V.webp"
},

{
category: "Powerbanks",
name: "Luxcell UNO 10K",
desc: "10000mAh Slim Powerbank | 22.5W Fast Charging",
price: 849,
oldPrice: 1999,
discount: "58% OFF",
image: "/assets/mobileaccessories/Luxcell UNO 10K.webp"
},

{
category: "Powerbanks",
name: "Power Plus II",
desc: "WiFi Router Powerbank | Up to 4 Hours Backup",
price: 1049,
oldPrice: 2999,
discount: "65% OFF",
image: "/assets/mobileaccessories/Power Plus II.webp"
},

{
category: "Charges",
name: "Juicemate Go",
desc: "Universal Travel Adapter | 6A Output",
price: 299,
oldPrice: 499,
discount: "40% OFF",
image: "/assets/mobileaccessories/Juicsmate Go.webp"
},

{
category: "Charges",
name: "Adapto 65M",
desc: "65W Triple Port Charger | 2 Type-C + 1 USB-A",
price: 1199,
oldPrice: 2499,
discount: "52% OFF",
image: "/assets/mobileaccessories/Adapto 65M.webp"
},

{
category: "Wireless Charges",
name: "ChargeMate Trio",
desc: "3-in-1 Wireless Charging Pad | 15W Output",
price: 1399,
oldPrice: 1999,
discount: "30% OFF",
image: "/assets/mobileaccessories/ChargeMate Trio.webp"
},

{
category: "Wireless Charges",
name: "Movo",
desc: "15W Wireless Charger | Ring Light | Bluetooth Speaker",
price: 4099,
oldPrice: 4999,
discount: "18% OFF",
image: "/assets/mobileaccessories/Movo.webp"
},

{
category: "Wireless Charges",
name: "Tricharge",
desc: "4-in-1 Wireless Charger | LED Lamp | MagSafe",
price: 1999,
oldPrice: 2999,
discount: "33% OFF",
image: "/assets/mobileaccessories/Tricharge.webp"
},

{
category: "Cables",
name: "Konnect Y",
desc: "USB-A to Type-C Cable | 6A Fast Charging",
price: 299,
oldPrice: 799,
discount: "63% OFF",
image: "/assets/mobileaccessories/Konnect Y.webp"
},

{
category: "Charges",
name: "Adapto 35B",
desc: "35W Dual Port Fast Charger | Type-C PD",
price: 649,
oldPrice: 1999,
discount: "68% OFF",
image: "/assets/mobileaccessories/Adapto 35B.webp"
},

{
category: "Mobile Holder",
name: "Charge Clamp",
desc: "15W Wireless Car Charger | 360° Rotation",
price: 1299,
oldPrice: 2499,
discount: "48% OFF",
image: "/assets/mobileaccessories/Charge Clamp.webp"
},

{
category: "Charges",
name: "JuiceMate 4",
desc: "International Travel Adapter | 20W PD",
price: 1049,
oldPrice: 1999,
discount: "48% OFF",
image: "/assets/mobileaccessories/JuiceMate 4>webp"
},

{
category: "Cable Organiser",
name: "Uniconnect 5M",
desc: "USB-A Male to Female Extension Cable",
price: 249,
oldPrice: 799,
discount: "69% OFF",
image: "/assets/mobileaccessories/Uniconnect 5M.webp"
},
{
category: "Cable Organiser",
name: "Uniconnect 3M",
desc: "USB-A Male to Female 3M Extension Cable",
price: 225,
oldPrice: 699,
discount: "68% OFF",
image: "/assets/mobileaccessories/UNiconnect 3M.webp"
},

{
category: "Cables",
name: "Printlink 5",
desc: "USB-A to USB-B Printer Cable | 5M",
price: 249,
oldPrice: 899,
discount: "72% OFF",
image: "/assets/mobileaccessories/Printlink 5 - USB.webp"
},
{
category: "Cables",
name: "Printlink 3",
desc: "USB-A to USB-B Printer Cable | 3M",
price: 225,
oldPrice: 599,
discount: "62% OFF",
image: "/assets/mobileaccessories/Printlink 3 - USB.webp"
},
{
category: "Cables",
name: "Printlink 1.5",
desc: "USB-A to USB-B Printer Cable | 1.5M",
price: 199,
oldPrice: 399,
discount: "50% OFF",
image: "/assets/mobileaccessories/Printlink 1.5 - U.webp"
},

{
category: "Powerbanks",
name: "Power Shutter Home",
desc: "10000mAh Wireless Powerbank | 22.5W Fast Charging",
price: 5299,
oldPrice: 9999,
discount: "47% OFF",
image: "/assets/mobileaccessories/Power Shutter Home.webp"
},

{
category: "Cables",
name: "HUE X",
desc: "60W Type-C to Type-C Cable | Braided",
price: 249,
oldPrice: 899,
discount: "72% OFF",
image: "/assets/mobileaccessories/HUE X - Type C To 60w.webp"
},

{
category: "Charges",
name: "Adapto 45A",
desc: "45W GaN Type-C Fast Charger",
price: 949,
oldPrice: 1499,
discount: "37% OFF",
image: "/assets/mobileaccessories/Adapto 45A.webp"
},

{
category: "Charges",
name: "JuiceMate 3",
desc: "Universal Travel Adapter | 6A AC Socket",
price: 449,
oldPrice: 799,
discount: "44% OFF",
image: "/assets/mobileaccessories/JuiceMAte 3.webp"
},

{
category: "Charges",
name: "JuiceMate 2",
desc: "Universal Adapter | Dual USB Output",
price: 649,
oldPrice: 999,
discount: "35% OFF",
image: "/assets/mobileaccessories/JuiceMate 2.webp"
},

{
category: "Wireless Charges",
name: "Quikk",
desc: "15W Qi2 Magnetic Wireless Charger",
price: 1199,
oldPrice: 2499,
discount: "52% OFF",
image: "/assets/mobileaccessories/Quikk.webp"
},

{
category: "Wireless Charges",
name: "Flux 2",
desc: "15W MagSafe Compatible Wireless Charger",
price: 1499,
oldPrice: 1999,
discount: "25% OFF",
image: "/assets/mobileaccessories/Flux 2.webp"
},

{
category: "Charges",
name: "Adapto 35G",
desc: "35W GaN Fast Charger | Type-C PD",
price: 699,
oldPrice: 1499,
discount: "53% OFF",
image: "/assets/mobileaccessories/Adapto 35G.webp"
},

{
category: "Charges",
name: "Adapto 45C",
desc: "45W GaN Type-C Charger | PD & PPS",
price: 1099,
oldPrice: 1999,
discount: "45% OFF",
image: "/assets/mobileaccessories/Adapto 45C.webp"
},

{
category: "Charges",
name: "Adapto 65C",
desc: "65W Laptop Charger | Type-C PD",
price: 1399,
oldPrice: 2499,
discount: "44% OFF",
image: "/assets/mobileaccessories/Adapto 65C.webp"
},

{
category: "Powerbanks",
name: "Chyro",
desc: "Wireless Powerbank With Stand | 15W Wireless",
price: 1549,
oldPrice: 2999,
discount: "48% OFF",
image: "/assets/mobileaccessories/Chyro.webp"
},

{
category: "Charges",
name: "Adapto 100",
desc: "100W GaN Multiport Charger",
price: 3099,
oldPrice: 4999,
discount: "38% OFF",
image: "/assets/mobileaccessories/Adapto 100.webp"
},

{
category: "Powerbanks",
name: "PowerPod 10K",
desc: "10000mAh Compact Powerbank | 22.5W Output",
price: 1149,
oldPrice: 1999,
discount: "43% OFF",
image: "/assets/mobileaccessories/PowerPod 10K.webp"
},

{
category: "Wireless Charges",
name: "Freedom Fold 3",
desc: "Fast Wireless Charger | Foldable Stand",
price: 1499,
oldPrice: 2999,
discount: "50% OFF",
image: "/assets/mobileaccessories/Freedom Fold 3.webp"
},

{
category: "Wireless Charges",
name: "VoltClock",
desc: "15W Wireless Charger | Alarm Clock | Temperature Display",
price: 1699,
oldPrice: 2999,
discount: "43% OFF",
image: "/assets/mobileaccessories/VoltClock.webp"
},

{
category: "Wireless Charges",
name: "Hexacharge",
desc: "6-in-1 Wireless Charging Station | Clock | Pen Stand",
price: 2699,
oldPrice: 3499,
discount: "23% OFF",
image: "/assets/mobileaccessories/Hexacharge.webp"
}
]
filteredProducts:any[]=[];

  constructor(private route:ActivatedRoute){

    this.route.queryParams.subscribe(params =>{

      this.category = params['category'];

      if(this.category === 'All'){
        this.filteredProducts = this.products;
      }
      else{
        this.filteredProducts =
          this.products.filter(p=>p.category===this.category);
      }

    });

  }

}
