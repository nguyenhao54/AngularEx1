import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Obj } from 'src/app/obj';
@Component({
  selector: 'app-add-obj',
  templateUrl: './add-obj.component.html',
  styleUrls: ['./add-obj.component.css'],
})
export class AddObjComponent implements OnInit {
  @Output() onAddObj: EventEmitter<Obj> = new EventEmitter();

  showAddObj: boolean = true;
  id!: number;
  idError!: string;
  idIsOK: boolean = true;
  name!: string;
  nameError!: string;
  nameIsOK: boolean = true;
  color!: string;
  colorIsOK: boolean = true;

  constructor() {}

  ngOnInit(): void {}
  onSubmit() {
    if (this.id > 10000) {
      this.idIsOK = false;
      this.idError = 'Id too long!';
    } else if (isNaN(this.id)) {
      this.idIsOK = false;
      this.idError = 'Id is required!';
    } else if (!this.name) {
      this.nameIsOK = false;
      this.nameError = 'Name is required!';
    } else if (!this.color) {
      this.colorIsOK = false;
    } else {
      const newObj = {
        id: this.id,
        name: this.name,
        color: { key: this.color },
      };
      console.log(newObj);
      this.onAddObj.emit(newObj);
    }
  }
}
