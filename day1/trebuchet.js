//console.log(calDocument(parseDocument()));

// read the input.txt file and paste it into a string
function parseDocument() {
  document.getElementById('inputfile')
    .addEventListener('change', function () {
      let fr = new FileReader();
      fr.onload = function () {
        console.log(calDocument(parseDocument(fr.result)));
      }
      fr.readAsText(this.files[0]);
    })
}

// Receives the document with the lines of scrambled calibration values and calculates 
// the calibration value of each line and adds them together
function calDocument(document) {
  // split the document in an array of words seperated by a newline character
  const lines = document.split("\n");
  var sum = 0;
  for (let i = 0; i < lines.length; i++) {
    var cal = calLine(lines[i]);
    sum += parseInt(cal);
  }
  return sum;
}

// Calculate the calibration value of one line
// the calibration value combines the first digit and the last digit in the line
function calLine(line) {
  var calValue = "";
  var tempValue = "";
  for (let i = 0; i < line.length; i++) {
    var c = line.charAt(i);
    // Save the character of the current position in the line to the tempValue if it is a number
    if (isNumeric(c)) {
      tempValue = c;
      // If the calValue is currently empty replace it by the first number that comes up
      if (!isNumeric(parseInt(calValue))) {
        calValue = tempValue;
      }
    }
  }
  // After the iterations the last saved value in tempValue is the last numeral character in the line
  // Add that value at the End
  return calValue += tempValue;
}

// returns true if the given string is numeric
function isNumeric(s) {
  return !isNaN(parseInt(s, 10));
}