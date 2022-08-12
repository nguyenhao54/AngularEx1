import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai1-sub',
  templateUrl: './bai1-sub.component.html',
  styleUrls: ['./bai1-sub.component.css'],
})
export class Bai1SubComponent implements OnInit {
  constructor() {}
  input!: number;
  output!: number;
  ngOnInit(): void {}
  calEx() {
    this.output = 0;
    for (let i = 0; i < this.input; i++) {
      this.output = this.output + i / this.input;
    }
    // console.log(this.output);
    // console.log(this.input);
  }
}
