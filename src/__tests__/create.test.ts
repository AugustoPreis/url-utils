import { createUrl } from '../../index';

describe('src.create.createUrl', () => {
  test('Should return empty string to invalid url', () => {
    const url1 = createUrl(null as string, {});
    const url2 = createUrl(undefined as string, {});
    const url3 = createUrl({} as undefined as string, {});

    expect(url1).toBe('');
    expect(url2).toBe('');
    expect(url3).toBe('');
  });

  test('Should return empty object to invalid params', () => {
    const url1 = createUrl('/user/find', null);
    const url2 = createUrl('/user/find', undefined);
    const url3 = createUrl('/user/find', '{id:10}' as undefined);
    const url4 = createUrl('/user/find', new String() as undefined);
    const url5 = createUrl('/user/find', new Date() as undefined);

    expect(url1).toBe('/user/find?');
    expect(url2).toBe('/user/find?');
    expect(url3).toBe('/user/find?');
    expect(url4).toBe('/user/find?');
    expect(url5).toBe('/user/find?');
  });

  test('Should return a url with params', () => {
    const url = createUrl('/user/list', {
      orderBy: 'name',
      filterBy: 'created',
      filter: 'john',
    });

    expect(url).toBe('/user/list?orderBy=name&filterBy=created&filter=john');
  });

  test('Should return sended string without "?" char', () => {
    const url = createUrl('not_a_url', {});

    expect(url).toBe('not_a_url');
  });

  test('Should not format undefined param', () => {
    const url = createUrl('/user/list', {
      orderBy: undefined,
      filterBy: undefined,
      filter: undefined,
    });

    expect(url).toBe('/user/list?');
  });

  test('Should not format null param', () => {
    const url = createUrl('/user/list', {
      orderBy: null,
      filterBy: null,
      filter: null,
    });

    expect(url).toBe('/user/list?');
  });

  test('Should format only valid params', () => {
    const since = new Date();
    const url = createUrl('/user/list', {
      orderBy: null,
      filterBy: 'name',
      filter: undefined,
      since,
    });

    expect(url).toBe(`/user/list?filterBy=name&since=${since.toISOString()}`);
  });

  test('Should format correcty BigInt param', () => {
    const url = createUrl('/user/find', { id: BigInt(Number.MAX_SAFE_INTEGER) });

    expect(url).toBe(`/user/find?id=${Number.MAX_SAFE_INTEGER}`);
  });

  test('Should format correcty boolean param', () => {
    const url = createUrl('/user/list', { status: true, admin: false });

    expect(url).toBe('/user/list?status=true&admin=false');
  });

  test('Should format correcty Number param', () => {
    const url = createUrl('/user/find', { id: 10 });

    expect(url).toBe('/user/find?id=10');
  });

  test('Should format correcty Object param', () => {
    const url = createUrl('/user/list', {
      filters: {
        name: 'john',
        minAge: 10,
        maxAge: 20,
      },
    });

    expect(url).toBe('/user/list?filters={"name":"john","minAge":10,"maxAge":20}');
  });

  test('Should format correcty Date param', () => {
    const url = createUrl('/user/list', { date: new Date('2020-01-01') });
    const isoDate = new Date('2020-01-01').toISOString();

    expect(url).toBe(`/user/list?date=${isoDate}`);
  });

  test('Should format correcty String param', () => {
    const url = createUrl('/user/list', { name: 'john' });

    expect(url).toBe('/user/list?name=john');
  });

  test('Should format empty String param', () => {
    const url = createUrl('/user/list', { name: '', name2: ' ' });

    expect(url).toBe('/user/list?name=&name2= ');
  });
});