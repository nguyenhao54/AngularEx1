import { Component, OnInit } from '@angular/core';
import { Obj } from 'src/app/obj';
import { ObjService } from 'src/app/service/obj.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  objs: Obj[] = [];
  search!: string;
  showAddObj: boolean = false;
  constructor(private objService: ObjService) {}
  toggleAdd() {
    this.showAddObj = !this.showAddObj;
  }
  ngOnInit(): void {
    this.objService.getObjs().subscribe((objs) => {
      this.objs = objs;
      this.objs.sort((a, b) => a.id! - b.id!);
      // console.log(this.objs);
    });
  }

  deleteObj(obj: Obj) {
    this.objService
      .deleteObj(obj)
      .subscribe(() => (this.objs = this.objs.filter((o) => o.id != obj.id)));
  }
  saveObj(obj: Obj) {
    this.objService.updateObj(obj).subscribe();
  }
  addObj(obj: Obj) {
    this.objService.addObj(obj).subscribe((obj) => {
      this.objs.push(obj);
      this.objs.sort((a, b) => a.id! - b.id!);
    });
  }
}
