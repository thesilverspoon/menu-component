const menuList = require('../../helpers/menuGenerator');

let entreeMenu = '';
let dessertMenu = '';
let dessertItem = '';
let entreeItem = '';

beforeEach(() => {
  entreeMenu = menuList.entreeMenuGen();
  entreeItem = [entreeMenu[0]];
  dessertMenu = menuList.dessertMenuGen();
  dessertItem = [dessertMenu[0]];
});

describe('entree generator func', () => {
  it('should be an array', () => {
    expect(Array.isArray(entreeMenu)).toBe(true);
  });

  it('should have a length of 20', () => {
    expect(entreeMenu.length).toEqual(20);
  });

  it('should contain objects with properties: foodItem, cost, tags', () => {
    expect(Object.keys(entreeItem[0]).length).toEqual(3);
    expect(Object.keys(entreeItem[0])).toContain('foodItem');
    expect(Object.keys(entreeItem[0])).toContain('cost');
    expect(Object.keys(entreeItem[0])).toContain('tags');
  });

  it('should contain the correct value types for each property', () => {
    expect(typeof entreeMenu[0].foodItem).toBe('string');
    expect(typeof entreeMenu[0].cost).toBe('number');
    expect(typeof entreeMenu[0].tags).toBe('string');
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
    expect(Object.keys(dessertItem[0]).length).toEqual(3);
    expect(Object.keys(dessertItem[0])).toContain('foodItem');
    expect(Object.keys(dessertItem[0])).toContain('cost');
    expect(Object.keys(dessertItem[0])).toContain('tags');
  });

  it('should contain the correct value types for each property', () => {
    expect(typeof dessertMenu[0].foodItem).toBe('string');
    expect(typeof dessertMenu[0].cost).toBe('number');
    expect(typeof dessertMenu[0].tags).toBe('string');
  });
});
