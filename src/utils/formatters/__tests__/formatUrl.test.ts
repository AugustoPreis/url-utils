import { addParams, normalizeUrl, splitUrl } from '../formatUrl';

describe('src.utils.formatters.formatUrl.addParams', () => {
  test('Should add params correctly', () => {
    const url1 = addParams('/string?', { name: 'john' });
    const url2 = addParams('/date?', { since: new Date(2022, 2, 2) });
    const url3 = addParams('/object?', { json: { bday: '17/03' } });
    const url4 = addParams('/number?', { age: 35 });
    const url5 = addParams('/boolean?', { orderByName: true, active: false });

    expect(url1).toBe('/string?name=john');
    expect(url2).toBe(`/date?since=${new Date(2022, 2, 2).toISOString()}`);
    expect(url3).toBe('/object?json={"bday":"17/03"}');
    expect(url4).toBe('/number?age=35');
    expect(url5).toBe('/boolean?orderByName=true&active=false');
  });

  test('Should add only valid params', () => {
    const url1 = addParams('/withoutage?', { name: 'john', age: null });
    const url2 = addParams('/withoutage?', { name: 'john', age: undefined });
    const url3 = addParams('/withoutparams?', { callback: () => 'john' });

    expect(url1).toBe('/withoutage?name=john');
    expect(url2).toBe('/withoutage?name=john');
    expect(url3).toBe('/withoutparams?');
  });

  test('Should not add any param', () => {
    const url1 = addParams('/invalid', {});
    const url2 = addParams('/invalid?', {});
    const url3 = addParams('/invalid?', { age: null, bday: undefined });
    const url4 = addParams('/invalid?', { callback: () => 'john' });

    expect(url1).toBe('/invalid');
    expect(url2).toBe('/invalid?');
    expect(url3).toBe('/invalid?');
    expect(url4).toBe('/invalid?');
  });
});

describe('src.utils.formatters.formatUrl.normalizeUrl', () => {
  test('Should not modify url', () => {
    const url1 = normalizeUrl('/user/list?');
    const url2 = normalizeUrl('/user/list?name=john');
    const url3 = normalizeUrl('/user/list?name=john&age=35');

    expect(url1).toBe('/user/list?');
    expect(url2).toBe('/user/list?name=john');
    expect(url3).toBe('/user/list?name=john&age=35');
  });

  test('Should trim url', () => {
    const url1 = normalizeUrl('/user/list? ');
    const url2 = normalizeUrl(' /user/list?');
    const url3 = normalizeUrl(' /user/list? ');

    expect(url1).toBe('/user/list?');
    expect(url2).toBe('/user/list?');
    expect(url3).toBe('/user/list?');
  });

  test('Should add "?" char', () => {
    const url1 = normalizeUrl('/user/list');
    const url2 = normalizeUrl('/user/list&');
    const url3 = normalizeUrl('/user/list/params=');

    expect(url1).toBe('/user/list?');
    expect(url2).toBe('/user/list&?');
    expect(url3).toBe('/user/list/params=?');
  });
});

describe('src.utils.formatters.formatUrl.splitUrl', () => {
  test('Should split correctly the url', () => {
    const splited1 = splitUrl('/user/list?name=john');
    const splited2 = splitUrl('/user/list?name=john&age=35');
    const splited3 = splitUrl('/user/list?json={"bday":"17/03"}');

    expect(splited1).toStrictEqual({ url: '/user/list', strParams: 'name=john', paramsCount: 1 });
    expect(splited2).toStrictEqual({ url: '/user/list', strParams: 'name=john&age=35', paramsCount: 2 });
    expect(splited3).toStrictEqual({ url: '/user/list', strParams: 'json={"bday":"17/03"}', paramsCount: 1 });
  });

  test('Should not split url without params', () => {
    const splited1 = splitUrl('/user/list');
    const splited2 = splitUrl('/user/list?');
    const splited3 = splitUrl('/user/list? ');

    expect(splited1).toStrictEqual({ url: '/user/list', strParams: '', paramsCount: 0 });
    expect(splited2).toStrictEqual({ url: '/user/list', strParams: '', paramsCount: 0 });
    expect(splited3).toStrictEqual({ url: '/user/list', strParams: '', paramsCount: 0 });
  });
});