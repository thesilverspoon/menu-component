import menuGen from '../../helpers/menuGenerator';

let menu = '';
let menuItem = '';

beforeEach(() => {
  menu = menuGen();
  menuItem = [menu[0]];
});

it('should be an array', () => {
  expect(Array.isArray(menu)).toBe(true);
});

it('should have a length of 20', () => {
  expect(menu.length).toEqual(20);
});

it('should contain objects with properties: foodItem, cost, tags', () => {
  expect(Object.keys(menuItem[0]).length).toEqual(3);
  expect(Object.keys(menuItem[0])).toContain('foodItem');
  expect(Object.keys(menuItem[0])).toContain('cost');
  expect(Object.keys(menuItem[0])).toContain('tags');
});

it('should contain the correct value types for each property', () => {
  expect(typeof menu[0].foodItem).toBe('string');
  expect(typeof menu[0].cost).toBe('number');
  expect(typeof menu[0].tags).toBe('string');
});
