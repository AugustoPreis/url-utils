import validators, { validateType } from '../typeValidator';

describe('src.utils.validators.typeValidator.validateType', () => {
  test('Should return true for valid types', () => {
    const validateType1 = validateType(BigInt(10));
    const validateType2 = validateType(true);
    const validateType3 = validateType(false);
    const validateType4 = validateType(10);
    const validateType5 = validateType(NaN);
    const validateType6 = validateType('');
    const validateType7 = validateType(' ');
    const validateType8 = validateType('john');
    const validateType9 = validateType({});
    const validateType10 = validateType({ name: 'john' });

    expect(validateType1).toBe(true);
    expect(validateType2).toBe(true);
    expect(validateType3).toBe(true);
    expect(validateType4).toBe(true);
    expect(validateType5).toBe(true);
    expect(validateType6).toBe(true);
    expect(validateType7).toBe(true);
    expect(validateType8).toBe(true);
    expect(validateType9).toBe(true);
    expect(validateType10).toBe(true);
  });

  test('Should return false for invalid types', () => {
    const validateType1 = validateType(undefined);
    const validateType2 = validateType(null);
    const validateType3 = validateType(Symbol(''));
    const validateType4 = validateType(() => 'john');

    expect(validateType1).toBe(false);
    expect(validateType2).toBe(false);
    expect(validateType3).toBe(false);
    expect(validateType4).toBe(false);
  });
});

describe('src.utils.validators.typeValidator.validators', () => {
  test('Should not modify validator object', () => {
    expect(validators).toStrictEqual({
      function: false,
      symbol: false,
      undefined: false,

      bigint: true,
      boolean: true,
      number: true,
      string: true,

      object: expect.any(Function),
    });
  });
});