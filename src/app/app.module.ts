import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { CardrouselComponent } from './cardrousel/cardrousel.component';
import { ActivityComponent } from './activity/activity.component';
import { HomeService } from './home.service';
import { CardActivityComponent } from './card-activity/card-activity.component';
import { ChannelsComponent } from './channels/channels.component';
import { CardChannelsComponent } from './card-channels/card-channels.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BreadcrumbComponent,
    CardrouselComponent,
    ActivityComponent,
    CardActivityComponent,
    ChannelsComponent,
    CardChannelsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
