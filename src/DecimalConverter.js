var DecimalConverter = function() {

  this.roman = new Array();
  this.roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  this.decimal = new Array();
  this.decimal = [1000,900,500,400,100,90,50,40,10,9,5,4,1];


  this.createError = function(errorName, errorMessage) {
    var error = new Error();
    error.name = errorName;
    error.message = errorMessage;
    throw error;
  }




  this.roman2decimal = function(value) {
    if(!value || value.length === 0) return 0;
    for(var i=0; i<this.roman.length; i++) {
      if(this.startsWith(this.roman[i], value)) {
        return this.decimal[i] +
               this.roman2decimal(this.removeStart(this.roman[i].length, value));
      }
    }

    this.createError("DecimalConverterError",
                     "Error converting roman numeral to decimal");

  };




  this.decimal2roman = function(value) {

    if (isNaN(value)) {
      this.createError("DecimalConverterError",
                       "Value is not a number");
    } else if (value <= 0 || value >= 4000) {
      this.createError("DecimalConverterError",
                       "Decimal value out of range");
    }

    var romanNumeral = "";

    for (var i=0; i<this.roman.length; i++) {
      while (value >= this.decimal[i]) {
        value -= this.decimal[i];
        romanNumeral += this.roman[i];
      }
    }

    return romanNumeral;
  };




  this.isValid = function() {
    return true;
  };




  this.startsWith = function(start, str) {
    return (str.substr(0, start.length) == start) ? true : false;
  };




  this.removeStart = function(length, str) {
    return str.substring(length, str.length);
  };

};
