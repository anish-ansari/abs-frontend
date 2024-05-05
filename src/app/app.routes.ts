import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AppointmentListComponent } from './pages/appointment-list/appointment-list.component';
import { HomeComponent } from './pages/home/home.component';
import { NewAppointmentComponent } from './pages/new-appointment/new-appointment.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // for home page
  { path: 'login', component: LoginComponent }, // for login page
  { path: 'signup', component: SignupComponent }, // for signup page
  { path: 'my-appointments', component: AppointmentListComponent }, // when user logs in they're sent to this page
  { path: 'new-appointment', component: NewAppointmentComponent }, // when user wants to schedule a new appointment
];
