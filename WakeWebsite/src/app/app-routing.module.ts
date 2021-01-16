import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {BlogComponent} from './blog/blog.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {BlogPostFirstWeekComponent} from './blog-posts/blog-post-first-week/blog-post-first-week.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/home'},
    {path: 'home', component: HomeComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog-post-1', component: BlogPostFirstWeekComponent},
    {path: '**', pathMatch: 'full', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
