import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {BlogComponent} from './blog/blog.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {BlogPostOneComponent} from './blog-posts/blog-post-one/blog-post-one.component';
import {BlogPostTwoComponent} from './blog-posts/blog-post-two/blog-post-two.component';
import {BlogPostThreeComponent} from './blog-posts/blog-post-three/blog-post-three.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/home'},
    {path: 'home', component: HomeComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog-post-1', component: BlogPostOneComponent},
    {path: 'blog-post-2', component: BlogPostTwoComponent},
    {path: 'blog-post-3', component: BlogPostThreeComponent},
    {path: '**', pathMatch: 'full', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
