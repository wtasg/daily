import { GildedRose, Item } from "./gilded-rose.js";

describe('GildedRose', () => {
    it('should degrade quality and sellIn for normal items', () => {
        const item = new Item('foo', 10, 20);
        const gildedRose = new GildedRose([item]);
        gildedRose.updateQuality();
        expect(item.sellIn).toBe(9);
        expect(item.quality).toBe(19);
    });

    it('should not decrease quality below 0', () => {
        const item = new Item('foo', 5, 0);
        const gildedRose = new GildedRose([item]);
        gildedRose.updateQuality();
        expect(item.quality).toBe(0);
    });

    it('should increase quality of Aged Brie', () => {
        const item = new Item('Aged Brie', 2, 0);
        const gildedRose = new GildedRose([item]);
        gildedRose.updateQuality();
        expect(item.quality).toBe(1);
        expect(item.sellIn).toBe(1);
    });

    it('should not increase quality of Aged Brie above 50', () => {
        const item = new Item('Aged Brie', 2, 50);
        const gildedRose = new GildedRose([item]);
        gildedRose.updateQuality();
        expect(item.quality).toBe(50);
    });

    it('should not change sellIn or quality for Sulfuras', () => {
        const item = new Item('Sulfuras, Hand of Ragnaros', 0, 80);
        const gildedRose = new GildedRose([item]);
        gildedRose.updateQuality();
        expect(item.sellIn).toBe(0);
        expect(item.quality).toBe(80);
    });

    it('should increase quality of Backstage passes as sellIn approaches', () => {
        const item = new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20);
        const gildedRose = new GildedRose([item]);
        gildedRose.updateQuality();
        expect(item.quality).toBe(21);
        expect(item.sellIn).toBe(14);
    });

    it('should increase quality by 2 when 10 >= sellIn > 5 for Backstage passes', () => {
        const item = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20);
        const gildedRose = new GildedRose([item]);
        gildedRose.updateQuality();
        expect(item.quality).toBe(22);
        expect(item.sellIn).toBe(9);
    });

    it('should increase quality by 3 when 5 >= sellIn >= 0 for Backstage passes', () => {
        const item = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20);
        const gildedRose = new GildedRose([item]);
        gildedRose.updateQuality();
        expect(item.quality).toBe(23);
        expect(item.sellIn).toBe(4);
    });

    it('should drop quality to 0 after concert for Backstage passes', () => {
        const item = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20);
        const gildedRose = new GildedRose([item]);
        gildedRose.updateQuality();
        expect(item.quality).toBe(0);
        expect(item.sellIn).toBe(-1);
    });

    it('should degrade quality twice as fast after sellIn for normal items', () => {
        const item = new Item('foo', 0, 10);
        const gildedRose = new GildedRose([item]);
        gildedRose.updateQuality();
        expect(item.quality).toBe(8);
        expect(item.sellIn).toBe(-1);
    });

    it('should increase quality of Aged Brie twice as fast after sellIn', () => {
        const item = new Item('Aged Brie', 0, 10);
        const gildedRose = new GildedRose([item]);
        gildedRose.updateQuality();
        expect(item.quality).toBe(12);
        expect(item.sellIn).toBe(-1);
    });

    it('should not increase quality of Backstage passes above 50', () => {
        const item = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49);
        const gildedRose = new GildedRose([item]);
        gildedRose.updateQuality();
        expect(item.quality).toBe(50);
    });

    it('should handle multiple items', () => {
        const items = [
            new Item('foo', 1, 1),
            new Item('Aged Brie', 2, 0),
            new Item('Sulfuras, Hand of Ragnaros', 0, 80),
            new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20)
        ];
        const gildedRose = new GildedRose(items);
        gildedRose.updateQuality();
        expect(items[0]!.quality).toBe(0);
        expect(items[1]!.quality).toBe(1);
        expect(items[2]!.quality).toBe(80);
        expect(items[3]!.quality).toBe(21);
    });
});