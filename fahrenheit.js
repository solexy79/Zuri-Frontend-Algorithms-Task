function convertFahrToCelsius(fahrenheit) {
  let f = fahrenheit;
  //Check if its a valid number and convert from fahrenheit to celsuis
  if (typeof f === "number") {
    let TempIncelsius = ((f - 32) * 5) / 9;
    return Number(TempIncelsius.toFixed(4));
    //is it an object?
  } else if (typeof f == "object") {
    //is it an array
    if (Array.isArray(f)) {
      return `${JSON.stringify(f)} is not a valid number but a/an Array`;

      // if not then what type
    } else {
      return `${JSON.stringify(f)} is not a valid number but an ${typeof f}`;
    }

    //is it a string
  } else if (typeof f == "string") {
    //is the string convertable to a number
    let fNum = Number(f);

    //if not then what type is it
    if (isNaN(fNum)) {
      return `${f} is not a valid number but a ${typeof f}.`;

      //if the string can be converted to a number then find the celsius value
    } else {
      TempIncelsius = (fNum - 32) * (5 / 9);
      return Number(TempIncelsius.toFixed(4));
    }

    //if the value is none of the above then you are doing a rubbish
  } else {
    return `wrong input format`;
  }
}
