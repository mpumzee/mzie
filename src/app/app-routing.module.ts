import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { UserComponent } from './user/user.component';
import { PaymentComponent } from './payment/payment.component';
import { InventoryComponent } from './inventory/inventory.component';
import { OwnerComponent } from './owner/owner.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  {
    path: "menu",
    component: MenuComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      {path: 'user', component: UserComponent},
      // {path: 'account', component: AccountComponent},
      // {path: 'payment', component: PaymentComponent},
      {path: 'inventory', component: InventoryComponent},
      {path: 'owner', component: OwnerComponent},
      {path: 'payment', component: PaymentComponent},
      // {path: 'statement', component: StatementComponent},
    ],
    runGuardsAndResolvers: "always"
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
