import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './principal/aboutus/aboutus.component';
import { HomeComponent } from './principal/home/home.component';
import { LoginComponent } from './principal/login/login.component';
import { RegisterComponent } from './principal/register/register.component';
import { CreateProductComponent } from './productos/create-product/create-product.component';
import { ListProductComponent } from './productos/list-product/list-product.component';

const routes: Routes = [

  { path: 'about', component: AboutusComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'producto',
    children: [
    {
      path: 'list', component: ListProductComponent
    },
    {
      path: 'create', component: CreateProductComponent
    },
    {
      path: 'edit', component: CreateProductComponent
    }
  ]
  },
  //{ path: 'list', component: ListProductComponent },
  //{ path: 'create', component: CreateProductComponent },
  { path: '**', component: HomeComponent },
  { path: 'home', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
