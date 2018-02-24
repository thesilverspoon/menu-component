const menuList = require('../../helpers/menuGenerator');
const sampleData = require('../../data/sampleData');

const entreeMenu = menuList.entreeMenuGen();
const [entreeItem] = entreeMenu;
const dessertMenu = menuList.dessertMenuGen();
const [dessertItem] = dessertMenu;

// test menu generator functions
describe('function menu generator functions', () => {
  describe('entree generator func', () => {
    it('should be an array', () => {
      expect(Array.isArray(entreeMenu)).toBe(true);
    });

    it('should have a length of 20', () => {
      expect(entreeMenu.length).toEqual(20);
    });

    it('should contain objects with properties: foodItem, cost, tags', () => {
      expect(Object.keys(entreeItem).length).toEqual(3);
      expect(Object.keys(entreeItem)).toContain('foodItem');
      expect(Object.keys(entreeItem)).toContain('cost');
      expect(Object.keys(entreeItem)).toContain('tags');
    });

    it('should contain the correct value types for each property', () => {
      expect(typeof entreeItem.foodItem).toBe('string');
      expect(typeof entreeItem.cost).toBe('number');
      expect(typeof entreeItem.tags).toBe('string');
    });
  });

  describe('dessert generator func', () => {
    it('should be an array', () => {
      expect(Array.isArray(dessertMenu)).toBe(true);
    });

    it('should have a length of 8', () => {
      expect(dessertMenu.length).toEqual(8);
    });

    it('should contain objects with properties: foodItem, cost, tags', () => {
      const keys = Object.keys(dessertItem);
      expect(keys.length).toEqual(3);
      expect(keys).toContain('foodItem');
      expect(keys).toContain('cost');
      expect(keys).toContain('tags');
    });

    it('should contain the correct value types for each property', () => {
      expect(typeof dessertItem.foodItem).toBe('string');
      expect(typeof dessertItem.cost).toBe('number');
      expect(typeof dessertItem.tags).toBe('string');
    });
  });
});

// test sample data array
describe('sample data array', () => {
  it('should be and array', () => {
    expect(Array.isArray(sampleData)).toBe(true);
  });

  it('should have a length of 119 items', () => {
    expect(sampleData.length).toEqual(119);
  });
  // test individual object from sample data array
  describe('sample data item', () => {
    const item = sampleData[0];
    let itemKeys = Object.keys(item);
    let expected = ['id', 'name', 'menu'];

    it('should be an object with the correct keys', () => {
      expect(itemKeys.length).toEqual(3);
      expect(itemKeys).toEqual(expect.arrayContaining(expected));
      expect(['id', 'name', 'dog']).not.toEqual(expect.arrayContaining(expected));
    });

    it('should contain the correct value types at each property', () => {
      expect(typeof item.id).toBe('number');
      expect(typeof item.name).toBe('string');
      expect(typeof item.menu).toBe('object');
      expect(Array.isArray(item.menu)).toBe(false);
    });
    describe('the property "menu" and it\'s structure', () => {
      it('should contain the correct keys', () => {
        expected = ['lunch', 'dinner', 'dessert'];
        itemKeys = Object.keys(item.menu);
        expect(itemKeys).toEqual(expect.arrayContaining(expected));
      });

      it('should contain an array at each key with the correct structure', () => {
        const { menu: { lunch } } = item;
        const { menu: { dinner } } = item;
        const { menu: { dessert } } = item;

        expected = {
          foodItem: 'string',
          cost: 'number',
          tags: 'string',
        };

        expect(Array.isArray(lunch)).toBe(true);
        expect(Array.isArray(dinner)).toBe(true);
        expect(Array.isArray(dessert)).toBe(true);
      });
    });
  });
});
