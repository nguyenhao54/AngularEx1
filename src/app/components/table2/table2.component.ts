import { Component, OnInit } from '@angular/core';
import { Obj } from 'src/app/obj';
import { AddObj } from 'src/app/addObj';
@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css'],
})
export class Table2Component implements OnInit {
  addobjs: AddObj[] = [];
  constructor() {}
  maxid: number = 0;
  ngOnInit(): void {}
  deleteObj(obj: AddObj) {
    this.addobjs = this.addobjs.filter((o) => o.id != obj.id);
  }
  add(obj: Obj) {
    console.log(obj);
    const newAddObj = {
      id: this.maxid,
      obj: obj,
    };
    console.log(this.addobjs.length);
    this.maxid++;
    this.addobjs.push(newAddObj);
  }
}
