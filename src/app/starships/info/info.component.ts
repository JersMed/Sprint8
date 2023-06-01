import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SwapiService } from '../services/swapi.service';

import { Starship, StarshipsList } from '@app/interfaces/swapi.starships.interface';
import { Film } from '@app/interfaces/swapi.films.interface';
import { Pilot, PilotsList } from '@app/interfaces/swapi.pilots.interface';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})

export class InfoComponent implements OnInit {

  public id: number = 0;
  public starship!: Starship;
  public pilots: Pilot[] = [];
  public films: Film[] = [];


  public starshipImg: string = "../../../../assets/img/default.webp"
  public pilotImg: string = "../../../../assets/img/default.webp"

  constructor(
    public swapiService: SwapiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.swapiService.getStarshipInfo(this.id).subscribe(resp => {

      this.starship = resp;

      for (const pilotUrl of resp.pilots) {
        const pilotId = this.swapiService.getPilotIdFromUrl(pilotUrl);
        this.swapiService.getPilot(pilotId).subscribe(pilot => {
          pilot.id = pilotId;
          pilot.imgUrl = `https://starwars-visualguide.com/assets/img/characters/${pilotId}.jpg`;
          this.pilots.push(pilot);
        });
      }

      for (const filmUrl of resp.films) {
        const filmId = this.swapiService.getPilotIdFromUrl(filmUrl);
        this.swapiService.getFilm(filmId).subscribe(film => {
          film.id = filmId;
          film.filmUrl = `https://starwars-visualguide.com/assets/img/films/${filmId}.jpg`;
          this.films.push(film);
        });
      }

    });

    this.starshipImg = `https://starwars-visualguide.com/assets/img/starships/${this.id}.jpg`;

    this.swapiService.checkImageExists(this.starshipImg).subscribe({
      next: resp => {
        alert(true);
      },
      error: error => {
        if (error.status != 200) {
          this.starshipImg = '../../../../assets/img/default.webp';
        }
      },
    });

  }

  getPilotId(url: string) {
    return url.split('/')[5]
  }

  getFilmId(url: string) {
    return url.split('/')[5]
  }
}