import { DanyGuard } from './guards/authenticator.guard';
import { UserSectionComponent } from './components/user-section/user-section.component';
import { RoomSectionComponent as RoomSectionComponent } from './components/stock-table/stock-table.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'rooms',
    pathMatch: 'full'
  },
  {
    path: 'rooms',
    component: RoomSectionComponent,
    canActivate: [DanyGuard]
  },
  {
    path: 'users',
    component: UserSectionComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
