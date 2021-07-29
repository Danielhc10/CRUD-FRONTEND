import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './principal/aboutus/aboutus.component';
import { HomeComponent } from './principal/home/home.component';
import { LoginComponent } from './principal/login/login.component';
import { RegisterComponent } from './principal/register/register.component';

const routes: Routes = [

    { path: 'about', component: AboutusComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'footer', component: FooterComponent },
    { path: '**', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
