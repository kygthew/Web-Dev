import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];

  constructor(private companyService: CompanyService, private router: Router) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(data => {
      this.companies = data;
    });
  }

  showVacancies(companyId: number) {
    this.router.navigate(['/vacancies', companyId]);
  }
}