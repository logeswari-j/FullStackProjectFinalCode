import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirlineDetailsComponent } from './airline-details/airline-details.component';
import { UpdateAirlineComponent } from './update-airline/update-airline.component';
import { AirlineListComponent } from './airline-list/airline-list.component';
import { CreateAirlineComponent } from './create-airline/create-airline.component';
import { AuthGaurdService } from './auth-gaurd.service';
import { LoginPageComponent } from './login-page/login-page.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import{ProfileCardComponent} from './profile-card/profile-card.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactComponent } from './contact/contact.component';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';


const routes: Routes = [
    {path: 'airlines', component: AirlineListComponent, canActivate:[AuthGaurdService]},
    {path: 'create-airline', component: CreateAirlineComponent,canActivate:[AuthGaurdService] },
    {path: '', redirectTo: 'login-page', pathMatch: 'full'},
    {path: 'login-page', component: LoginPageComponent},
    {path: 'update-airline/:airlineId', component: UpdateAirlineComponent,canActivate:[AuthGaurdService]},
    {path: 'airline-details/:airlineId', component: AirlineDetailsComponent,canActivate:[AuthGaurdService]},
    {path: 'register', component: RegisterComponent, },
    {path: 'profile-card',component:ProfileCardComponent,canActivate:[AuthGaurdService]},
    {path:'feedback',component:FeedbackComponent,canActivate:[AuthGaurdService]},
    {path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
    {path: 'contact',component: ContactComponent,canActivate:[AuthGaurdService]},
    {path:'ticket-booking/:airlineId',component:TicketBookingComponent,canActivate:[AuthGaurdService]}
     ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
