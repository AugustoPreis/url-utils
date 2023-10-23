import { formatDate } from '../formatDate';

describe('src.utils.formatters.formatDate.formatDate', () => {
  test('Should format correcty date', () => {
    const date = new Date(2022, 2, 2);
    const result = formatDate(date);

    expect(result).toBe(date.toISOString());
  });

  test('Should return "Invalid Date" for invalid date', () => {
    const result = formatDate(new Date('Invalid Date'));

    expect(result).toBe('Invalid Date');
  });

  test('Should return empty string to invalid types', () => {
    const result1 = formatDate(null);
    const result2 = formatDate(undefined);
    const result3 = formatDate('2022-02-02' as undefined);

    expect(result1).toBe('');
    expect(result2).toBe('');
    expect(result3).toBe('');
  });
});