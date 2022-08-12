import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { RowComponent } from './components/row/row.component';
import { TableComponent } from './components/table/table.component';
import { TableHeaderComponent } from './components/table-header/table-header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddObjComponent } from './components/add-obj/add-obj.component';
import { DetailComponent } from './components/detail/detail.component';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Bai3Tuan2Component } from './components/bai3-tuan2/bai3-tuan2.component';
import { Bai1Tuan2Component } from './components/bai1-tuan2/bai1-tuan2.component';
import { Bai1SubComponent } from './components/bai1-sub/bai1-sub.component';
import { Bai2SubComponent } from './components/bai2-sub/bai2-sub.component';
import { Bai3SubComponent } from './components/bai3-sub/bai3-sub.component';
import { Row2Component } from './components/row2/row2.component';
import { Table2Component } from './components/table2/table2.component';
import { ChildComponent } from './components/child/child.component';
import { ChildcontainerComponent } from './components/childcontainer/childcontainer.component';
const appRoutes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full' },

  {
    path: 'product',
    component: HomepageComponent,

    children: [
      { path: '', component: TableComponent },
      { path: 'detail/:id', component: DetailComponent },
    ],
  },
  { path: 'bai3', redirectTo: 'bai3/bai1', pathMatch: 'full' },

  { path: 'bai1', component: Bai1Tuan2Component },
  {
    path: 'bai3',
    component: Bai3Tuan2Component,

    children: [
      { path: 'bai1', component: Bai1SubComponent },
      { path: 'bai2', component: Bai2SubComponent },
      { path: 'bai3', component: Bai3SubComponent },
    ],
  },
];
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    RowComponent,
    TableComponent,
    TableHeaderComponent,
    AddObjComponent,
    DetailComponent,
    HomepageComponent,
    Bai3Tuan2Component,
    Bai1Tuan2Component,
    NavBarComponent,
    Bai1SubComponent,
    Bai2SubComponent,
    Bai3SubComponent,
    Row2Component,
    Table2Component,
    ChildComponent,
    ChildcontainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
