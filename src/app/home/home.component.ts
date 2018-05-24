import { Component, OnInit } from '@angular/core';
import { getLocaleFirstDayOfWeek } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tg() {
    localStorage.setItem('locale', 'fr');
    location.reload();
  }

}
