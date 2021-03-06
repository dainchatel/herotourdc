import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


import { Hero } from './hero';
import { HEROES } from '../mock-heroes/mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
  getHero(id: number): Promise<Hero> {
  return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
}
}
