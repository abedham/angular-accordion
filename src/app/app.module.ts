import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionContainerComponent } from './accordion-container/accordion-container.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    AccordionContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
