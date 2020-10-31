var person = [
  {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },
  },
  {
    firstName: "Santos",
    lastName: "Das",
    id: 5567,
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },
  },
  {
    firstName: "Tarique",
    lastName: "Akhtar",
    id: 5568,
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },
  },
  {
    firstName: "Pravat",
    lastName: "Behera",
    id: 5569,
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },
  },
];
console.log(
  person.map((item, i) => {
    return item.fullName();
  })
);
