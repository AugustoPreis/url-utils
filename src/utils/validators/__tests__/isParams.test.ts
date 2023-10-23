import { isParams, isValidParam } from '../isParams';

describe('src.utils.validators.isParams.isParams', () => {
  test('Should return the for object with only valid param(s)', () => {
    const isParams1 = isParams({ name: 'john', age: 35 });
    const isParams2 = isParams({ age: 35, bday: '2022-02-02' });
    const isParams3 = isParams({ json: { name: 'john', age: 35 } });

    expect(isParams1).toBe(true);
    expect(isParams2).toBe(true);
    expect(isParams3).toBe(true);
  });

  test('Should return the for object with some valid param(s)', () => {
    const isParams1 = isParams({ name: 'john', age: null });
    const isParams2 = isParams({ name: undefined, age: 35 });
    const isParams3 = isParams({ name: 'john', json: Symbol('{}') });

    expect(isParams1).toBe(true);
    expect(isParams2).toBe(true);
    expect(isParams3).toBe(true);
  });

  test('Should return false for a invalid object', () => {
    const isParams1 = isParams({});
    const isParams2 = isParams({ symbol: Symbol('10') });
    const isParams3 = isParams({ callback: () => 'john' });
    const isParams4 = isParams({ udfnd: undefined });
    const isParams5 = isParams({ n: null });

    expect(isParams1).toBe(false);
    expect(isParams2).toBe(false);
    expect(isParams3).toBe(false);
    expect(isParams4).toBe(false);
    expect(isParams5).toBe(false);
  });

  test('Should return false for a non-objects', () => {
    const isParams1 = isParams(undefined);
    const isParams2 = isParams(null);
    const isParams3 = isParams(new Date());
    const isParams4 = isParams(String);
    const isParams5 = isParams('{name: "john"}');

    expect(isParams1).toBe(false);
    expect(isParams2).toBe(false);
    expect(isParams3).toBe(false);
    expect(isParams4).toBe(false);
    expect(isParams5).toBe(false);
  });
});

describe('src.utils.validators.isParams.isValidParam', () => {
  test('Should return true for valid type params', () => {
    const isValidParam1 = isValidParam('john');
    const isValidParam2 = isValidParam(' ');
    const isValidParam3 = isValidParam(35);
    const isValidParam4 = isValidParam(new Date());
    const isValidParam5 = isValidParam({ age: 35 });
    const isValidParam6 = isValidParam(true);

    expect(isValidParam1).toBe(true);
    expect(isValidParam2).toBe(true);
    expect(isValidParam3).toBe(true);
    expect(isValidParam4).toBe(true);
    expect(isValidParam5).toBe(true);
    expect(isValidParam6).toBe(true);
  });

  test('Should return false for invalid type params', () => {
    const isValidParam1 = isValidParam(undefined);
    const isValidParam2 = isValidParam(null);
    const isValidParam3 = isValidParam(() => 'john');
    const isValidParam4 = isValidParam(Symbol(10));

    expect(isValidParam1).toBe(false);
    expect(isValidParam2).toBe(false);
    expect(isValidParam3).toBe(false);
    expect(isValidParam4).toBe(false);
  });
});