import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../productService.service';

@Component({
  selector: 'app-homeProducts',
  templateUrl: './homeProducts.component.html',
  styleUrls: ['./homeProducts.component.css']
})
export class HomeProductsComponent implements OnInit {

  displayProducts: any = "";
  constructor(private service:ProductServiceService)
  {

  }
  ngOnInit() {
    this.service.getDisplay().subscribe(data =>
      {
        this.displayProducts=data;
      })
  }

}



