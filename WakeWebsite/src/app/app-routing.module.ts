import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {LogbookComponent} from './logbook/logbook.component';
import {ErrorPageComponent} from './error-page/error-page.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/home'},
    {path: 'home', component: HomeComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'logbook', component: LogbookComponent},
    {path: '**', pathMatch: 'full', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
