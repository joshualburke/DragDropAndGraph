import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ChartsModule, WavesModule, MDBBootstrapModule} from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
   declarations: [
      AppComponent,
      DragdropComponent,
      ChartComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      DragDropModule,
      MatIconModule,
      FormsModule,
      ChartsModule,
      WavesModule,
      MDBBootstrapModule.forRoot()
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
