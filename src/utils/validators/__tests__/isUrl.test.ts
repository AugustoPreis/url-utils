import { isUrl } from '../isUrl';

describe('src.utils.validators.isUrl.isUrl', () => {
  test('Should return true for a valid URL', () => {
    const isUrl1 = isUrl('/user/find');
    const isUrl2 = isUrl('/user/list?orderBy=name');
    const isUrl3 = isUrl('user/find/by/id/10');

    expect(isUrl1).toBe(true);
    expect(isUrl2).toBe(true);
    expect(isUrl3).toBe(true);
  });

  test('Should return false for a invalid URL', () => {
    const isUrl1 = isUrl('');
    const isUrl2 = isUrl('user_find');
    const isUrl3 = isUrl('user_find?name=john');
    const isUrl4 = isUrl('v1find&name=john');

    expect(isUrl1).toBe(false);
    expect(isUrl2).toBe(false);
    expect(isUrl3).toBe(false);
    expect(isUrl4).toBe(false);
  });

  test('Should return false for a non-URL', () => {
    const isUrl1 = isUrl(null);
    const isUrl2 = isUrl(undefined);
    const isUrl3 = isUrl(10 as undefined);

    expect(isUrl1).toBe(false);
    expect(isUrl2).toBe(false);
    expect(isUrl3).toBe(false);
  });
});