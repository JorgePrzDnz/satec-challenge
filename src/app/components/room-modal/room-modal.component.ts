import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Room } from '../../models/room';

@Component({
  selector: 'app-room-modal',
  templateUrl: './room-modal.component.html',
  styleUrl: './room-modal.component.css'
})
export class RoomModalComponent implements OnInit {

  @Input() id: number | undefined
  @Input() name: string | undefined
  @Input() capacity: number | undefined
  @Input() occupation: number | undefined

  @Output() onModifyRoon = new EventEmitter<Room>()
  @Output() onCreateRoon = new EventEmitter<Room>()
  @Output() onDeleteRoom = new EventEmitter<Room>()
  @Output() onHideModal = new EventEmitter<void>()

  roomForm!: FormGroup
  
  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.roomForm = this.fb.group({
      id: [this.id],
      name: [this.name, [Validators.required]],
      capacity: [this.capacity, [Validators.required, Validators.min(1)]],
      occupation: [this.occupation, [Validators.required, Validators.max(100), Validators.min(0)]]
    })
  }

  saveRoom() {
    if (this.roomForm.valid) {
      if (this.roomForm.value.id) {
        this.onModifyRoon.emit(this.roomForm.value)
      } else {
        this.onCreateRoon.emit(this.roomForm.value)
      }
    }
  }
  
  hideModal() {
    this.onHideModal.emit()
  }

}
