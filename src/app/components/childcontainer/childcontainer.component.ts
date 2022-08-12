import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ObjService } from 'src/app/service/obj.service';
import { Obj } from 'src/app/obj';
@Component({
  selector: 'app-childcontainer',
  templateUrl: './childcontainer.component.html',
  styleUrls: ['./childcontainer.component.css'],
})
export class ChildcontainerComponent implements OnInit {
  @Output() onAddObj: EventEmitter<Obj> = new EventEmitter();
  constructor(private objService: ObjService) {}
  objs: Obj[] = [];
  ngOnInit(): void {
    this.objService.getObjs().subscribe((objs) => (this.objs = objs));
  }
  addObj(obj: Obj) {
    this.onAddObj.emit(obj);
  }
}
