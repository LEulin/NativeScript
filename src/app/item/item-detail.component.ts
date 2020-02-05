import { Component, OnInit} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Item } from "./item";
import { ItemService } from "./item.service";
// import { Page } from "ui/Page";

@Component({
    selector: "ns-details",
    templateUrl: "./item-detail.component.html",
    styleUrls: ["./item-detail.component.css"]
})
export class ItemDetailComponent implements OnInit {

    item: Item;
    number = 0
    show : boolean
    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.item = this.itemService.getItem(id);
    }

    onTap() {
        this.number++
    }
    decre(){
        this.number--
    }

    update(data){
        this.show = true
        this.item.name = data.name
        this.item.role = data.role
        this.item.type = data.type
    }
}
