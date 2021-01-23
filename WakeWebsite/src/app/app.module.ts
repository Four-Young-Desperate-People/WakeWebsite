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
import {BlogPostOneComponent} from './blog-posts/blog-post-one/blog-post-one.component';
import {BlogPostTwoComponent} from './blog-posts/blog-post-two/blog-post-two.component';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutUsComponent,
        BlogComponent,
        ErrorPageComponent,
        NavbarCustomComponent,
        BlogPostOneComponent,
        BlogPostTwoComponent
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
