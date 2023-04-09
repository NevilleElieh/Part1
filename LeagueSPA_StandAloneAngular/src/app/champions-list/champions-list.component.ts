import { Component, OnInit } from '@angular/core';
import { ChampionService } from '../champion.service';

@Component({
  selector: 'app-champions-list',
  templateUrl: './champions-list.component.html',
  styleUrls: ['./champions-list.component.css']
})
export class ChampionsListComponent implements OnInit {
  Champions!: any[];

  constructor(private championService: ChampionService) { }

  ngOnInit(): void {
    this.championService.getChampions()
      .subscribe((data: any[]) => {
        this.Champions = data;
      });
  }
}
