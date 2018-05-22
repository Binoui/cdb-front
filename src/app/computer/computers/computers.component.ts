import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Computer} from '../computer.model';
import {ComputerService} from '../../computer.service';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.scss']
})
export class ComputersComponent implements OnInit {
  computers: Computer[];
  @Input() _search: String;
  @Input('_search')
  set search(value: String) {
    this._search = value;
    console.log(this._search);
  }
  @Output() searchChange = new EventEmitter<number>();

  constructor(private computerService: ComputerService) { }

  ngOnInit() {
    this.computerService.getComputers().subscribe(
      computer => this.computers = computer,
      error => console.error('Error getting list of Companies', error)
    );
  }

}
