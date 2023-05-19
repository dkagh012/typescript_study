const person = {
  name: "Maximilian",
  age: 30,
};

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
  console.log("is author");
}
