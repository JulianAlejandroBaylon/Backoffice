import { SalesReportComponent } from './sales-report/sales-report.component';
import { ComissionsComponent } from './comissions/comissions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupportComponent } from './support/support.component';
import { SettingsComponent } from './settings/settings.component';
import { MaterialComponent } from './material/material.component';
const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent,},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'comissions', component: ComissionsComponent},
  {path: 'sales-report', component: SalesReportComponent},
  {path: 'support', component: SupportComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'material', component: MaterialComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
