import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumberBoxComponent } from './components/number-box/number-box.component';
import { OnlyNumberDirective } from './directives/only-number.directive';


@NgModule({
  declarations: [
    AppComponent,
    NumberBoxComponent,
    OnlyNumberDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
