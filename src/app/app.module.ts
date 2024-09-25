import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FloorComponent } from './components/floor/floor.component';
import { RoomComponent } from './components/room/room.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoomModalComponent } from './components/room-modal/room-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteRoomModalComponent } from './components/delete-room-modal/delete-room-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    FloorComponent,
    RoomComponent,
    RoomModalComponent,
    DeleteRoomModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
