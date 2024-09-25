import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Room } from "../models/room";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class RooomService {

    constructor (private httpClient: HttpClient) {}

    getAll(): Observable<Room[]> {
        return this.httpClient.get<Room[]>(`${environment.apiUrl}/rooms`)
    }

    create(room: Room) {
        return this.httpClient.post(`${environment.apiUrl}/rooms`, room)
    }

    update(room: Room) {
        return this.httpClient.put(`${environment.apiUrl}/rooms`, room)
    }

    // delete(roomId: number) {
    //     return this.httpClient.delete(`${environment.apiUrl}/rooms?id=${roomId}`)
    // }
}