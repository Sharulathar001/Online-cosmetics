import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../productService.service';

@Component({
  selector: 'app-Product',
  templateUrl: './Product.component.html',
  styleUrls: ['./Product.component.css']
})
export class ProductComponent implements OnInit {


  ProductList:any="";
  constructor(private service:ProductServiceService)
  {

  }
  ngOnInit() {
    this.service.getProducts().subscribe(data=>
      {
        this.ProductList=data;
      })
  }
}
