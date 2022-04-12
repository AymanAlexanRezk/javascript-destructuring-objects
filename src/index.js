import "./styles.css";

const employee = {
  firstName: "Ayman",
  familyName: "Alexan Rezk",
  currentJob: "React Developer",
  location: {
    country: "Egypt",
    city: "Hurghada"
  }
};

const greetEmployee = ({ firstName, location: { city } }) =>
  `Hello, ${firstName} from ${city}.`;

const greetMessage = greetEmployee(employee);

document.getElementById("app").innerHTML = greetMessage;
