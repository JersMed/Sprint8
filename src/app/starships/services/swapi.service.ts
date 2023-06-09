import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Starship, StarshipsList } from '@app/interfaces/swapi.starships.interface';
import { Pilot, PilotsList } from '@app/interfaces/swapi.pilots.interface';
import { Film, FilmsList } from '@app/interfaces/swapi.films.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  private _url = 'https://swapi.py4e.com/api'

  public starship!: StarshipsList;
  public pilots: PilotsList[] = [];
  public films: FilmsList[] = [];
  public text: string = "Title"

  constructor(private http: HttpClient) { }

  getStarships(page: number = 1) {
    return this.http.get<StarshipsList>(`${this._url}/starships/?page=${page}`)
  }

  getStarshipInfo(id: number): Observable<Starship> {
    return this.http.get<Starship>(`${this._url}/starships/${id}`)
  }

  checkImageExists(imageURL: string): Observable<any> {
    return this.http.get<any>(imageURL)
  }

  getPilot(id: number): Observable<Pilot> {
    return this.http.get<Pilot>(`${this._url}/people/${id}`)
  }

  getPilotIdFromUrl(url: string): number {
    const pilotId = url.split('/');
    return parseInt(pilotId[pilotId.length - 2]);
  }

  getFilm(id: number): Observable<Film> {
    return this.http.get<Film>(`${this._url}/films/${id}`)
  }

  getFilmIdFromUrl(url: string): number {
    const filmId = url.split('/');
    return parseInt(filmId[filmId.length - 2]);
  }
}
