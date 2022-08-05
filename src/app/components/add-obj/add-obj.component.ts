import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Obj } from 'src/app/obj';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-obj',
  templateUrl: './add-obj.component.html',
  styleUrls: ['./add-obj.component.css'],
})
export class AddObjComponent implements OnInit {
  @Output() onAddObj: EventEmitter<Obj> = new EventEmitter();

  showAddObj: boolean = true;
  addObjForm = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.maxLength(5)]),
    name: new FormControl('', [Validators.required]),
    color: new FormControl('', [Validators.required]),
  });
  get id(): any {
    if (this.addObjForm.get('id')) {
      return this.addObjForm.get('id');
    } else return '';
  }
  get name(): any {
    return this.addObjForm.get('name');
  }
  get color(): any {
    return this.addObjForm.get('color');
  }
  constructor() {}

  ngOnInit(): void {}
  onSubmit() {
    const newObj = {
      id: parseInt(this.addObjForm.value.id as string),
      name: this.addObjForm.value.name as string,
      color: { key: this.addObjForm.value.color as string },
    };
    this.onAddObj.emit(newObj);
  }
}
