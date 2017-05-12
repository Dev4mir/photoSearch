import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { ServicesComponent } from './componentes/services/services.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { FlickrSearchService } from './services/flickr-search.service';
import { AutofocusDirective } from './directives/autofocus/autofocus.directive';
import { TrackScrollDirective } from './directives/trackScroll/track-scroll.directive';
import { PhotosComponent }  from './componentes/photos/photos.component';

import { appRoutes } from './routing/routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    NotFoundComponent,
    AutofocusDirective,
    TrackScrollDirective,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    InfiniteScrollModule,
  ],
  providers: [FlickrSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
