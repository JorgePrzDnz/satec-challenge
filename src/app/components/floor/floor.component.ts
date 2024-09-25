import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Room } from '../../models/room';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RoomFilter } from '../../models/room-filter';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrl: './floor.component.css'
})
export class FloorComponent {

  @Input() name: string = ''
  @Input() rooms: Room[] = []

  @Output() filterRooms = new EventEmitter<RoomFilter>()
  @Output() displayRoomModal = new EventEmitter<number>()
  @Output() displayDeleteModal = new EventEmitter<number>()

  filterForm!: FormGroup

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      capacity: [],
      occupation: []
    })
    this.filterForm.valueChanges.subscribe(filters => this.filterRooms.emit(filters))
  }

  modifyRoom(roomId: number) {
    this.displayRoomModal.emit(roomId)
  }

  createRoom() {
    this.displayRoomModal.emit()
  }

  deleteRoom(roomId: number) {
    this.displayDeleteModal.emit(roomId)
  }

}
