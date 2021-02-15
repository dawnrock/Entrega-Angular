import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './layout/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MenuPrivadoComponent } from './layout/menu-privado/menu-privado.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GaleryComponent } from './galery/galery.component';
import { CrudComponent } from './crud/crud.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { BackgroundDirective } from './directives/background.directive';
import { HeaderComponent } from './layout/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    FooterComponent,
    MenuPrivadoComponent,
    DashboardComponent,
    GaleryComponent,
    CrudComponent,
    ProfileComponent,
    BackgroundDirective,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
