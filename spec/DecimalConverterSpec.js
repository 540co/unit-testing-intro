describe("Decimal Converter", function() {
  var converter;

  beforeEach(function() {
    converter = new DecimalConverter();
  });

  it("converts single roman numeral digits to decimal", function() {
    expect(converter.roman2decimal("I")).toBe(1);

    expect(converter.roman2decimal("V")).toBeLessThan(6);
    expect(converter.roman2decimal("V")).not.toBeLessThan(5);

    expect(converter.roman2decimal("X")).toBeGreaterThan(9);
    expect(converter.roman2decimal("X")).not.toBeGreaterThan(10);


    expect(converter.roman2decimal("L")).toMatch(/50/);

    expect(converter.roman2decimal("C") == "100").toBeTruthy();
    expect(converter.roman2decimal("C") === "100").toBeFalsy();
    expect(converter.roman2decimal("C") === 100).toBeTruthy();

    expect(converter.roman2decimal("D")).toBeCloseTo(500.4, 0);
    expect(converter.roman2decimal("D")).not.toBeCloseTo(500.5, 0);
    expect(converter.roman2decimal("D")).toBeCloseTo(500.004, 2);
    expect(converter.roman2decimal("D")).not.toBeCloseTo(500.006, 2);

    expect(converter.roman2decimal("M")).toBe(1000);
  });



  it("converts complex roman numeral digits to decimal (no subtraction)", function() {
    expect(converter.roman2decimal("MDCLXVI")).toBe(1666);
    expect(converter.roman2decimal("VIII")).toBe(8);
    expect(converter.roman2decimal("XXX")).toBe(30);
  });




  it("converts single subtraction roman numeral values to decimal", function() {
    expect(converter.roman2decimal("IV")).toBe(4);
    expect(converter.roman2decimal("IX")).toBe(9);
    expect(converter.roman2decimal("XL")).toBe(40);
    expect(converter.roman2decimal("XC")).toBe(90);
    expect(converter.roman2decimal("CD")).toBe(400);
    expect(converter.roman2decimal("CM")).toBe(900);
  });


  it("converts decimals to single digit roman numerals", function() {
    expect(converter.decimal2roman(1)).toMatch(/I/);
    expect(converter.decimal2roman(5)).toMatch(/V/);
    expect(converter.decimal2roman(10)).toMatch(/X/);
    expect(converter.decimal2roman(50)).toMatch(/L/);
    expect(converter.decimal2roman(100)).toMatch(/C/);
    expect(converter.decimal2roman(500)).toMatch(/D/);
    expect(converter.decimal2roman(1000)).toMatch(/M/);
  });

  it("converts complex decimals to roman numerals", function() {
    expect(converter.decimal2roman(1451)).toMatch(/MCDLI/);
    expect(converter.decimal2roman(99)).toMatch(/XCIX/);
    expect(converter.decimal2roman(3200)).toMatch(/MMMCC/);
  });


  xit("identifies invalid roman numerals", function() {});

  it("throws errors when invalid values are passed to its functions", function() {
    expect(function() { converter.decimal2roman("Not a decimal"); }).toThrow();
    expect(function() { converter.decimal2roman(0); }).toThrow();
    expect(function() { converter.decimal2roman(4000); }).toThrow();

    expect(function() { converter.roman2decimal("JJJJJ"); }).toThrow();
    expect(function() { converter.roman2decimal(true); }).toThrow();
    expect(function() { converter.roman2decimal(1234); }).toThrow();
  });

});


xdescribe("Something Else", function() {
  it("does something here", function() {});
  it("does something else here", function() {});
  it("does something even elser here", function() {});
});
