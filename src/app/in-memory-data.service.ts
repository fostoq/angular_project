import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Nancy' },
      { id: 12, name: 'Miranjo' },
      { id: 13, name: 'Bojii' },
      { id: 14, name: 'Yuki' },
      { id: 15, name: 'Domas' },
      { id: 16, name: 'Ruth' },
      { id: 17, name: 'Lindel' },
      { id: 18, name: 'Chika' },
      { id: 19, name: 'May' },
      { id: 20, name: 'Kyo' },
      { id: 21, name: 'Kaya' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}