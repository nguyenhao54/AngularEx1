import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Obj } from 'src/app/obj';
import { ObjService } from 'src/app/service/obj.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  obj!: Obj;

  constructor(private objService: ObjService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.objService
      .getObj(+this.route.snapshot.params['id'])
      .subscribe((obj) => {
        this.obj = obj;
      });
  }
}
