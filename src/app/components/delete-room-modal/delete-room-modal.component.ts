import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Room } from '../../models/room';

@Component({
  selector: 'app-delete-room-modal',
  templateUrl: './delete-room-modal.component.html',
  styleUrl: './delete-room-modal.component.css'
})
export class DeleteRoomModalComponent {

  @Input() id: number | undefined


  @Output() onDeleteRoom = new EventEmitter<number>()
  @Output() onHideModal = new EventEmitter<void>()

  deleteRoomForm!: FormGroup

  deleteRoom() {
    this.onDeleteRoom.emit(this.id)
  }

  hideModal() {
    this.onHideModal.emit()
  }
}
