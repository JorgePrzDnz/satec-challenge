import { Component } from '@angular/core';
import { Floor } from './models/floor';
import { Room } from './models/room';
import { FloorService } from './services/floor.service';
import { RooomService } from './services/room.service';
import { RoomFilter } from './models/room-filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  floors: Floor[] = []

  rooms: Room[] = []

  newRooms: Room[] = []
  
  selectedFloorId!: number
  selectedFloorName: string = ''
  selectedRooms: Room[] = []
  roomToModify: Room | undefined
  roomToDelete: Room | undefined

  displayRoomModal: boolean = false
  displayDeleteModal: boolean = false

  constructor(
    private floorService: FloorService,
    private roomService: RooomService
  ) {
    this.floorService.getAll().subscribe(data => {
      this.floors = data as Floor[]
      if (this.floors.length > 0) {
        this.selectedFloorId = this.floors[0].id
      }
      this.roomService.getAll().subscribe(data => {
        this.rooms = data
        this.loadFloor()
      })
    })
    
  }

  loadFloor() {
    this.selectedRooms = this.rooms.filter(room => room.floorId == this.selectedFloorId)
    this.selectedFloorName = this.floors.find(floor => floor.id == this.selectedFloorId)?.name || ''
  }

  filterRooms(filters: RoomFilter) {
    this.selectedRooms = this.rooms
      .filter(room => {
        const capacityMatch = !filters.capacity || room.capacity === filters.capacity
        const occupationMatch = !filters.occupation || room.occupation === filters.occupation
        return capacityMatch && occupationMatch
      })
      .filter(room => room.floorId == this.selectedFloorId)
  }

  showRoomModal(roomId: number | undefined) {
    this.displayRoomModal = true
    this.roomToModify = this.rooms.find(room => room.id === roomId)
  }

  showDeleteModal(roomId: number | undefined) {
    this.displayDeleteModal = true
    this.roomToDelete = this.rooms.find(room => room.id === roomId)
  }  

  modifyRoom(modifiedRoom: Room) {
    this.roomService.update(modifiedRoom).subscribe(() => {
      const modifiedRoomIndex = this.rooms.findIndex(room => room.id === modifiedRoom.id)
      this.rooms[modifiedRoomIndex] = {...this.rooms[modifiedRoomIndex], ...modifiedRoom}
      this.loadFloor()
    })
    this.displayRoomModal = false
  }

  createRoom(newRoom: Room) {
    this.roomService.create(newRoom).subscribe(() => {
      newRoom.floorId = this.selectedFloorId
      this.rooms.push(newRoom)
      this.loadFloor()
    })
    this.displayRoomModal = false
  }

  deleteRoom(deletedRoomId: number) {
    this.newRooms = this.rooms.filter(room => room.id !== deletedRoomId)
    this.rooms = JSON.parse(JSON.stringify(this.newRooms))
    this.loadFloor()

    // LLAMADA AL ENDPOINT DE API MOCHA
    // this.roomService.delete(deletedRoomId).subscribe(() => {
    //   this.newRooms = this.rooms.filter(room => room.id !== deletedRoomId)
    //   this.rooms = JSON.parse(JSON.stringify(this.newRooms))
    //   this.loadFloor()
    // })

    this.displayDeleteModal = false
 }
}
