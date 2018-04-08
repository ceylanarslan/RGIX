import { NgModule } from '@angular/core';
import { CompanyManagementRoutingModule } from './company-management-routing.module';
import { CompanyComponent } from './components/company/company.component';
import { CompanyService } from './services/company-service.service';
import { SharedModule } from '../../shared/shared.module';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { ServiceTypeComponent } from './components/service-type/service-type.component';

@NgModule({
  imports: [
    SharedModule,
    CompanyManagementRoutingModule
  ],
  declarations: [CompanyComponent, CompanyDetailsComponent, ServiceTypeComponent],
  providers: [CompanyService],
  entryComponents: [CompanyDetailsComponent]
})
export class CompanyManagementModule { }
