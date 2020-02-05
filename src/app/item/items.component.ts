import { Component, OnInit , Input, Output, EventEmitter} from "@angular/core";
import { Router } from '@angular/router'
import { Item } from "./item";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    @Input() items: Array<Item>;
    @Input() titleText: string;
    @Output() result = new EventEmitter() 

    constructor(private router: Router) { }

    ngOnInit() {}

    add(data){
        this.result.emit(data)
    }

    isHomeRoute(){
        return this.router.url == "/grid"
    }

}
