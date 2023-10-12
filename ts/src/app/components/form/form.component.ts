import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  ShowSentForm = false;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(e: Event) {
    e.preventDefault();
    this.ShowSentForm = !this.ShowSentForm
  }
  
  toggleSentForm(e: Event) {
    e.preventDefault();
    this.ShowSentForm = !this.ShowSentForm

  }

}
