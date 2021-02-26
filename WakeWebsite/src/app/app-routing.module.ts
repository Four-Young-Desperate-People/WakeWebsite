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
import {BlogPostMech4Component} from './blog-posts/blog-post-mech-4/blog-post-mech-4.component';
import {BlogPostMech5Component} from './blog-posts/blog-post-mech-5/blog-post-mech-5.component';
import {BlogPostMech6Component} from './blog-posts/blog-post-mech-6/blog-post-mech-6.component';
import {BlogPostSoft2Component} from './blog-posts/blog-post-soft-2/blog-post-soft-2.component';
import {BlogPostSoft4Component} from './blog-posts/blog-post-soft-4/blog-post-soft-4.component';
import {BlogPostMech7Component} from './blog-posts/blog-post-mech-7/blog-post-mech-7.component';
import {BlogPostMech8Component} from './blog-posts/blog-post-mech-8/blog-post-mech-8.component';
import {BlogPostMech9Component} from './blog-posts/blog-post-mech-9/blog-post-mech-9.component';
import {BlogPostMech10Component} from './blog-posts/blog-post-mech-10/blog-post-mech-10.component';
import {BlogPostMech11Component} from './blog-posts/blog-post-mech-11/blog-post-mech-11.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/home'},
    {path: 'home', component: HomeComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog-post-mech-1', component: BlogPostMech1Component},
    {path: 'blog-post-mech-2', component: BlogPostMech2Component},
    {path: 'blog-post-mech-3', component: BlogPostMech3Component},
    {path: 'blog-post-mech-4', component: BlogPostMech4Component},
    {path: 'blog-post-mech-5', component: BlogPostMech5Component},
    {path: 'blog-post-mech-6', component: BlogPostMech6Component},
    {path: 'blog-post-mech-7', component: BlogPostMech7Component},
    {path: 'blog-post-mech-8', component: BlogPostMech8Component},

    // TODO: uncomment on/after Feb 21
    // {path: 'blog-post-mech-9', component: BlogPostMech9Component},

    // TODO: uncomment on/after Feb 27
    // {path: 'blog-post-mech-10', component: BlogPostMech10Component},

    // TODO: uncomment on/after Mar 6
    // {path: 'blog-post-mech-11', component: BlogPostMech11Component},

    {path: 'blog-post-soft-1', component: BlogPostSoft1Component},
    {path: 'blog-post-soft-2', component: BlogPostSoft2Component},
    {path: 'blog-post-soft-4', component: BlogPostSoft4Component},
    {path: '**', pathMatch: 'full', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
