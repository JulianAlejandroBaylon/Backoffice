import { SalesReportComponent } from './sales-report/sales-report.component';
import { ComissionsComponent } from './comissions/comissions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupportComponent } from './support/support.component';
const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent,},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'comissions', component: ComissionsComponent},
  {path: 'sales-report', component: SalesReportComponent},
  {path: 'support', component: SupportComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
