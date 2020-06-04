import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ContactformComponent } from './contactform/contactform.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    RegisterformComponent,
    HomepageComponent,
    NameEditorComponent,
    HeroFormComponent,
    ContactformComponent,

  
    
    
  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 
  
 }

