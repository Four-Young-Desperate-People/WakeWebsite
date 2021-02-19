import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {BlogComponent} from './blog/blog.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {NavbarCustomComponent} from './navbar-custom/navbar-custom.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BlogPostMech1Component} from './blog-posts/blog-post-mech-1/blog-post-mech-1.component';
import {BlogPostMech2Component} from './blog-posts/blog-post-mech-2/blog-post-mech-2.component';
import {BlogPostMech3Component} from './blog-posts/blog-post-mech-3/blog-post-mech-3.component';
import {BlogPostSoft1Component} from './blog-posts/blog-post-soft-1/blog-post-soft-1.component';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BlogPostMech4Component} from './blog-posts/blog-post-mech-4/blog-post-mech-4.component';
import {BlogPostMech5Component} from './blog-posts/blog-post-mech-5/blog-post-mech-5.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutUsComponent,
        BlogComponent,
        ErrorPageComponent,
        NavbarCustomComponent,
        BlogPostMech1Component,
        BlogPostMech2Component,
        BlogPostMech3Component,
        BlogPostMech4Component,
        BlogPostMech5Component,
        BlogPostSoft1Component
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        FlexLayoutModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
