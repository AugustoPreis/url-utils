import { formatType } from '../typeFormatter';

describe('src.utils.formatter.typeFormatter.formatType', () => {
  test('Should format correctly valid types', () => {
    const formatted1 = formatType(BigInt(10));
    const formatted2 = formatType(true);
    const formatted3 = formatType(35);
    const formatted4 = formatType('john');
    const formatted5 = formatType(new Date(2022, 2, 2));
    const formatted6 = formatType({ name: 'john', age: 35 });

    expect(formatted1).toBe('10');
    expect(formatted2).toBe('true');
    expect(formatted3).toBe('35');
    expect(formatted4).toBe('john');
    expect(formatted5).toBe(new Date(2022, 2, 2).toISOString());
    expect(formatted6).toBe('{"name":"john","age":35}');
  });

  test('Should not modify valid string values', () => {
    const formatted1 = formatType('john');
    const formatted2 = formatType('35');
    const formatted3 = formatType('');
    const formatted4 = formatType(new Date(2022, 2, 2).toISOString());
    const formatted5 = formatType('{"name":"john","age":35}');

    expect(formatted1).toBe('john');
    expect(formatted2).toBe('35');
    expect(formatted3).toBe('');
    expect(formatted4).toBe(new Date(2022, 2, 2).toISOString());
    expect(formatted5).toBe('{"name":"john","age":35}');
  });

  test('Should return empty string to invalid types', () => {
    const formatted1 = formatType(() => 'john');
    const formatted2 = formatType(Symbol('10'));
    const formatted3 = formatType(undefined);
    const formatted4 = formatType(null);

    expect(formatted1).toBe('');
    expect(formatted2).toBe('');
    expect(formatted3).toBe('');
    expect(formatted4).toBe('');
  });
});