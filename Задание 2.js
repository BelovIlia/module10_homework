let x = 1;
let result;
switch (typeof x !== 'symbol' && (isFinite(x) || typeof(x) === "string") && typeof(x)) {
  case "number":
    result = "x - число";
    break;
  case "string":
    result = "x - строка";
    break;
  case "boolean":
    result = "x - логическое";
    break;
  default:
    result = "Тип x не определен";
}
console.log(result);