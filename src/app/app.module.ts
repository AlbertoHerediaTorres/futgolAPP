import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './Pages/index/index.component';
import { RegisterComponent } from './Pages/register/register.component';
import { HeaderComponent } from './Components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentComponent } from './Components/content/content.component';


//MATERIAL
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    RegisterComponent,
    HeaderComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
