import { faker } from "@faker-js/faker";
import pkg from "enquirer";
const { Form } = pkg;

const users = [];

const createRandomUser = () => {
  let user = {
    name: faker.person.fullName(),
    address: faker.location.buildingNumber(),
    street: faker.location.street(),
    country: faker.location.country(),
  };
  users.push(user);
};

// createRandomUser()
// console.log(users)

const prompt = new Form({
  name: "user",
  message: "Please provide the following information:",
  choices: [
    { name: "name", message: "Your Full Name", initial: "" },
    { name: "address", message: "Your Adress Number", initial: "" },
    { name: "street", message: "Your street", initial: "" },
    { name: "country", message: "Your country", initial: "" },
  ],
});

prompt
  .run()
  .then((value) => users.push(value))
  .then(() => {
    console.log(users);
  })
  .catch(console.error);
