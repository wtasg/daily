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
        switch (this.items[i].name) {
            case "Sulfuras, Hand of Ragnaros": { } break;
            case "Aged Brie": { this.items[i].quality = Math.min(50, this.items[i].quality + 1); } break;
            case "Backstage passes to a TAFKAL80ETC concert": { this.items[i].quality = 0; } break;
            default: { this.items[i].quality = Math.max(0, this.items[i].quality - 1); } break;
        }
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            switch (this.items[i].name) {
                case "Aged Brie": {
                    if (this.items[i].quality < 50) {
                        this.items[i].quality = this.items[i].quality + 1;
                    }
                    this.items[i].sellIn = this.items[i].sellIn - 1;
                } break;
                case "Backstage passes to a TAFKAL80ETC concert": {
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
                    this.items[i].sellIn = this.items[i].sellIn - 1;
                } break;
                case "Sulfuras, Hand of Ragnaros": { } break;
                default: {
                    this.items[i].sellIn = this.items[i].sellIn - 1;
                    this.items[i].quality = Math.max(0, this.items[i].quality - 1);
                    break;
                }
            }

            if (this.items[i].sellIn < 0) {
                this.updateIfExpired(i);
            }
        }

        return this.items;
    }
}