import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { FinanceComponent } from 'src/app/modules/finance/finance.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BusinessPartnerComponent } from 'src/app/modules/business-partner/business-partner.component';
import { DeliveriesComponent } from 'src/app/modules/deliveries/deliveries.component';
import { InvoiceComponent } from 'src/app/modules/invoice/invoice.component';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { ProjectManagementComponent } from 'src/app/modules/project-management/project-management.component';
import { RightsAdministrationComponent } from 'src/app/modules/rights-administration/rights-administration.component';
import { TicketManagementComponent } from 'src/app/modules/ticket-management/ticket-management.component';
import { UserComponent } from 'src/app/modules/user/user.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card'
import { DashboardService } from 'src/app/modules/data/dashboard.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table'
import { BusinessPartnerService } from 'src/app/modules/data/business-partner.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import { LoginService } from 'src/app/modules/data/login.service';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from 'src/app/modules/data/service.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    FinanceComponent,
    BusinessPartnerComponent,
    DeliveriesComponent,
    InvoiceComponent,
    ProjectManagementComponent,
    RightsAdministrationComponent,
    TicketManagementComponent,
    UserComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    DashboardService,
    BusinessPartnerService,
    LoginService,
    ServiceService

  ]
})
export class DefaultModule { }
