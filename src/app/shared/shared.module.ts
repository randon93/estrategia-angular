import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardComponent } from '../pages/dash-board/dash-board.component';
import { SidersComponent } from './siders/siders.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [DashBoardComponent, SidersComponent, HeaderComponent],
  exports: [DashBoardComponent, SidersComponent, HeaderComponent],
  imports: [CommonModule],
})
export class SharedModule {}
