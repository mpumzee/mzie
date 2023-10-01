import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { UserComponent } from './user/user.component';
import { PaymentComponent } from './payment/payment.component';
import { InventoryComponent } from './inventory/inventory.component';
import { OwnerComponent } from './owner/owner.component';
import { AccountComponent } from './account/account.component';


const firebaseConfig = {
  apiKey: "AIzaSyCRmn4biOdDGQvbBkZgZRheSQr_pMDQpsg",
  authDomain: "mzie-c8c50.firebaseapp.com",
  projectId: "mzie-c8c50",
  storageBucket: "mzie-c8c50.appspot.com",
  messagingSenderId: "176471133849",
  appId: "1:176471133849:web:20ccf27e990e0a40dff208"
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MenuComponent,
    TopNavComponent,
    UserComponent,
    PaymentComponent,
    InventoryComponent,
    OwnerComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
