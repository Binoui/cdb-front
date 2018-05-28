import {Component, Input, OnInit} from '@angular/core';
import {Computer} from './computer.model';
import {ToDeleteList} from './toDeleteList.model';

const SHOW_DETAILS = 'Show Details';
const HIDE_DETAILS = 'Hide Details';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.scss']
})
export class ComputerComponent implements OnInit {

  @Input() computer: Computer;
  isExpanded = false;
  buttonText = SHOW_DETAILS;
  toDelete = false;

  addComputerToDelete() {
    if (this.toDelete) {
      ToDeleteList.list.lastIndexOf(this.computer.id);
    } else {
      ToDeleteList.list.push(this.computer.id);
    }
    this.toDelete = !this.toDelete;
  }


  constructor() { }

  ngOnInit() {
  }


  showDetails() {
    this.isExpanded = !this.isExpanded;
    this.buttonText = this.isExpanded ? HIDE_DETAILS : SHOW_DETAILS;
  }
}
