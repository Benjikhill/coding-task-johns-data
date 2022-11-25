const johnsData = {
  firstName: "John",
  surName: "Doe",
  age: 28,
  city: "Hamburg",
  children: ["Mia", "Fynn"],
  hobbies: ["Football", "Playing Guitar"],
};

function fullName() {
  return johnsData.firstName + " " + johnsData.surName;
}

function changeJohnsData(propName, propValue) {
  if (johnsData[propName]) {
    johnsData[propName] = propValue;
  } else {
    return console.log(
      "Sorry the passed in argument doesn't exists as a property in the johnsData object"
    );
  }
}
