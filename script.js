(function () {
var people = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < people.length; i++) {
  var firstLetter = people[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(people[i]);
  }
  else {
    helloSpeaker(people[i]);
  }
}
})();


