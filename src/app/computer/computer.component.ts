import { Component, OnInit, Input } from '@angular/core';
import { Computer } from './computer.model';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.scss']
})
export class ComputerComponent implements OnInit {

  @Input() computer: Computer;

  constructor() { }

  ngOnInit() {
  }

}
