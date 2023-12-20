import { Component } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.css'
})
export class MyFormComponent {

  model: Order = new Order("", 0, new Date(), "");

  onSubmit(): void {
    // form submitted
    console.log('Formulaire envoyé !', this.model);
  }
}
export class Order {
    constructor(
        public title: string,
        public quantity: number,
        public date: Date,
        public contact: string
    ) {}
}