import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../../company/company.service';
import { Company } from '../../company/company.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ComputerService } from '../computer.service';
import { Computer } from '../computer.model';

@Component({
  selector: 'app-computer-form-edit',
  templateUrl: './computer-form-edit.component.html',
  styleUrls: ['./computer-form-edit.component.scss']
})
export class ComputerFormEditComponent implements OnInit {
  computer = new Computer();
  computerForm = new FormGroup({
    name: new FormControl(),
    introduced: new FormControl(),
    discontinued: new FormControl(),
    companies: new FormControl()
  });
  @Input() companies: Company[];
  @Input() computerToEdit: Computer;
  message: String;

  constructor(private route: ActivatedRoute, private computerService: ComputerService, private companyService: CompanyService,
    private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.computer.id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.computerService.getComputer(this.computer.id).subscribe(
      computerToEdit => { this.computerToEdit = computerToEdit; this.createForm(computerToEdit.name); },
      error => console.error('Error getting info from the computer to edit', error)
    );
    this.companyService.getAllCompanies().subscribe(
      companies => this.companies = companies,
      error => console.error('Error getting list of Companies', error)
    );
  }

  createForm(name: string) {
    this.computerForm = this.fb.group({
      name: [name, Validators.required],
      companies: '',
      introduced: '',
      discontinued: '',
    });
  }

  editComputer() {
    if (this.computerForm.valid) {
      this.computer.name = this.computerForm.get('name').value;
      this.computer.discontinued = this.computerForm.get('discontinued').value;
      this.computer.introduced = this.computerForm.get('introduced').value;
      if (!this.computerForm.get('companies').value) {
        this.computer.companyDTO = new Company();
        if (this.computerToEdit.companyDTO != null) {
          this.computer.companyDTO.id = this.computerToEdit.companyDTO.id;
        }
      } else {
        if (this.computerForm.get('companies').value === 0) {
          this.computer.companyDTO = null;
        } else {
          this.computer.companyDTO = new Company();
          this.computer.companyDTO.id = this.computerForm.get('companies').value;
        }
      }
      this.computerService.editComputer(this.computer).subscribe(
        () => this.router.navigate(['computer']),
        error => {console.error('Error cannot edit computer'); this.message = 'Error cannot edit computer'; });
    }
  }
}
