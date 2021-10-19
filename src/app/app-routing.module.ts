import { ContentComponent } from './Components/content/content.component';
import { IndexComponent } from './Components/index/index.component';
import { RegisterComponent } from './Components/register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'content', component: ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
