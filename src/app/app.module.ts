import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';

import { AppComponent } from './app.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { FirstSectionComponent } from './first-section/first-section.component';
import { NewCardComponent } from './new-card/new-card.component';
import { SecondSectionComponent } from './second-section/second-section.component';
import { ThirdSectionComponent } from './third-section/third-section.component';
import { LeadingZeroPipe } from './pipes/leading-zero.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirstSectionComponent,
    SecondSectionComponent,
    NewCardComponent,
    ThirdSectionComponent,
    BlogCardComponent,
    LeadingZeroPipe,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
