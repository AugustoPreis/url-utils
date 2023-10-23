import { formatParam, getParams } from '../formatParams';

describe('src.utils.formatters.formatParams.formatParam', () => {
  test('Should format correctly "bigint" type', () => {
    const result1 = formatParam(BigInt(1));
    const result2 = formatParam(BigInt(Number.MAX_SAFE_INTEGER));
    const result3 = formatParam(BigInt(Number.MIN_SAFE_INTEGER));

    expect(result1).toBe('1');
    expect(result2).toBe(Number.MAX_SAFE_INTEGER.toString());
    expect(result3).toBe(Number.MIN_SAFE_INTEGER.toString());
  });

  test('Should format correctly "boolean" type', () => {
    const result1 = formatParam(true);
    const result2 = formatParam(false);

    expect(result1).toBe('true');
    expect(result2).toBe('false');
  });

  test('Should format correctly "number" type', () => {
    const result1 = formatParam(1);
    const result2 = formatParam(1.5);
    const result3 = formatParam(-1);
    const result4 = formatParam(-1.5);

    expect(result1).toBe('1');
    expect(result2).toBe('1.5');
    expect(result3).toBe('-1');
    expect(result4).toBe('-1.5');
  });

  test('Should format correctly "string" type', () => {
    const result1 = formatParam('john');
    const result2 = formatParam('john ');
    const result3 = formatParam(' john');

    expect(result1).toBe('john');
    expect(result2).toBe('john ');
    expect(result3).toBe(' john');
  });

  test('Should format correctly "object" type', () => {
    const result1 = formatParam({ name: 'john' });
    const result2 = formatParam({ name: 'john', age: 30 });

    expect(result1).toBe('{"name":"john"}');
    expect(result2).toBe('{"name":"john","age":30}');
  });

  test('Should format correctly date object', () => {
    const result1 = formatParam(new Date(2022, 2, 2));
    const result2 = formatParam(new Date('Invalid Date'));

    expect(result1).toBe(new Date(2022, 2, 2).toISOString());
    expect(result2).toBe('Invalid Date');
  });

  test('Should return empty string to invalid types', () => {
    const result1 = formatParam(null);
    const result2 = formatParam(undefined);
    const result3 = formatParam(Symbol('param'));
    const result4 = formatParam(() => '');

    expect(result1).toBe('');
    expect(result2).toBe('');
    expect(result3).toBe('');
    expect(result4).toBe('');
  });
});


describe('src.utils.formatters.formatParams.getParams', () => {
  test('Should return parameters for valid input', () => {
    const result1 = getParams({
      url: '/user/list',
      params: {},
      paramsCount: 1,
      strParams: 'name=john',
      valid: true,
    });
    const result2 = getParams({
      url: '/user/list',
      params: {},
      paramsCount: 2,
      strParams: 'name=john&age=30',
      valid: true,
    });

    expect(result1).toStrictEqual({ name: 'john' });
    expect(result2).toStrictEqual({ name: 'john', age: '30' });
  });

  test('Should return empty object for invalid input', () => {
    const result1 = getParams({
      url: '/user/list',
      params: {},
      paramsCount: 0, // invalid
      strParams: 'name=john',
      valid: false,
    });
    const result2 = getParams({
      url: '/user/list',
      params: {},
      paramsCount: 2,
      strParams: '', // invalid
      valid: false,
    });

    expect(result1).toStrictEqual({});
    expect(result2).toStrictEqual({});
  });
});