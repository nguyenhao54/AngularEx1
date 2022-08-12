import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { AddObj } from 'src/app/addObj';
@Component({
  selector: 'app-row2',
  templateUrl: './row2.component.html',
  styleUrls: ['./row2.component.css'],
})
export class Row2Component implements OnInit {
  constructor() {}
  @Input() addobj!: AddObj;
  @Output() onDeleteObj: EventEmitter<AddObj> = new EventEmitter();

  ngOnInit(): void {}
  onDelete(obj: AddObj) {
    this.onDeleteObj.emit(obj);
  }
}
