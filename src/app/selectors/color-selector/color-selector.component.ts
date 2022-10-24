import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ColorsService } from '../../services/colors.service';
import { FloraService } from '../../services/flora.service';

@Component({
  selector: 'app-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.scss', '../selector.scss']
})
export class ColorSelectorComponent implements OnInit, OnDestroy {
  @Input() public id!: number;
  public colors: string[] = [];
  public colorSelector: string = '';

  private randomSub$!: Observable<boolean>;
  private randomSub!: Subscription;

  public locked = false;

  constructor(
    private colorsService: ColorsService,
    private floraService: FloraService
  ) { }

  ngOnInit(): void {
    this.colors = this.colorsService.getColors(this.id);

    this.randomSub$ = this.floraService.getRandomSub();
    this.randomSub = this.randomSub$.subscribe((B: boolean) => {
      if (!this.locked && B) this.randomise();
    })
  }

  ngOnDestroy(): void {
    this.randomSub.unsubscribe();
  }

  public randomise(): void {
    this.colorSelector = this.floraService.randomisers[0](this.colors)
    this.onChange();
  }

  public onChange(): void {
    this.colorsService.setColor(this.id, this.colorSelector)
  }
}
