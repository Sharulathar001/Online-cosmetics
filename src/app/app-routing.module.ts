import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ContactUsComponent } from './contactUs/contactUs.component';
import { DeactivateGuard } from './deactivate.guard';
import { EditProductComponent } from './EditProduct/EditProduct.component';
import { HomeComponent } from './Home/Home.component';
import { LoginComponent } from './Login/Login.component';
import { ProductComponent } from './Product/Product.component';
import { ProductDetailedComponent } from './productDetailed/productDetailed.component';
import { RegisterComponent } from './register/register.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

// it is a part of route class
// routes is a constant
const routes: Routes = [
  {
    // object is created to set the routing path
    path:'home',
    component:HomeComponent
  },
  {
    //if product is path
    path:'product',
    component:ProductComponent,
    canActivate:[AuthGuard],
    canActivateChild:[AuthGuard],
    // to avoid redundancy children is used
    //product is path:'check'
    children:[
      {
        path:":titleName",
        component:ProductDetailedComponent
      },
      {
        path:"edit/:titleName",
        component:EditProductComponent
      },
      {
        path:':check',
       component:ProductDetailedComponent
      }
    ]
  },
  {
    path:'register',
    component:RegisterComponent,
    canDeactivate:[DeactivateGuard]
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'contactUs',
    component:ContactUsComponent
  },
  // {
  //   path:'product/:check',
  //   component:ProductDetailedComponent
  // },
  {
    // wild cart search is used when the erl enterd is invalid and it should be mentioned at the last
    path:"**",
    component:HomeComponent
  }
];

@NgModule({
  // in-build angularRounting module and forRoot is for routerModule
  //routes variable is set to the routerModule of angular
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
