import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../productService.service';

@Component({
  selector: 'app-productDetailed',
  templateUrl: './productDetailed.component.html',
  styleUrls: ['./productDetailed.component.css']
})
export class ProductDetailedComponent implements OnInit {
  // variable declaration
  productList:any="";
  searchFor:any="";
  finalProduct:any="";

  // private route:ActivatedRoute is in-bulid services provided by angular route , it is used to focus url send by user
  constructor(private service:ProductServiceService,private route:ActivatedRoute) { }

  ngOnInit() {
    // the data retrieved from the product is accessed
    this.service.getProducts().subscribe(data=>
      {
        this.productList=data;

        // url param is retrieved and subscribed
        //Route parameters allow you to pass data between different routes in your application.
         this.route.params.subscribe(paramdata=>{
            this.searchFor=paramdata['check'];

            //for searchinf looping is used
            for(let product of this.productList)
            {
              if(product.title==this.searchFor )
              {
                this.finalProduct=product;
                break;
              }
            }
         })
      }
      )
  }

}
