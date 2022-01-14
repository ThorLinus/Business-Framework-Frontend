import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { BusinessPartnerComponent } from './modules/business-partner/business-partner.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DeliveriesComponent } from './modules/deliveries/deliveries.component';
import { FinanceComponent } from './modules/finance/finance.component';
import { InvoiceComponent } from './modules/invoice/invoice.component';
import { LoginComponent } from './modules/login/login.component';
import { ProjectManagementComponent } from './modules/project-management/project-management.component';
import { RightsAdministrationComponent } from './modules/rights-administration/rights-administration.component';
import { TicketManagementComponent } from './modules/ticket-management/ticket-management.component';
import { UserComponent } from './modules/user/user.component';


const routes: Routes = [{
  path: 'home',
  component: DefaultComponent,
  children: [{
    path: 'home',
    component: DashboardComponent
  },{
    path: 'finance',
    component: FinanceComponent
  },{
    path: 'ticket-management',
    component: TicketManagementComponent
  },{
    path: 'deliveries',
    component: DeliveriesComponent
  },{
    path: 'user',
    component: UserComponent
  },{
    path: 'project-management',
    component: ProjectManagementComponent
  },{
    path: 'invoice',
    component: InvoiceComponent
  },{
    path: 'bp',
    component: BusinessPartnerComponent
  },{
    path: 'rights-administration',
    component: RightsAdministrationComponent
  }]
}, {
  path: "", 
  pathMatch: "full", 
  redirectTo: "login"
}, {
  path: "login",
  component: LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
