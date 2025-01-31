import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discussions',
  templateUrl: './discussions.component.html',
  styleUrls: ['./discussions.component.scss']
})
export class DiscussionsComponent implements OnInit {

  showForm = false;
  open = false;

  constructor() { }

  ngOnInit(): void {
  }


  toggleForm(e: Event) {
    e.preventDefault();
    this.showForm = !this.showForm;
  }

  closeForm() {
    if (this.showForm) {
      this.showForm = !this.showForm
    }
  }

  openAnwers(e: Event) {
    e.preventDefault
    this.open = !this.open;
  }

}
