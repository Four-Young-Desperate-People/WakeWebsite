import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {BlogComponent} from './blog/blog.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {BlogPostMech1Component} from './blog-posts/blog-post-mech-1/blog-post-mech-1.component';
import {BlogPostMech2Component} from './blog-posts/blog-post-mech-2/blog-post-mech-2.component';
import {BlogPostMech3Component} from './blog-posts/blog-post-mech-3/blog-post-mech-3.component';
import {BlogPostSoft1Component} from './blog-posts/blog-post-soft-1/blog-post-soft-1.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/home'},
    {path: 'home', component: HomeComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog-post-mech-1', component: BlogPostMech1Component},
    {path: 'blog-post-mech-2', component: BlogPostMech2Component},
    {path: 'blog-post-mech-3', component: BlogPostMech3Component},
    {path: 'blog-post-soft-1', component: BlogPostSoft1Component},
    {path: '**', pathMatch: 'full', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
