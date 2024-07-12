import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EventComponent } from './event/event.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'',component:AppComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'event',component:EventComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
