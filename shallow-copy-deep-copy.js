const person = {
  name: "Pathum Kalhan",
  age: 28,
  address: {
    city: "Colombo",
    country: "Sri Lanka",
  },
  skills: {
    frontend: {
      html: true,
      css: true,
      js: true,
    },
  },
};

// Shallow copy
const shallowCopy = { ...person };
shallowCopy.name = "John Doe";

console.log(person);

// Deep copy
const deepCopy = JSON.parse(JSON.stringify(person));
deepCopy.name = "Jane Doe";
deepCopy.address.city = "Galle";
deepCopy.skills.frontend.html = false;

console.log(deepCopy);
