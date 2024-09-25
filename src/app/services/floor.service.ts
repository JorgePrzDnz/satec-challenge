import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Floor } from "../models/floor";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class FloorService {

    constructor (private httpClient: HttpClient) {}

    getAll() {
        return this.httpClient.get(`${environment.apiUrl}/floors`, {responseType: 'json'})
    }

}