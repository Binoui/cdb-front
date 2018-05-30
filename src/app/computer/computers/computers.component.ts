import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Computer } from '../computer.model';
import { ComputerService } from '../computer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.scss']
})
export class ComputersComponent implements OnInit {

  computers: Computer[];
  @Input() _search: string;
  message: string;
  @Input('_search')

  set search(value: string) {
    this.states = [];
    this.resetToDelete();
    this._search = value;
    this.computerService.getComputers(this._search, this.page - 1).subscribe(
      companies => this.computers = companies,
      error => console.error('Error getting list of Companies', error)
    );
    this.computerService.getCountPageComputer(this.size, this._search).subscribe(
      numberOfComputers => { this.numberOfPage = numberOfComputers; this.calculatePages(this.size); },
      error => console.error('Error getting count of Companies', error)
    );
    this.computerService.getCountComputer(this._search).subscribe(
      numberOfComputers => { this.numberOfComputers = numberOfComputers; this.calculatePages(this.size); },
      error => console.error('Error getting count of Computers', error)
    );
  }
  @Output() searchChange = new EventEmitter<number>();
  numberOfPage: number;
  numberOfComputers: number;
  after: number[];
  before: number[];
  page: number;
  previous: number;
  next: number;
  order: string;
  asc = true;
  toDelete: number[] = [];
  size = 10;
  states: boolean[][] = [];
  @Output() addDeleteAll: EventEmitter<number> = new EventEmitter();

  resetToDelete() {
    this.toDelete = [];
  }

  delete() {
    let names = '';
    for (let i = 0; i < this.toDelete.length - 1; i++) {
      names = names + this.toDelete[i] + ' ; ';
    }
    if (this.toDelete.length > 0) {
      names = names + this.toDelete[this.toDelete.length - 1];

      if (confirm('Are you sure to delete ' + names)) {
        for (let i = 0; i < this.toDelete.length; i++) {
          this.computerService.deleteComputer(this.toDelete[i]).
            subscribe(
              () => this.router.navigate(['computer']),
              error => {console.error('Error deleting computer(s)', error); this.message = 'Error deleting computer(s)'; });
        }
      }
    } else {
      this.message = 'No computer selected';
    }
  }

  selectAll() {
    for (let i = 0; i < this.states.length; i++) {
      this.states[i][0] = true;
      console.log(this.computers[i] + '    ' + i);
      if (!(this.toDelete.includes(this.computers[i].id))) {
        this.toDelete.push(this.computers[i].id);
      }
    }
  }

  deselectAll() {
    for (let i = 0; i < this.states.length; i++) {
      this.states[i][0] = false;
    }
    this.toDelete = [];
  }

  onDelete(value: number) {
    if (this.toDelete.includes(value)) {
      this.toDelete.splice(this.toDelete.indexOf(value), 1);
    } else {
      this.toDelete.push(value);
    }
  }

  onReceive(value: boolean[]) {
    this.states.push(value);
  }

  constructor(private router: Router, private route: ActivatedRoute, private computerService: ComputerService) { }

  setOrder(value: string) {
    this.states = [];
    this.resetToDelete();
    this.order = value;
    this.computerService.getComputers(this._search, this.page - 1, this.order, this.asc, this.size).subscribe(
      computers => { this.computers = computers; },
      error => console.error('Error getting list of Computers', error)
    );
    this.computerService.getCountPageComputer(this.size, this._search).subscribe(
      numberOfComputers => { this.numberOfPage = numberOfComputers; this.calculatePages(this.size); },
      error => console.error('Error getting count of Computers', error)
    );

  }

  setSizeElement(value: number) {
    this.states = [];
    this.resetToDelete();
    this.size = value;
    this.computerService.getComputers(this._search, this.page - 1, this.order, this.asc, this.size).subscribe(
      computers => { this.computers = computers; },
      error => console.error('Error getting list of Computers', error)
    );
    this.computerService.getCountPageComputer(this.size, this._search).subscribe(
      numberOfComputers => { this.numberOfPage = numberOfComputers; this.calculatePages(this.size); },
      error => console.error('Error getting count of Computers', error)
    );
    this.computerService.getCountComputer(this._search).subscribe(
      numberOfComputers => { this.numberOfComputers = numberOfComputers; this.calculatePages(this.size); },
      error => console.error('Error getting count of Computers', error)
    );
  }

  setAsc(value: boolean) {
    this.states = [];
    this.resetToDelete();
    this.asc = value;
    this.computerService.getComputers(this._search, this.page - 1, this.order, this.asc, this.size).subscribe(
      computers => { this.computers = computers; },
      error => console.error('Error getting list of Computers', error)
    );
    this.computerService.getCountPageComputer(this.size, this._search).subscribe(
      numberOfComputers => { this.numberOfPage = numberOfComputers; this.calculatePages(this.size); },
      error => console.error('Error getting count of Computers', error)
    );

    this.computerService.getCountComputer(this._search).subscribe(
      numberOfComputers => { this.numberOfComputers = numberOfComputers; this.calculatePages(this.size); },
      error => console.error('Error getting count of Computers', error)
    );
  }

  calculatePages(size) {
    let PageMax;
    PageMax = this.numberOfPage;
    if (this.page > 1) {
      if (!(this.page < PageMax)) {
        this.page = PageMax;
      }
    } else {
      this.page = 1;
    }
    this.before = [];
    this.after = [];
    if (this.page > 1) {
      this.before.push(1);
    }
    for (let i = -3; i < 0; i++) {
      if ((this.page + i > 1) && (i !== 0) && (this.page + i < PageMax)) {
        this.before.push(this.page + i);
      }
    }
    for (let i = 1; i < 4; i++) {
      if ((this.page + i > 1) && (i !== 0) && (this.page + i < PageMax)) {
        this.after.push(this.page + i);
      }
    }
    if (this.page < PageMax) {
      this.after.push(PageMax);
    }
    this.previous = 0;
    if (this.page > 1) {
      this.previous = this.page - 1;
    }
    this.next = 0;
    if (this.page < PageMax) {
      this.next = this.page + 1;
    }
  }

  updatePage(page: number, size) {
    this.resetToDelete();
    this.page = page;
    this.calculatePages(size);
    this.computerService.getComputers(this._search, this.page - 1, this.order, this.asc, this.size).subscribe(
      computers => this.computers = computers,
      error => console.error('Error getting list of Computers', error)
    );
    this.computerService.getCountComputer(this._search).subscribe(
      numberOfComputers => { this.numberOfComputers = numberOfComputers; },
      error => console.error('Error getting count of Computers', error)
    );
  }

  ngOnInit() {
    this.states = [];
    this.resetToDelete();
    this.page = parseInt(this.route.snapshot.paramMap.get('page'), 10);
    if (!this.page) {
      this.page = 1;
    }
    this.computerService.getComputers(this._search, this.page - 1, this.order, this.asc, this.size).subscribe(
      companies => this.computers = companies,
      error => console.error('Error getting list of Computers', error)
    );
    this.computerService.getCountPageComputer(this.size).subscribe(
      numberOfComputers => { this.numberOfPage = numberOfComputers; this.calculatePages(this.size); },
      error => console.error('Error getting count of Computers', error)
    );
    this.computerService.getCountComputer().subscribe(
      numberOfComputers => { this.numberOfComputers = numberOfComputers; this.calculatePages(this.size); },
      error => console.error('Error getting count of Computers', error)
    );
  }

}
