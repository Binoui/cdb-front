import {Component, OnInit} from '@angular/core';
import {Computer} from '../computer.model';
import {ComputerService} from '../../computer.service';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.scss']
})
export class ComputersComponent implements OnInit {
  computers: Computer[];

  constructor(private computerService: ComputerService) { }

  ngOnInit() {
    this.computerService.getComputers().subscribe(
      computer => this.computers = computer,
      error => console.error('Error getting list of Companies', error)
    );
  }

}
