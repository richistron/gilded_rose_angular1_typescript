import createFactory from "../app/createFactory";

export interface item {
  name:string
  sell_in:number
  quality:number
}

interface IItem {
  (
    name:'+5 Dexterity Vest' |
      'Aged Brie' |
      'Elixir of the Mongoose' |
      'Sulfuras, Hand of Ragnaros' |
      'Backstage passes to a TAFKAL80ETC concert' |
      'Conjured Mana Cake',
    sell_in:number,
    quality:number
  ) : item
}

const Item:IItem = (name, sell_in, quality) => ({
  name,
  sell_in,
  quality
})

let items:item[] = []

items.push(Item('+5 Dexterity Vest', 10, 20));
items.push(Item('Aged Brie', 2, 0));
items.push(Item('Elixir of the Mongoose', 5, 7));
items.push(Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(Item('Conjured Mana Cake', 3, 6));

interface Iupdate_quality {
  (items:item[]) : item[]
}

const update_quality: Iupdate_quality = (items) => {
  for (var i = 0; i < items.length; i++) {
    if (items[i].name !== 'Aged Brie' && items[i].name !== 'Backstage passes to a TAFKAL80ETC concert') {
      if (items[i].quality > 0) {
        if (items[i].name !== 'Sulfuras, Hand of Ragnaros') {
          items[i].quality = items[i].quality - 1
        }
      }
    } else {
      if (items[i].quality < 50) {
        items[i].quality = items[i].quality + 1
        if (items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
          if (items[i].sell_in < 11) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1
            }
          }
          if (items[i].sell_in < 6) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1
            }
          }
        }
      }
    }
    if (items[i].name !== 'Sulfuras, Hand of Ragnaros') {
      items[i].sell_in = items[i].sell_in - 1;
    }
    if (items[i].sell_in < 0) {
      if (items[i].name !== 'Aged Brie') {
        if (items[i].name !== 'Backstage passes to a TAFKAL80ETC concert') {
          if (items[i].quality > 0) {
            if (items[i].name !== 'Sulfuras, Hand of Ragnaros') {
              items[i].quality = items[i].quality - 1
            }
          }
        } else {
          items[i].quality = items[i].quality - items[i].quality
        }
      } else {
        if (items[i].quality < 50) {
          items[i].quality = items[i].quality + 1
        }
      }
    }
  }
  return items
}

export interface Ifactory {
  getItems: Function
  updateItems: Function
}

export interface Icontroller {
  () : Ifactory
}

const controller: Icontroller = function () {
  return {
    getItems: () => items,
    updateItems: () => items = update_quality(items),
  }
}

export default createFactory('gildedRoseFactory', [])([controller]).name