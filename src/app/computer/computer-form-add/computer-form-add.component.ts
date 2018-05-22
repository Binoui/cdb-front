import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ComputerService} from '../../computer.service';
import {ComputerJSON} from './computer_json.model';

@Component({
  selector: 'app-computer-form-add',
  templateUrl: './computer-form-add.component.html',
  styleUrls: ['./computer-form-add.component.scss']
})
export class ComputerFormAddComponent implements OnInit {
  computer = new ComputerJSON();
  computerForm = new FormGroup ({
    name: new FormControl()
  });

  constructor(private computerService: ComputerService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.computerForm = this.fb.group({
      name: ['', Validators.required],
      company: '',
      introduced: '',
      discontinued: '',
    });
  }

  addCompany() {
    if (this.computerForm.valid) {
      this.computer.name = this.computerForm.get('name').value;
      this.computer.discontinued = this.computerForm.get('discontinued').value;
      this.computer.introduced = this.computerForm.get('introduced').value;
      this.computer.companyDTO = this.computerForm.get('company').value;
      this.computerService.addComputer(this.computer).subscribe(() => this.router.navigate(['recipes']), () => console.log('ko'));
    }
  }
}
