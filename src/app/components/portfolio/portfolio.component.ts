import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  
  constructor(private activatedRoute: ActivatedRoute) {}

 ecommerceShop: string[] = [
        'assets/e-shop-screenshots/1.PNG',
        'assets/e-shop-screenshots/2.PNG',
        'assets/e-shop-screenshots/3.PNG',
        'assets/e-shop-screenshots/4.PNG',
        'assets/e-shop-screenshots/5.PNG',
        'assets/e-shop-screenshots/6.PNG',
        'assets/e-shop-screenshots/7.PNG',
        'assets/e-shop-screenshots/8.PNG',
        'assets/e-shop-screenshots/9.PNG',
        'assets/e-shop-screenshots/10.PNG',
        'assets/e-shop-screenshots/11.PNG',
        'assets/e-shop-screenshots/12.PNG',
        'assets/e-shop-screenshots/13.PNG',
        'assets/e-shop-screenshots/14.PNG',
 ];
 imageIndex: number = 0;
 currerntImage: string = this.ecommerceShop[0];

 changeImage(direction: string){
  if(direction === 'next'){
    if(this.imageIndex === this.ecommerceShop.length - 1){
      this.imageIndex = 0;
    } else {
      this.imageIndex++;
    }
  } else if(direction === 'prev'){
    if(this.imageIndex === 0){
      this.imageIndex = this.ecommerceShop.length - 1;
    } else {
      this.imageIndex--;
    }
  }
  this.currerntImage = this.ecommerceShop[this.imageIndex];
}

}
