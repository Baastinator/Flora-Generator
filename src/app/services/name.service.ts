import { Injectable } from '@angular/core';

import {
  BehaviorSubject,
  Observable,
} from 'rxjs';

import firstNames from '../../assets/names/firstNames.json';
import secondNames from '../../assets/names/secondNames.json';
import singleNames from '../../assets/names/singlenNames.json';
import { Effect } from '../models/effects.model';

@Injectable({
  providedIn: 'root'
})
export class NameService {
  private namePool: string[] = [];
  private firstPool: string[] = [];
  private secondPool: string[] = [];
  private name$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public insertEffect(E: Effect): void {
    E.names?.forEach((S: string) => {
      this.firstPool.push(S);
    })
  }

  constructor() {
    this.setBasePools();
  }

  public getName(): string {
    return this.name$.value;
  }

  public getNameSub(): Observable<string> {
    return this.name$.asObservable();
  }

  public setName(S: string): void {
    this.name$.next(S);
  }

  public rollName(): string {
    const roll = (this.firstPool.length === 0 || this.secondPool.length === 0) ? false : Math.floor(10 * Math.random()) < 6
    console.log(roll);

    return roll ? `${this.rollFirst()}${this.rollSecond()}` : this.rollSingle()
  }

  public addFirst(S: string): void {
    this.firstPool.push(S)
  }

  public addFirsts(SA: string[]): void {
    SA.forEach((S: string) => {
      this.firstPool.push(S)
    })
  }

  public addSecond(S: string): void {
    this.secondPool.push(S)
  }

  public addSeconds(SA: string[]): void {
    SA.forEach((S: string) => {
      this.secondPool.push(S)
    })
  }

  public addName(S: string): void {
    this.namePool.push(S)
  }

  public addNames(SA: string[]): void {
    SA.forEach((S: string) => {
      this.namePool.push(S)
    })
  }

  private rollFirst(): string {
    return this.firstPool[Math.floor(this.firstPool.length * Math.random())]
  }

  private rollSecond(): string {
    const result = this.secondPool[Math.floor(this.secondPool.length * Math.random())]
    return result ? result : '';
  }

  private rollSingle(): string {
    const result = this.namePool[Math.floor(this.namePool.length * Math.random())];
    return result ? result : '';
  }

  private setBasePools(): void {
    const FNJson = JSON.stringify(firstNames);
    const SNJson = JSON.stringify(secondNames);
    const NamesJson = JSON.stringify(singleNames);

    (JSON.parse(FNJson) as string[]).forEach((S: string) => {
      this.firstPool.push(S);
    });
    (JSON.parse(SNJson) as string[]).forEach((S: string) => {
      this.secondPool.push(S);
    });
    (JSON.parse(NamesJson) as string[]).forEach((S: string) => {
      this.namePool.push(S);
    });
  }

  public listPools(): void {
    console.table(this.firstPool);
    console.table(this.secondPool);
    console.table(this.namePool);
  }

  public resetPools(): void {
    this.namePool = [];
    this.firstPool = [];
    this.secondPool = [];

    this.setBasePools();
  }

}
