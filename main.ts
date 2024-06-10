{let myVariable = "Pharmacognosy IIB is a nightmare for every student.";
console.log("This is Lowercase:", myVariable.toLowerCase());
console.log("This is Uppercase:", myVariable.toLocaleUpperCase());
console.log("This is Titlecase:", myVariable.replace(/\b\w/g,c => c.toUpperCase()));}