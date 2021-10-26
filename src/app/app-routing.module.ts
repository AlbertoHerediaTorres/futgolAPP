import { ContentComponent } from './Components/content/content.component';
import { IndexComponent } from './Pages/index/index.component';
import { RegisterComponent } from './Pages/register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'inicio', component: IndexComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'content', component: ContentComponent},
  { path: '**', pathMatch: 'full', component: IndexComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
