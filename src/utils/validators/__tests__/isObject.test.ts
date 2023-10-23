import { isObject } from '../isObject';

describe('src.utils.validators.isObject.isObject', () => {
  test('Should return true for valid literal objects', () => {
    const isObject1 = isObject({});
    const isObject2 = isObject({ name: 'john', age: 35 });
    const isObject3 = isObject({ age: NaN });

    expect(isObject1).toBe(true);
    expect(isObject2).toBe(true);
    expect(isObject3).toBe(true);
  });

  test('Should return false for invalid literal objects', () => {
    const isObject1 = isObject(new Date());
    const isObject2 = isObject(String);
    const isObject3 = isObject('{name: "john"}');

    expect(isObject1).toBe(false);
    expect(isObject2).toBe(false);
    expect(isObject3).toBe(false);
  });
});