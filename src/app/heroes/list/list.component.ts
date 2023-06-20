import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  public heroNames: string[] = [ 'spiderman', 'Capitán América', 'Hulk', 'Thor']
  public heroDelete?: string

  removeLastHero(): void {
    this.heroDelete = this.heroNames.pop()

  }
}
