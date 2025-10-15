// @ts-nocheck
export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name: string, sellIn: number, quality: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateIfExpired(i: number) {
        if (this.items[i].name != "Aged Brie") {
            if (
                this.items[i].name != "Backstage passes to a TAFKAL80ETC concert"
            ) {
                if (this.items[i].quality > 0) {
                    if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
                        this.items[i].quality = this.items[i].quality - 1;
                    }
                }
            } else {
                this.items[i].quality = this.items[i].quality -
                    this.items[i].quality;
            }
        } else {
            if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
            }
        }
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            switch (this.items[i].name) {
                case "Aged Brie": { } break;
                case "Backstage passes to a TAFKAL80ETC concert": { } break;
                case "Sulfuras, Hand of Ragnaros": { } break;
                default: {
                    this.items[i].quality = Math.max(0, this.items[i].quality - 1);
                    break;
                }
            }

            // Block for Aged Brie
            if (this.items[i].name === "Aged Brie" && this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
            }

            // created new block...
            if (this.items[i].name === "Backstage passes to a TAFKAL80ETC concert") {
                if (this.items[i].quality < 50) {
                    this.items[i].quality = this.items[i].quality + 1;

                    if (this.items[i].sellIn < 11) {
                        if (this.items[i].quality < 50) {
                            this.items[i].quality = this.items[i].quality + 1;
                        }
                    }
                    if (this.items[i].sellIn < 6) {
                        if (this.items[i].quality < 50) {
                            this.items[i].quality = this.items[i].quality + 1;
                        }
                    }
                }
            }
            if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
                this.items[i].sellIn = this.items[i].sellIn - 1;
            }

            if (this.items[i].sellIn < 0) {
                this.updateIfExpired(i);
            }
        }

        return this.items;
    }
}