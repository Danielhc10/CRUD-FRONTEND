import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";

//Componentes
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './principal/home/home.component';
import { AboutusComponent } from './principal/aboutus/aboutus.component';
import { RegisterComponent } from './principal/register/register.component';
import { LoginComponent } from './principal/login/login.component';
import { ListProductComponent } from './productos/list-product/list-product.component';
import { CreateProductComponent } from './productos/create-product/create-product.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';




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
    CreateProductComponent,
    ScrollToTopComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
