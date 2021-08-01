import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './principal/home/home.component';
import { AboutusComponent } from './principal/aboutus/aboutus.component';
import { RegisterComponent } from './principal/register/register.component';
import { LoginComponent } from './principal/login/login.component';
import { ListProductComponent } from './productos/list-product/list-product.component';
import { CreateProductComponent } from './productos/create-product/create-product.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AboutusComponent,
    RegisterComponent,
    LoginComponent,
    ListProductComponent,
    CreateProductComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
