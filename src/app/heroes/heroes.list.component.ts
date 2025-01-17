import { Component, Input } from '@angular/core';
import { HeroesService } from './heroes.service'

@Component({
  selector: 'heroes-heroeslist',
  imports: [],
  templateUrl: './heroes.list.component.html',
  styleUrl: './heroes.list.component.css'
})
export class HeroesListComponent {
  @Input() name = '';
  heroes = <String[]>[]

  constructor(heroesService: HeroesService) {
    this.heroes = heroesService.getHeroes()
  }
}
