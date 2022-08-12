import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Obj } from 'src/app/obj';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  constructor() {}
  @Input() obj!: Obj;
  @Output() onAddToTable: EventEmitter<Obj> = new EventEmitter();

  ngOnInit(): void {}
  addToTable(obj: Obj) {
    this.onAddToTable.emit(obj);
  }
}
