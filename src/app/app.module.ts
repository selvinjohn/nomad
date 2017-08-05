import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent }   from './not-found.component';
import { DashboardsModule }  from './dashboard/dashboard.module';
import {DndModule} from 'ng2-dnd';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
     BrowserModule,
    FormsModule,
    DashboardsModule,    
    Ng2Bs3ModalModule,
    AppRoutingModule,
      DndModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
