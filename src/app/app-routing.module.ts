import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';

const routes: Routes = [
  {
    path:'registration', component:RegistrationComponent
  },
  {
    path:'', component:LoginComponent
  },
  {
    path:'addproducts', component:AddproductsComponent
  },
  {
    path:'viewproducts', component:ViewproductsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
