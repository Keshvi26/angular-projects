import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterformComponent } from './registerform/registerform.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { LoginformComponent } from './loginform/loginform.component';
import { ContactformComponent } from './contactform/contactform.component';









const routes: Routes = [
  { path: 'login', component: LoginformComponent },
  { path: 'register', component: RegisterformComponent},
  { path: 'home', component: HomepageComponent},
  { path: 'name', component: NameEditorComponent},
  { path: 'form',  component: HeroFormComponent },
  { path: 'contact',  component:  ContactformComponent }

  
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
