import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from '../item/item.service';
import { Item, Type } from '../item/item';

@Component({
  selector: 'ns-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

    @Input() items : Array<Item>
  constructor(private service: ItemService) { }

  ngOnInit():void {
      this.items = this.service.getArtist()
  }

  add(data){
    data.type = Type.Artist
    this.items.push(this.service.addItem(data))
  }
}
