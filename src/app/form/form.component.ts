import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Item } from "~/app/item/item";

@Component({
    selector: "ns-form",
    templateUrl: "./form.component.html",
    styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
    @Input() store: Item;
    // store : Item;
    name = ""
    role = ""
    @Output() editEvent = new EventEmitter();
    constructor() {}

    ngOnInit() {
    }

    submit() {
        let obj = {
            name: this.name,
            role: this.role,
        }
        this.editEvent.emit(obj);
    }
}
