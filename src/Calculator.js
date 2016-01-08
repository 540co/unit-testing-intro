var Calculator = function() {
  this.operators = ["+", "-", "*", "/", "="];
  this.converter = new DecimalConverter();

  this.currentValue = 0;
  this.currentOperator = "=";

  this.setValue =function(value) {
    var decimalValue = this.converter.roman2decimal(value);

    if(this.currentOperator != "=") {
      if(this.currentOperator == "+") { this.add(decimalValue); }
      if(this.currentOperator == "-") { this.subtract(decimalValue); }
      if(this.currentOperator == "*") { this.multiply(decimalValue); }
      if(this.currentOperator == "/") { this.divide(decimalValue); }
    } else {
      this.currentValue = this.converter.roman2decimal(value);
    }
  }

  this.setOperator = function(operator) {
      this.currentOperator = operator;
  }

  this.add = function(value) {
    this.currentValue += value;
  };

  this.subtract = function(value) {
    this.currentValue -= value;
  };

  this.multiply = function(value) {
    this.currentValue *= value;
  }

  this.divide = function(value) {
    this.currentValue /= value;
  }

  this.clear = function() {
    this.currentValue = 0;
    this.currentOperator = "=";
  }

  this.getValue = function() {
    return this.converter.decimal2roman(this.currentValue);
  }
};
