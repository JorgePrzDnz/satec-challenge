import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent {

  @Input() id: number = 0
  @Input() name: string = ''
  @Input() capacity: number = 0
  @Input() occupation: number = 0

  @Output() displayRoomModal = new EventEmitter<number>()
  @Output() displayDeleteModal = new EventEmitter<number>()

  modifyRoom(roomId: number) {
    this.displayRoomModal.emit(roomId)
  }

  deleteRoom(roomId: number) {
    this.displayDeleteModal.emit(roomId)
  }
  
}
