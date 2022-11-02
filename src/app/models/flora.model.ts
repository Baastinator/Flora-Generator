import { Observable } from 'rxjs';
import { Effect } from './effects.model';

export class Flora {
  public type = "";
  public subType = "";
  public size = ""
  public name = "";
  public effect = "";
  public sizes: number[] = [];
  public colors: string[] = [];
}

export interface FloraInput {
  type: Observable<string>,
  subType?: Observable<string>,
  effect: Effect,
  color: Observable<string>[],
  size: Observable<string>,
  sizes: Observable<number>[]
}

export interface FloraOutput {
  type: string,
  subType?: string,
  effect: Effect,
  color: string[],
  size: string,
  sizes: number[]
}
