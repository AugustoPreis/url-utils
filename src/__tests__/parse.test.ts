import { parseUrl } from '../../index';

describe('src.parse.parseUrl', () => {
  test('Should return correct "url" prop', () => {
    const parsed1 = parseUrl('');
    const parsed2 = parseUrl('user_find');
    const parsed3 = parseUrl('/user/find');
    const parsed4 = parseUrl('/user/find?');
    const parsed5 = parseUrl('/user/find?id=10');

    expect(parsed1.url).toBe('');
    expect(parsed2.url).toBe('user_find');
    expect(parsed3.url).toBe('/user/find');
    expect(parsed4.url).toBe('/user/find');
    expect(parsed5.url).toBe('/user/find');
  });

  test('Should return correct "strParams" prop', () => {
    const parsed1 = parseUrl('');
    const parsed2 = parseUrl('/user/find');
    const parsed3 = parseUrl('/user/find?');
    const parsed4 = parseUrl('/user/find?id=10');
    const parsed5 = parseUrl('/user/find?id=10&status=true');

    expect(parsed1.strParams).toBe('');
    expect(parsed2.strParams).toBe('');
    expect(parsed3.strParams).toBe('');
    expect(parsed4.strParams).toBe('id=10');
    expect(parsed5.strParams).toBe('id=10&status=true');
  });

  test('Should return correct "paramsCount" prop', () => {
    const parsed1 = parseUrl('');
    const parsed2 = parseUrl('/user/find');
    const parsed3 = parseUrl('/user/find?');
    const parsed4 = parseUrl('/user/find?id=10');
    const parsed5 = parseUrl('/user/find?id=10&status=true');

    expect(parsed1.paramsCount).toBe(0);
    expect(parsed2.paramsCount).toBe(0);
    expect(parsed3.paramsCount).toBe(0);
    expect(parsed4.paramsCount).toBe(1);
    expect(parsed5.paramsCount).toBe(2);
  });

  test('Should return correct "params" prop', () => {
    const parsed1 = parseUrl('');
    const parsed2 = parseUrl('/user/find');
    const parsed3 = parseUrl('/user/find?');
    const parsed4 = parseUrl('/user/find?id=10');
    const parsed5 = parseUrl('/user/find?id=10&status=true');

    expect(parsed1.params).toStrictEqual({});
    expect(parsed2.params).toStrictEqual({});
    expect(parsed3.params).toStrictEqual({});
    expect(parsed4.params).toStrictEqual({ id: '10' });
    expect(parsed5.params).toStrictEqual({ id: '10', status: 'true' });
  });

  test('Should return correct "valid" prop', () => {
    const parsed1 = parseUrl('/user/find');
    const parsed2 = parseUrl('/user/find?');
    const parsed3 = parseUrl('/user/find?id=10');
    const parsed4 = parseUrl('user_find');
    const parsed5 = parseUrl('');

    expect(parsed1.valid).toBe(true);
    expect(parsed2.valid).toBe(true);
    expect(parsed3.valid).toBe(true);
    expect(parsed4.valid).toBe(false);
    expect(parsed5.valid).toBe(false);
  });
});