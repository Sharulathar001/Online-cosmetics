import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../productService.service';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {

  Product:any="";
  constructor(private service:ProductServiceService)
  {

  }
  ngOnInit() {
    this.service.getDisplay().subscribe((data: any)=>
      {
        this.Product=data;
      })
  }

}




