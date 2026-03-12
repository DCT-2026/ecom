import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrls:['./product-list.css']
})
export class ProductList {

  category:string = '';

  products = [
    {
      category: "Car Mobile Holder",
      name: "CLAMP M4 PRIME",
      desc: "Windshield & Dashboard Mountable | Strong Suction Cup",
      price: 399,
      oldPrice: 699,
      discount: "43% OFF",
      image: "/assets/caraccessories/Clamp M4 Prime.webp"
    },
    {
      category: "Car Emergency Kit",
      name: "VAYU COP",
      desc: "6-in-1 Portable Rechargeable Car Inflator | 4x2000mAh Batteries",
      price: 5999,
      oldPrice: 8999,
      discount: "33% OFF",
      image: "/assets/caraccessories/Vayu Cop.webp"
    },
    {
      category: "Tyre Inflator",
      name: "VAYU 3T",
      desc: "Type-C Rechargeable Tyre Inflator | 2x2000mAh Batteries",
      price: 1649,
      oldPrice: 4999,
      discount: "67% OFF",
      image: "/assets/caraccessories/Vayu 3T.webp"
    },
    {
      category: "Car Bluetooth",
      name: "TUNE PRIME",
      desc: "Wireless CarPlay/Android Auto Adapter | Stream YouTube & Netflix",
      price: 11999,
      oldPrice: 24999,
      discount: "52% OFF",
      image: "/assets/caraccessories/Tune Prime.webp"
    },
    {
      category: "Car Bluetooth",
      name: "AUTO 10 PLUS",
      desc: "30W Type-C PD | 18W USB | Hands-Free Calling & Music",
      price: 899,
      oldPrice: 1999,
      discount: "55% OFF",
      image: "/assets/caraccessories/Auto10Plus.webp"
    },
    {
      category: "Car Charger",
      name: "CAR POWER 3X",
      desc: "17W Charger | Built-in 3-in-1 Cable (Type-C, Lightning, Micro USB)",
      price: 599,
      oldPrice: 999,
      discount: "40% OFF",
      image: "/assets/caraccessories/Car Power 3X.webp"
    },
    {
      category: "Bike Mobile Holder",
      name: "MOBIKE 5 PLUS",
      desc: "360° Rotatable Mobile Holder | Mirror Mount | Sunshade",
      price: 499,
      oldPrice: 899,
      discount: "44% OFF",
      image: "/assets/caraccessories/Mobike 5 Plus.webp"
    },
    {
      category: "Bike Mobile Holder",
      name: "MOBIKE 4 PLUS",
      desc: "360° Rotatable Holder | Handlebar Mount | Built-in Sunshade",
      price: 499,
      oldPrice: 899,
      discount: "44% OFF",
      image: "/assets/caraccessories/Mobike 4.webp"
    },
    {
      category: "Tyre Inflator",
      name: "VAYU 10",
      desc: "150 PSI Portable Inflator | Type-C Fast Charging",
      price: 1699,
      oldPrice: 4999,
      discount: "66% OFF",
      image: "/assets/caraccessories/Vayu 10.webp"
    },
    {
      category: "Car Inverter",
      name: "ZAPTOR",
      desc: "200W Car Inverter | Dual AC Socket | Dual 20W Type-C PD",
      price: 2499,
      oldPrice: 2999,
      discount: "17% OFF",
      image: "/assets/caraccessories/Zaptor.webp"
    },
    {
      category: "Car Bluetooth",
      name: "TUNE LITE",
      desc: "Wireless CarPlay / Android Auto | Plug & Play",
      price: 1699,
      oldPrice: 3499,
      discount: "51% OFF",
      image: "/assets/caraccessories/Tune Lite.webp"
    },
    {
      category: "Tyre Inflator",
      name: "VAYU 9.0",
      desc: "Portable Inflator | 3×2000mAh Battery | Type-C Charging",
      price: 2099,
      oldPrice: 3999,
      discount: "48% OFF",
      image: "/assets/caraccessories/Vayu 9.0.webp"
    },
    {
      category: "Car Charger",
      name: "CAR POWER III PRO",
      desc: "65W Type-C Laptop Charging | Dual USB-A Ports",
      price: 3199,
      oldPrice: 3999,
      discount: "20% OFF",
      image: "/assets/caraccessories/Car Power III Pro.webp"
    },
    {
      category: "Car Bluetooth",
      name: "TUNE PLUS",
      desc: "CarPlay Adapter | Built-in YouTube & Netflix",
      price: 6449,
      oldPrice: 9999,
      discount: "36% OFF",
      image: "/assets/caraccessories/Tune Plus.webp"
    },
    {
      category: "Corded Tyre Inflator",
      name: "VAYU 5.0 LITE",
      desc: "150 PSI Corded Inflator | 3m Power Cable",
      price: 1599,
      oldPrice: 2999,
      discount: "47% OFF",
      image: "/assets/caraccessories/Vayu 5.0 Lite.webp"
    },
    {
      category: "Car Charger",
      name: "CAR POWER ARMOUR",
      desc: "55.5W Fast Charger | Dual Port | LED Voltage Display",
      price: 549,
      oldPrice: 799,
      discount: "31% OFF",
      image: "/assets/caraccessories/Car Power Armour.webp"
    },
    {
      category: "Car Charger",
      name: "CAR POWER QUARD",
      desc: "111W Four Port Charger | Dual Type-C PD",
      price: 549,
      oldPrice: 799,
      discount: "31% OFF",
      image: "/assets/caraccessories/Car Power Quard.webp"
    },
    {
      category: "Tyre Inflator",
      name: "VAYU 8.0",
      desc: "150 PSI Inflator | Pre-set Modes | SOS Flashlight",
      price: 1649,
      oldPrice: 4999,
      discount: "67% OFF",
      image: "/assets/caraccessories/Vayu 8.0.webp"
    },
    {
      category: "Wireless Car Charger",
      name: "CHARGE CLAMP",
      desc: "15W Wireless Charging | 360° Rotation",
      price: 1299,
      oldPrice: 2499,
      discount: "48% OFF",
      image: "/assets/caraccessories/Charge Clamp.webp"
    },
    {
      category: "Vacuum Cleaner",
      name: "MOPCOP 4",
      desc: "18,000Pa Suction | HEPA Filter | LED Display",
      price: 2749,
      oldPrice: 4999,
      discount: "45% OFF",
      image: "/assets/caraccessories/Mopcop 4.webp"
    },
    {
      category: "Car Charger",
      name: "CAR POWER TRAIL",
      desc: "111W 4 Ports Car Charger | Dual 30W Type-C PD",
      price: 899,
      oldPrice: 1499,
      discount: "40% OFF",
      image: "/assets/caraccessories/Car Power Trail.webp"
    },

    {
      category: "Car Charger",
      name: "CAR POWER VIEW PLUS",
      desc: "Dual Port 55.5W Car Charger | Transparent Design",
      price: 399,
      oldPrice: 699,
      discount: "43% OFF",
      image: "/assets/caraccessories/Car Power View Plus.webp"
    },

    {
      category: "Tyre Inflator",
      name: "VAYU 7.0",
      desc: "Full Size Digital Display | Pre-set Inflation Modes",
      price: 1699,
      oldPrice: 4999,
      discount: "66% OFF",
      image: "/assets/caraccessories/Vayu 7.0.webp"
    },

    {
      category: "Car Charger",
      name: "CAR POWER RETRACTO",
      desc: "84W Total Output | Retractable Cable Charger",
      price: 849,
      oldPrice: 1299,
      discount: "35% OFF",
      image: "/assets/caraccessories/Car Power Retracto.webp"
    },

    {
      category: "Vacuum Cleaner",
      name: "MOPCOP 3",
      desc: "Strong Suction | Washable HEPA Filtration",
      price: 1499,
      oldPrice: 3499,
      discount: "57% OFF",
      image: "/assets/caraccessories/Mopcop 3.webp"
    },

    {
      category: "Car Charger",
      name: "CAR POWER VIEW",
      desc: "36W Type-C PD | 18W USB | Transparent Design",
      price: 349,
      oldPrice: 699,
      discount: "50% OFF",
      image: "/assets/caraccessories/Car Power View.webp"
    },

    {
      category: "Bike Mobile Holder",
      name: "MOBIKE 5",
      desc: "Universal Compatibility | Tight Grip | 360° Rotation",
      price: 399,
      oldPrice: 599,
      discount: "33% OFF",
      image: "/assets/caraccessories/Mobike 5.webp"
    },

    {
      category: "CarPlay Adapter",
      name: "TUNE",
      desc: "Wireless CarPlay / Android Auto Adapter",
      price: 1849,
      oldPrice: 4999,
      discount: "63% OFF",
      image: "/assets/caraccessories/Tune.webp"
    },

    {
      category: "Tyre Inflator",
      name: "VAYU 4.0",
      desc: "Battery & Corded Use | Pre-set Inflation Modes",
      price: 1899,
      oldPrice: 5499,
      discount: "65% OFF",
      image: "/assets/caraccessories/Vayu 4.0.webp"
    },

    {
      category: "Tyre Inflator",
      name: "VAYU 5.0",
      desc: "Rechargeable Tyre Inflator | Fast Inflation Modes",
      price: 2349,
      oldPrice: 5999,
      discount: "61% OFF",
      image: "/assets/caraccessories/Vayu 5.0.webp"
    },

    {
      category: "Car Mobile Holder",
      name: "CLAMP M5",
      desc: "Suction Cup Mount | Rotation Base | Pivot Arm",
      price: 449,
      oldPrice: 999,
      discount: "55% OFF",
      image: "/assets/caraccessories/Clamp M5.webp"
    },

    {
      category: "Car Charger",
      name: "CAR POWER 80",
      desc: "80W Output | 45W Type-C PD | 35W USB",
      price: 549,
      oldPrice: 1499,
      discount: "63% OFF",
      image: "/assets/caraccessories/Car Power 80.webp"
    },

    {
      category: "Vacuum Cleaner",
      name: "MOPCOP PRO",
      desc: "10k Pa Suction | Vacuum Cleaner & Air Blower",
      price: 1799,
      oldPrice: 2999,
      discount: "40% OFF",
      image: "/assets/caraccessories/Mopcop Pro.webp"
    },

    {
      category: "Car Charger",
      name: "SPARK",
      desc: "55.5W Output | Dual Port Charger for Two-Wheelers",
      price: 649,
      oldPrice: 699,
      discount: "7% OFF",
      image: "/assets/caraccessories/Spark.webp"
    },

    {
      category: "Car Mobile Holder",
      name: "CLAMP M4",
      desc: "180° Rotation | One-hand Operation",
      price: 325,
      oldPrice: 799,
      discount: "59% OFF",
      image: "/assets/caraccessories/Clamp M4.webp"
    },

    {
      category: "Car Mobile Holder",
      name: "CLAMP Z",
      desc: "AC Vent Mount | 180° Rotation",
      price: 299,
      oldPrice: 699,
      discount: "57% OFF",
      image: "/assets/caraccessories/Clamp Z.webp"
    },

    {
      category: "Car Vacuum Cleaner",
      name: "MOPCOP",
      desc: "Rechargeable Battery | Large Dust Container",
      price: 1499,
      oldPrice: 2999,
      discount: "50% OFF",
      image: "/assets/caraccessories/Mopcop.webp"
    },

    {
      category: "Tyre Inflator",
      name: "VAYU 3.0",
      desc: "2x2000mAh Battery | Preset Modes",
      price: 2099,
      oldPrice: 4999,
      discount: "58% OFF",
      image: "/assets/caraccessories/Vayu 3.0.webp"
    },

    {
      category: "Car Wireless Charger",
      name: "CHARGE CLAMP 4",
      desc: "15W Wireless Charger | AC Vent Mount",
      price: 899,
      oldPrice: 1999,
      discount: "55% OFF",
      image: "/assets/caraccessories/Charge Clamp 4.webp"
    },

    {
      category: "Car Charger",
      name: "CAR POWER 1C",
      desc: "71W Triple Output | 33W Type-C Cable",
      price: 549,
      oldPrice: 999,
      discount: "45% OFF",
      image: "/assets/caraccessories/Car Power 1C.webp"
    },

    {
      category: "Tyre Inflator",
      name: "VAYU 2.0",
      desc: "3x2000mAh Battery | Flashlight",
      price: 2699,
      oldPrice: 4999,
      discount: "46% OFF",
      image: "/assets/caraccessories/Vayu 2.0.webp"
    },

    {
      category: "Car Charger",
      name: "CAR POWER 65",
      desc: "65W Type-C Charger | Dual Ports",
      price: 1599,
      oldPrice: 1999,
      discount: "20% OFF",
      image: "/assets/caraccessories/Car Power 65.webp"
    },

    {
      category: "Car Charger",
      name: "CAR POWER 30",
      desc: "30W Smart Fast Charger",
      price: 399,
      oldPrice: 799,
      discount: "50% OFF",
      image: "/assets/caraccessories/Car Power 30.webp"
    },

    {
      category: "Bike Mobile Holder",
      name: "MOBIKE 4",
      desc: "One Press Lock | 360° Rotation",
      price: 349,
      oldPrice: 699,
      discount: "50% OFF",
      image: "/assets/caraccessories/Mobike 4.webp"
    },

    {
      category: "Car Mobile Holder",
      name: "CLAMP M3",
      desc: "180° Pivot | Adjustable Height",
      price: 349,
      oldPrice: 899,
      discount: "61% OFF",
      image: "/assets/caraccessories/Clamp M3.webp"
    },

    {
      category: "Car Charger",
      name: "CAR POWER 16",
      desc: "51W Charger | 33W Type-C PD",
      price: 449,
      oldPrice: 999,
      discount: "55% OFF",
      image: "/assets/caraccessories/Car Power 16.webp"
    },

    {
      category: "Car Charger",
      name: "CAR POWER 14",
      desc: "40W Dual Port Charger",
      price: 599,
      oldPrice: 999,
      discount: "40% OFF",
      image: "/assets/caraccessories/Car Power 14.webp"
    },

    {
      category: "Car Wireless Charger",
      name: "CHARGE CLAMP 2",
      desc: "15W Wireless Charging | Type-C",
      price: 999,
      oldPrice: 2499,
      discount: "60% OFF",
      image: "/assets/caraccessories/Charge Clamp 2.webp"
    },

    {
      category: "Car Mobile Holder",
      name: "CLAMP Y",
      desc: "AC Vent Mount | 360° Rotation",
      price: 349,
      oldPrice: 699,
      discount: "50% OFF",
      image: "/assets/caraccessories/Clamp Y.webp"
    },

    {
      category: "Car Mobile Holder",
      name: "CLAMP M2",
      desc: "Suction Cup Mount | Adjustable Height",
      price: 349,
      oldPrice: 899,
      discount: "61% OFF",
      image: "/assets/caraccessories/Clamp M2.webp"
    },

    {
      category: "Car Charger",
      name: "CAR POWER 7",
      desc: "20W Type-C PD Charger",
      price: 399,
      oldPrice: 699,
      discount: "43% OFF",
      image: "/assets/caraccessories/Car Power 7.webp"
    },

    {
      category: "Tyre Inflator",
      name: "VAYU",
      desc: "Battery & Corded Use | Digital Display",
      price: 2199,
      oldPrice: 3999,
      discount: "45% OFF",
      image: "/assets/caraccessories/VAYU.webp"
    },

    {
      category: "Car Charger",
      name: "CAR POWER 5",
      desc: "12W Dual USB Charger",
      price: 259,
      oldPrice: 499,
      discount: "48% OFF",
      image: "/assets/caraccessories/Car Power 5.webp"
    },

    {
      category: "Car Charger",
      name: "CAR POWER 6",
      desc: "51W Type-C PD Charger",
      price: 599,
      oldPrice: 1299,
      discount: "54% OFF",
      image: "/assets/caraccessories/Car Power 6.webp"
    },

    {
      category: "Car Charger",
      name: "CAR POWER MINI",
      desc: "38W Type-C PD Charger",
      price: 399,
      oldPrice: 699,
      discount: "43% OFF",
      image: "/assets/caraccessories/Car Power Mini.webp"
    },

    {
      category: "Car Bluetooth",
      name: "AUTO 15",
      desc: "Bluetooth v5.1 | Hands-free Calling",
      price: 1049,
      oldPrice: 1999,
      discount: "48% OFF",
      image: "/assets/caraccessories/Auto 15.webp"
    },

    {
      category: "Car Bluetooth",
      name: "AUTO 12",
      desc: "Bluetooth Receiver | 3.5mm AUX",
      price: 599,
      oldPrice: 1499,
      discount: "60% OFF",
      image: "/assets/caraccessories/Auto 12.webp"
    },

    {
      category: "Car Mobile Holder",
      name: "CLAMP M",
      desc: "Suction Cup Mount | Adjustable Height",
      price: 349,
      oldPrice: 799,
      discount: "56% OFF",
      image: "/assets/caraccessories/Clamp M.webp"
    },

    {
      category: "Car Inverter",
      name: "CAR POWER ONE",
      desc: "200W Car Inverter | Dual USB Output",
      price: 2999,
      oldPrice: 3499,
      discount: "14% OFF",
      image: "/assets/caraccessories/Car Power One.webp"
    }
  ];
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