// Angular/NPM packages
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// UI Components
import { AppComponent } from './app.component';
import { NavComponent } from './navbar/nav.component';
import { Content } from './content/content';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    Content
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
