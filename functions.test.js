const functions = require("./functions.js");

describe('multiply function', () => {
  it('should be return multiple when I sent two numbers', () => {
    //ARRANGE
    const a = 3;
    const b = 7;
    //ACT
    const result = functions.multiply(a, b);

    //ASSERT
    expect(result).toEqual(21);
  });

  it('should be return cero when I sent one number as cero', () => {
    //ARRANGE
    const a = 0;
    const b = 7;
    //ACT
    const result = functions.multiply(a, b);

    //ASSERT
    expect(result).toEqual(0);
  });

  it('should be return infinity when I sent huge number', () => {
    //ARRANGE
    const bigNumber = Number.MAX_VALUE;
    //ACT
    const result = functions.multiply(bigNumber, 2);
    //ASSERT
    expect(result).toBe(Infinity);
  });
});


describe('isNull function', () => {
  it('should be return null', () => {
    //ARRANGE

    //ACT
    const result = functions.isNull();
    //ASSERT
    expect(result).toBeNull();
  });

  it('should be dont throw errors', () => {
    //ARRANGE

    //ACT

    //ASSERT
    expect(() => functions.isNull()).not.toThrow();
  });
});

describe('checkTruthy function', () => {
  it('should be return true when I sent true', () => {
    //ARRANGE
    const value = true;
    //ACT
    const result = functions.checkTruthy(value);
    //ASSERT
    expect(result).toBeTruthy();
  });

  it('should be return false when I sent false', () => {
    //ARRANGE
    const value = false;
    //ACT
    const result = functions.checkTruthy(value);
    //ASSERT
    expect(result).toBeFalsy();
  });

  it('should be return false when I sent a not boolean parameter', () => {
    //ARRANGE
    const value = 'test';
    //ACT
    const result = functions.checkTruthy(value);
    //ASSERT
    expect(result).toBeFalsy();
  });
})

describe('addLastName function', () => {
  it('should be return Pepito Perez when I sent Perez', () => {
    //ARRANGE
    const lastname = 'Perez';
    //ACT
    const result = functions.addLastName(lastname);
    //ASSERT
    expect(result).toEqual({firstname: 'Pepito', lastname: 'Perez'});
  });

  it('should be return Suarez when I sent Suarez', () => {
    //ARRANGE
    const lastname = 'Suarez';
    //ACT
    const result = functions.addLastName(lastname);
    //ASSERT
    expect(result.lastname).toEqual('Suarez');
  });

  it('should be return undefined when I dont sent lastname', () => {
    //ARRANGE
    //ACT
    const result = functions.addLastName();
    //ASSERT
    expect(result.lastname).toBeUndefined();
    expect(result).toEqual({firstname: 'Pepito', lastname: undefined})
  });
})
