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
import { Ng2SearchPipeModule } from 'ng2-search-filter';



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
