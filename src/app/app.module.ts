import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

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
const appRoutes: Routes = [
  { path: '', component: TableComponent },
  { path: 'detail/:id', component: DetailComponent },
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
