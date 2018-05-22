import {Component, OnInit} from '@angular/core';
import {Computer} from '../computer.model';
import {ComputerService} from '../../computer.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-computer-detail',
  templateUrl: './computer-detail.component.html',
  styleUrls: ['./computer-detail.component.scss']
})
export class ComputerDetailComponent implements OnInit {

  computerId: number;
  computer: Computer;

  constructor(private route: ActivatedRoute, private computerService: ComputerService) { }

  ngOnInit() {
    this.computerId = parseInt(this.route.snapshot.paramMap.get('id'), 10 );
    this.computerService.getComputer(this.computerId).subscribe(
      computers => this.computer = computers,
      error => console.error('Oups, une erreur est survenue lors de l\'accès à un ordinateur', error)
    );
  }

}
