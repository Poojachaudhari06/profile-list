import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'profiles', component: ProfileCardComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Wildcard route for 404 redirects
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
