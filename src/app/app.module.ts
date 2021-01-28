import { EvenDirective } from './even-directive/even.directive';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IfDirectiveDirective } from './if-condition/if-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    EvenDirective,
    IfDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
