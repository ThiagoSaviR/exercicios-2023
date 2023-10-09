import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss']
})
export class PageContentComponent implements OnInit {
  showText = false;



  constructor() { }

  ngOnInit(): void {
  }

  toggleText() {
    this.showText = !this.showText;
    
  }

}
