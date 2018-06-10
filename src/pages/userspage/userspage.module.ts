import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserspagePage } from './userspage';

@NgModule({
  declarations: [
    UserspagePage,
  ],
  imports: [
    IonicPageModule.forChild(UserspagePage),
  ],
})
export class UserspagePageModule {}
