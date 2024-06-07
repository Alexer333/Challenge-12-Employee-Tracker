const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");

init();

// Display logo text, load main prompts
function init() {
  const logoText = logo({ name: "City of Pawnee" }).render();

  console.log(logoText);

  loadMainPrompts();
}

function loadMainPrompts() {
  prompt([
    // TODO- Create first question user will see- "What would you like to do?"
    {
      type: "list",
      choices: [
        "Add Department",
        "Add Role", 
        "Add Employee",
        "View Employees",
        "View Departments", 
        "View Roles", 
        "Update Employee Roles",
        "Quit"
      ],
      message: "What would you like to do?",
      name: "choice"
  },
  ]).then((res) => {
    // TODO- Create a variable to store the user's choice
    var string = loadMainPrompts(answer);
    // TODO- Create a switch statement to call the appropriate function depending on what the user chose
    Switch (select) {
      case "Add Department",
    }
  });
}

// TODO- Create a function to Add a department

// TODO- Create a function to Add a role

// TODO- Create a function to Add an employee

// TODO- Create a function to View all employees
function viewEmployees() {}

// TODO- Create a function to View all deparments

// TODO- Create a function to View all roles

// TODO- Create a function to Update an employee's role





// BONUS- Create a function to Delete a department

// BONUS- Create a function to View all departments and show their total utilized department budget

// BONUS- Create a function to View all employees that belong to a department

// BONUS- Create a function to View all employees that report to a specific manager

// BONUS- Create a function to Delete an employee

// BONUS- Create a function to Update an employee's manager

// BONUS- Create a function to Delete a role

// Exit the application
function quit() {
  console.log("Goodbye!");
  process.exit();
}
