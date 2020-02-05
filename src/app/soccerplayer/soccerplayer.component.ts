import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from '../item/item.service';
import { Item, Type } from '../item/item';

@Component({
  selector: 'ns-soccerplayer',
  templateUrl: './soccerplayer.component.html',
  styleUrls: ['./soccerplayer.component.css']
})
export class SoccerplayerComponent implements OnInit {

    @Input() items : Array<Item>
    info: Item

  constructor(private service: ItemService) {}

  ngOnInit(): void {
     this.items = this.service.getSoccer()
  }

  add(data){
    data.type = Type.Soccer
    this.items.push(this.service.addItem(data))
  }
}
