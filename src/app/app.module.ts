import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';
import { LoginComponent } from './Login/Login.component';
import { ProductComponent } from './Product/Product.component';
import { ContactUsComponent } from './contactUs/contactUs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailedComponent } from './productDetailed/productDetailed.component';
import { EditProductComponent } from './EditProduct/EditProduct.component';
import{HttpClientModule} from'@angular/common/http';
import { DeactivateGuard } from './deactivate.guard';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { HomeProductsComponent } from './homeProducts/homeProducts.component';



@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      LoginComponent,
      ProductComponent,
      ContactUsComponent,
      ProductDetailedComponent,
      EditProductComponent,
      UserRegistrationComponent,
      RegisterComponent,
      SigninComponent,
      HomeProductsComponent
   ],
   imports: [
	 BrowserModule,
	 FormsModule,
	 AppRoutingModule,
	 HttpClientModule,ReactiveFormsModule
	],
   providers: [
      DeactivateGuard
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
