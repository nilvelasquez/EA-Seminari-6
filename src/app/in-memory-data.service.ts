import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Villain } from './villain';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice', power: 'ice' },
      { id: 13, name: 'Bombasto', power: 'explosion' },
      { id: 14, name: 'Celeritas', power: 'invisibility' },
      { id: 15, name: 'Magneta', power: 'metal' },
      { id: 16, name: 'RubberMan', power: 'elasticity'  },
      { id: 17, name: 'Dynama', power: 'shapeshifting' },
      { id: 18, name: 'Dr. IQ', power: 'telepathy' },
      { id: 19, name: 'Magma', power: 'fire' },
      { id: 20, name: 'Tornado', power: 'wind' }
    ];
    return {heroes};
  }

  createDb2() {
    const villains = [
      { id: 12, name: 'Joker', power: 'genius' },
      { id: 13, name: 'Lex Luthor', power: 'technology' },
      { id: 14, name: 'Bane', power: 'venom' },
      { id: 15, name: 'Darkseid', power: 'telepathy' },
      { id: 16, name: 'Sinestro', power: 'light' },
      { id: 17, name: 'Lobo', power: 'strength' },
      { id: 18, name: 'Brainiac', power: 'mental' },
      { id: 19, name: 'Parallax', power: 'light' },
      { id: 20, name: 'Bizarro', power: 'strength' }
    ];
    return {villains};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

  genId2(villains: Villain[]): number {
    return villains.length > 0 ? Math.max(...villains.map(villain => villain.id)) + 1 : 11;
  }
}
