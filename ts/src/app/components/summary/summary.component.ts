import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  showText = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleText() {
    this.showText = !this.showText;

  }

}
