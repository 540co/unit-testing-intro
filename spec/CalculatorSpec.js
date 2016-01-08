describe("Calculator", function() {
  var calculator;

  beforeEach(function() {
    calculator = new Calculator();
  });

  it("adds two numbers together", function() {
    spyOn(calculator, 'add').and.callThrough();

    calculator.setValue("X");
    calculator.setOperator("+");
    calculator.setValue("XXXV");
    expect(calculator.add).toHaveBeenCalled();
    expect(calculator.getValue()).toMatch(/XLV/);


    calculator.setOperator("+");
    calculator.setValue("IX");
    expect(calculator.add.calls.count()).toEqual(2);
    expect(calculator.getValue()).toMatch(/LIV/);
  });

  it("subtracts two numbers from one another", function() {
    spyOn(calculator, 'subtract').and.callThrough();

    calculator.setValue("XXII");
    calculator.setOperator("-");
    calculator.setValue("III");
    expect(calculator.subtract).toHaveBeenCalled();
    expect(calculator.getValue()).toMatch(/XIX/);

    calculator.setOperator("-");
    calculator.setValue("X");
    expect(calculator.subtract.calls.count()).toEqual(2);
    expect(calculator.getValue()).toMatch(/IX/);

  });

  it("multiplies two numbers to each other", function() {
    spyOn(calculator, 'multiply').and.callThrough();

    calculator.setValue("X");
    calculator.setOperator("*");
    calculator.setValue("VII");
    expect(calculator.multiply).toHaveBeenCalled();
    expect(calculator.getValue()).toMatch(/LXX/);

    calculator.setOperator("*");
    calculator.setValue("II");
    expect(calculator.multiply.calls.count()).toEqual(2);
    expect(calculator.getValue()).toMatch(/CXL/);

  });

  it("divides two numbers from one another", function() {
    spyOn(calculator, 'divide').and.callThrough();

    calculator.setValue("XXI");
    calculator.setOperator("/");
    calculator.setValue("III");
    expect(calculator.divide).toHaveBeenCalled();
    expect(calculator.getValue()).toMatch(/VII/);

    calculator.setOperator("/");
    calculator.setValue("I");
    expect(calculator.divide.calls.count()).toEqual(2);
    expect(calculator.getValue()).toMatch(/VII/);

  });


});
