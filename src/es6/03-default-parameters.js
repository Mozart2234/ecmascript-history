// 03 - Default Parameters
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters

// old way
function cardName(name, age, country) {
  var name = name || "Alexei";
  var age = age || 28;
  var country = country || "Peru";
  console.log(name, age, country);
}

cardName();
cardName("Pedro", 21);

// new way

function character(name = "Axe", age = 20, place = "Internet") {
  console.log(name, age, place);
}

character();
character("Bara Bara", 22, "Dota 2");
