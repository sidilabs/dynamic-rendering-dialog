import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { DialogSecondContentComponent } from './dialog-second-content/dialog-second-content.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    DialogContentComponent,
    DialogSecondContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
