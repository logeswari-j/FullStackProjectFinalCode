import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { CreateAirlineComponent } from './create-airline/create-airline.component';
import { UpdateAirlineComponent } from './update-airline/update-airline.component';
import { AirlineDetailsComponent } from './airline-details/airline-details.component';
import { AirlineListComponent } from './airline-list/airline-list.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LogoutComponent } from './logout/logout.component';

import { RegisterComponent } from './register/register.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactComponent } from './contact/contact.component';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateAirlineComponent,
    UpdateAirlineComponent,
    AirlineDetailsComponent,
    AirlineListComponent,
    LoginPageComponent,
    LogoutComponent,
    LogoutComponent,
    RegisterComponent,
    ProfileCardComponent,
    FeedbackComponent,
    ContactComponent,
    TicketBookingComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
