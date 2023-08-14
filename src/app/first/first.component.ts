import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  hero = {
    namee: '',
    power: 0,
    image: '',
  };

  heros: any[] = [];
  ajout() {
    this.heros.push(this.hero);
    this.hero = {
      namee: '',
      power: 0,
      image: '',
    };
    console.log(this.heros);
  }
}
