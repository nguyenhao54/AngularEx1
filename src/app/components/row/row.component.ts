import { STRING_TYPE } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Obj } from 'src/app/obj';
import { UiService } from 'src/app/service/ui.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css'],
})
export class RowComponent implements OnInit {
  editable: boolean = false;
  subscription!: Subscription;
  @Input() obj!: Obj;
  @Input() background!: string;
  @Output() onDeleteObj: EventEmitter<Obj> = new EventEmitter();
  @Output() onSaveObj: EventEmitter<Obj> = new EventEmitter();

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.editable = value));
    console.log(this.editable);
  }

  ngOnInit(): void {}
  onDelete(obj: Obj) {
    this.onDeleteObj.emit(obj);
  }
  onEdit() {
    this.uiService.toggleEdit();
    console.log(this.editable);
  }
  onSave(obj: Obj) {
    this.onSaveObj.emit(obj);
    this.uiService.toggleEdit();
    console.log(this.editable);
  }
}
