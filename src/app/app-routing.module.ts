import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChannelMenuComponent } from './channel-menu/channel-menu.component';


const routes: Routes = [
  { path: '', redirectTo: '/channel', pathMatch: 'full' },
  { path: 'channel', component: ChannelMenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
