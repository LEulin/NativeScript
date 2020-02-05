import { Injectable } from "@angular/core";

import { Item, Type } from "./item";

@Injectable({
    providedIn: "root"
})
export class ItemService {
    private items = new Array<Item>(
        { id: 1, name: "Ter Stegen", role: "Singer", type: Type.Artist },
        { id: 2, name: "Piqué", role: "Dancer", type: Type.Artist },
        { id: 3, name: "I. Rakitic", role: "Actress", type: Type.Artist },
        { id: 4, name: "Sergio", role: "Dancer", type: Type.Artist },
        { id: 5, name: "Denis Suárez", role: "Singer", type: Type.Artist },
        { id: 6, name: "Arda", role: "Dancer", type: Type.Artist },
        { id: 7, name: "A. Iniesta", role: "Singer", type: Type.Artist },
        { id: 8, name: "Suárez", role: "Actress", type: Type.Artist },
        { id: 9, name: "Messi", role: "Actress", type: Type.Artist },
        { id: 10, name: "Neymar", role: "Actor", type: Type.Artist },
        { id: 11, name: "Rafinha", role: "Midfielder", type: Type.Soccer },
        { id: 12, name: "Cillessen", role: "Goalkeeper", type: Type.Soccer },
        { id: 13, name: "Mascherano", role: "Defender", type: Type.Soccer },
        { id: 14, name: "Paco Alcácer", role: "Forward", type: Type.Soccer },
        { id: 15, name: "Jordi Alba", role: "Defender", type: Type.Soccer },
        { id: 16, name: "Digne", role: "Defender", type: Type.Soccer },
        { id: 17, name: "Sergi Roberto", role: "Midfielder", type: Type.Soccer },
        { id: 18, name: "André Gomes", role: "Midfielder", type: Type.Soccer },
        { id: 19, name: "Aleix Vidal", role: "Midfielder", type: Type.Soccer },
        { id: 20, name: "Umtiti", role: "Defender", type: Type.Soccer },
        { id: 21, name: "Mathieu", role: "Defender", type: Type.Soccer },
        { id: 22, name: "Masip", role: "Goalkeeper", type: Type.Soccer }
    );


    getItems(): Array<Item> {
        return this.items;
    }

    getArtist(): Array<Item> {
        return this.items.filter(artist=> artist.type == Type.Artist)
    }

    getSoccer(): Array<Item> {
        return this.items.filter(soccer=> soccer.type == Type.Soccer)
    }

    getItem(id: number): Item {
        return this.items.filter(item => item.id === id)[0];
    }

    addItem(data) {
        data.id = this.items[this.items.length - 1].id + 1
        this.items.push(data)
        return data
    }
}
