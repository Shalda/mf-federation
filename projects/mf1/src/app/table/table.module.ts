import { NgModule } from '@angular/core';
import {TableComponent} from "./table.component";
import {RouterModule, Routes} from "@angular/router";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";

const routes: Routes = [{ path: '', component: TableComponent }];
@NgModule({
  declarations: [TableComponent],
  imports: [

    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TableModule { }
