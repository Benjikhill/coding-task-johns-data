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
  johnsData[propName] = propValue;
  if (propName !== propValue) {
    return console.log(
      "Sorry the passed in argument doesn't exists as a property in the johnsData object"
    );
  }
}
