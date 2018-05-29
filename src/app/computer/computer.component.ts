import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Computer} from './computer.model';

const SHOW_DETAILS = 'Show Details';
const HIDE_DETAILS = 'Hide Details';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.scss']
})
export class ComputerComponent implements OnInit {

  @Input() computer: Computer;
  @Output() addDelete: EventEmitter<number> = new EventEmitter();
  @Output() sendBoolean: EventEmitter<boolean[]> = new EventEmitter();
  isExpanded = false;
  toDelete: boolean[];
  buttonText = SHOW_DETAILS;

  addComputerToDelete() {
    console.log('in the consle');
    this.toDelete[0] = !this.toDelete;
    this.addDelete.emit(this.computer.id);
  }

  onDeleteAll() {
    this.toDelete[0] = true;
  }

  checked() {
  }


  constructor() {
  }

  ngOnInit() {
    this.toDelete = [false];
    this.sendBoolean.emit(this.toDelete);
  }


  showDetails() {
    this.isExpanded = !this.isExpanded;
    this.buttonText = this.isExpanded ? HIDE_DETAILS : SHOW_DETAILS;
  }
}
