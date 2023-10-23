import { hasParams } from '../hasParams';

describe('src.utils.validators.hasParams.hasParams', () => {
  test('Should return true when has params', () => {
    const hasParams1 = hasParams('/users/find?name=john');
    const hasParams2 = hasParams('/users/find?age=35');
    const hasParams4 = hasParams('/users/find?bday=2022-02-02');
    const hasParams3 = hasParams('/users/find?json={"name":"john","age":35}');

    expect(hasParams1).toBe(true);
    expect(hasParams2).toBe(true);
    expect(hasParams3).toBe(true);
    expect(hasParams4).toBe(true);
  });

  test('Should return false when has no params', () => {
    const hasParams1 = hasParams('/users/find');
    const hasParams2 = hasParams('/users/find?');
    const hasParams3 = hasParams('/users/find? ');

    expect(hasParams1).toBe(false);
    expect(hasParams2).toBe(false);
    expect(hasParams3).toBe(false);
  });
});