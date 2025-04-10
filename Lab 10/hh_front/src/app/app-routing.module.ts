import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterLink } from '@angular/router';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { VacancyListComponent } from './components/vacancy-list/vacancy-list.component';

const routes: Routes = [
  { path: 'companies/:id', component: CompanyListComponent },
  { path: 'vacancies/:id', component: VacancyListComponent },
  {path: '', redirectTo : 'companies', pathMatch : 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterLink],
  exports: [RouterModule]
})
export class AppRoutingModule { }