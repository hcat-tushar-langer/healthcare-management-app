import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/helpers';
import { HomeComponent } from './modules/dashboard/components/home/home.component';
import { LoginComponent } from './modules/landing/components/login/login.component';
import { RegisterComponent } from './modules/landing/components/register/register.component';
import { HealthcareViewComponent } from './modules/dashboard/components/healthcare-view/healthcare-view.component';

const routes: Routes = [
  { path: 'healthcare/:id', component: HealthcareViewComponent, canActivate: [AuthGuard] },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
