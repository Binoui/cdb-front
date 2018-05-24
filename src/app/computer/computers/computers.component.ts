import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Computer} from '../computer.model';
import {ComputerService} from '../computer.service';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.scss']
})
export class ComputersComponent implements OnInit {
  computers: Computer[];
  @Input() _search: string;
  @Input('_search')
  set search(value: string) {
    this._search = value;
    this.computerService.getComputers(this._search).subscribe(
      computer => this.computers = computer,
      error => console.error('Error getting list of Companies', error)
    );
  }
  @Output() searchChange = new EventEmitter<number>();

  constructor(private computerService: ComputerService) { }

  ngOnInit() {
    this.computerService.getComputers(this._search).subscribe(
      computer => this.computers = computer,
      error => console.error('Error getting list of Companies', error)
    );
  }

}
