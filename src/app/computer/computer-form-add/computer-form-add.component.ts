import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ComputerService } from '../computer.service';
import { Company } from '../../company/company.model';
import { CompanyService } from '../../company/company.service';
import { Computer } from '../computer.model';

@Component({
  selector: 'app-computer-form-add',
  templateUrl: './computer-form-add.component.html',
  styleUrls: ['./computer-form-add.component.scss']
})
export class ComputerFormAddComponent implements OnInit {
  computer = new Computer();
  computerForm = new FormGroup({
    name: new FormControl()
  });
  @Input() companies: Company[];

  constructor(private computerService: ComputerService, private companyService: CompanyService,
    private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.companyService.getCompanies('').subscribe(
      companies => this.companies = companies,
      error => console.error('Error getting list of Companies', error)
    );
  }

  createForm() {
    this.computerForm = this.fb.group({
      name: ['', Validators.required],
      companies: ['', Validators.required],
      introduced: '',
      discontinued: '',
    });
  }

  addComputer() {
    if (this.computerForm.valid) {
      this.computer.name = this.computerForm.get('name').value;
      this.computer.discontinued = this.computerForm.get('discontinued').value;
      this.computer.introduced = this.computerForm.get('introduced').value;
      if (this.computerForm.get('companies').value === 0) {
        this.computer.companyDTO = null;
      } else {
        this.computer.companyDTO = new Company();
        this.computer.companyDTO.id = this.computerForm.get('companies').value;
      }
      this.computerService.addComputer(this.computer).subscribe(() => this.router.navigate(['recipes']), () => console.log('ko'));
    }
  }
}
