const { prompt, default: inquirer } = require("inquirer");
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
    switch (choice.option) {
      case "Add Department":
        addDepartment();
        break;
      case "Add Role":
        addRole();
        break;
      case "Add Employee":
        addEmployee();
        break;
      case "View Departments":
        viewDepartments();
        break;
      case "View Roles":
        viewRoles();
        break;
      case "Update Employee Roles":
        updateRole();
        break;
      default:
        quit();
    }
  });
}

// TODO- Create a function to Add a department
function addDepartment() {
  inquirer.prompt({
      type: "input",
      message: "Enter the name of the department you wish to add:",
      name: "depName"
  }
  ).then(function(answer){
    Connection.query("INSERT INTO department (name) VALUES (?)", [answer.depName])
    loadMainPrompts();
  })
}

// TODO- Create a function to Add a role
function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter a role name:",
        name: "roleTitle"
      },
      {
        type: "input",
        message: "Enter the role's salary:",
        name: "salary"
      },
      {
        type: "input",
        message: "Enter the department id number:",
        name: "depID"
      }
    ])
    .then(function(answer) {
      Connection.query("INSERT INTO role (roleTitle, salary, depID) VALUES (?, ?, ?)", [answer.roleTitle, answer.salary, answer.depID]);
      loadMainPrompts();
    })
}

// TODO- Create a function to Add an employee
function addEmployee() {
  inquirer.prompt([
    {
      type: "input",
      message: "Enter the employee's first name:",
      name: "eNameFirst"
    },
    {
      type: "input",
      message: "Enter the employee's last name:",
      name: "eNameLast"
    },
    {
      type: "input",
      message: "Enter the employee's ID number:",
      name: "eID"
    },
    {
      type: "input",
      message: "Enter the manager's ID number:",
      name: "mID"
    }
  ])
  .then(function(answer) {
    Connect.query("INSERT INTO employee (first_name, last_name, employee_id, manager_id) VALUE (?, ?, ?, ?)", [answer.eNameFirst, answer.eNameLast, answer.eID, answer.mID]);
    loadMainPrompts();
  });
}

// TODO- Create a function to View all employees
function viewEmployees() {
  let query = "SELECT * FROM employees";
  Connection.query(query, function(err, res) {
    if (err) throw err;
    console.table(res);
    loadMainPrompts();
  })
}

// TODO- Create a function to View all deparments
function viewDepartments() {
  let query = "SELECT * FROM departments";
  Connection.query(query, function(err, res){
    if (err) throw err;
    console.table(ers);
    loadMainPrompts();
  })
}

// TODO- Create a function to View all roles
function viewRoles() {
  let query = "SELECT + FROM roles";
  Connection.query(query, function(err, res) {
    if (err) throw err;
    console.table(res);
    loadMainPrompts();
  })
}

// TODO- Create a function to Update an employee's role
function updateRole() {
    inquirer.prompt([
      {
        type: "input",
        message: "Enter the employee you wish to update:",
        name: "eUpdate"
      },
      {
        type: "input",
        message: "Enter what it will be updated to:",
        name: "uRole",
      }
    ])
    .then(function(answer) {
      Connect.query('UPDATE employee SET role_title=? WHERE first_name= ?',[answer.eUpdate, answer.uRole]);
    })
}





// BONUS- Create a function to Delete a department

// BONUS- Create a function to View all departments and show their total utilized department budget

// BONUS- Create a function to View all employees that belong to a department

// BONUS- Create a function to View all employees that report to a specific manager

// BONUS- Create a function to Delete an employee

// BONUS- Create a function to Update an employee's manager

// BONUS- Create a function to Delete a role

// Exit the application
function quit() {
  console.log("Bye Bye!");
  process.exit();
}
