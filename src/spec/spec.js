import menuGen from '../../helpers/menuGenerator';

let index = '';
let menu = '';
let menuItem = '';

beforeEach(() => {
  index = Math.floor(Math.random() * 20);
  menu = menuGen();
  menuItem = menu[index];
});

it('should be an array (e.g. typeof === object)', () => {
  expect(typeof menu).toBe('object');
});

it('should have a length of 20', () => {
  expect(menu.length).toEqual(20);
});

it('should contain objects with properties: foodItem, cost, tags', () => {
  expect(Object.keys(menuItem)).toContain('foodItem');
  expect(Object.keys(menuItem)).toContain('cost');
  expect(Object.keys(menuItem)).toContain('tags');
});

it('should contain the correct value types for each property', () => {
  expect(typeof menu[0].foodItem).toBe('string');
  expect(typeof menu[0].cost).toBe('number');
  expect(typeof menu[0].tags).toBe('string');
});
