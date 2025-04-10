import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Company } from './company';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hh-front';
  selectedCompanyId: number = 0;

  onCompanySelected(company: Company) {
    this.selectedCompanyId = company.id;
  }
}