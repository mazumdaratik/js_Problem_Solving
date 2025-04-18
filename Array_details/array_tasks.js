// const employees = [
//     { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
//     { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
//     { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
//     { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
//     { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
//     { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
//     { id: 7, name: "George", departmentId: 3, salary: 5200 },
//     { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
//     { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
//     { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
//   ];

const departments = [
    { id: 1, name: "HR" },
    { id: 2, name: "Engineering" },
    { id: 3, name: "Marketing" },
    { id: 4, name: "Sales" },
  ];


//  T-021: Can you filter employees who work in the "Engineering" department?
const employeeOfEngineeringDept =  employees.filter( (employee) => {
        return employee.departmentId === 2;
})
//console.log(employeeOfEngineeringDept);
//  T-022: Create a new array that combines employee names and department names in the format: "Alice (HR)".
const employeeVsDept = employees.map( empName => {
    const department = departments.find( dept => dept.id === empName.departmentId );
      return `${empName.name} (${department ? department.name : "unknown"})`;
    })
//console.log(employeeVsDept);
//  T-023: Find the highest salary among employees.
const higestSalary = employees.reduce( (higest, sal) => {
  
    if(sal.salary > higest){
      higest = sal.salary;
    }
    return higest;
}, 0);
//console.log(higestSalary);
//  T-024: Check if there is at least one employee in the "Sales" department.
const hasSalesEmployee = employees.some(employee => {
  const department = departments.find(dept => dept.id === employee.departmentId);
  return department && department.name === "Sales";
});

//console.log(`Is there at least one employee in Sales? ${hasSalesEmployee}`);

//  T-025: Write a function to filter employees earning more than 6000.
const Earner = employees.filter( employee => employee.salary > 6000 )
//console.log(Earner);
//  T-026: Create an array of employee names only.
const employeeName = employees.map(employee => employee.name);
//console.log(employeeName);
//  T-027: Calculate the total salary of all employees using
const totalSalary = employees.reduce( (total, employee) => {
  total += employee.salary;
  return total;
}, 0)
//console.log(totalSalary);
//  T-028: Is there any employee earning less than 5000?
const lessEarner = employees
    .filter( employee => employee.salary < 5000 )
//console.log(lessEarner);
//  T-029: Find the first employee who earns exactly 5100.
const exactSalary = employees
    .find(employee => employee.salary === 5100);
//console.log(exactSalary);
//  T-030: Find the last employee in the "HR" department.
const hrEmployees = employees
    .filter(employee => {
  const department = departments
    .find(dept => dept.id === employee.departmentId);

  return department && department.name === "HR";
});

const lastHrEmployee = hrEmployees[hrEmployees.length - 1];

//console.log("Last Employee in HR:", lastHrEmployee);

//  T-031: Find the first employee in the "Marketing" department.
const firstMarketingEmployee = employees
.find(employee => {
  const department = departments
  .find(dept => dept.id === employee.departmentId);

  return department && department.name === "Marketing";
});

//console.log(firstMarketingEmployee);

//  T-032: Check if all employees earn more than 4000.
const checkIncome = employees
    .every( check => check.salary > 4000);
//console.log(checkIncome);
//  T-033: Find the last employee in the "HR" department.
const lastHREmployee = employees
  .filter(employee => employee.departmentId === 1)
  .at(-1);

//console.log(lastHREmployee);

//  T-034: Verify if all employees belong to a department listed in the departments array.
const allEmployeesDepartments = employees.every(employee => 
  departments.some(department => department.id === employee.departmentId)
);

console.log(allEmployeesDepartments);

//  T-035: Log each employee's name and department name to the console.
employees.forEach(employee => {
  const department = departments
  .find(dept => dept.id === employee.departmentId);
  console.log(`${employee.name} (${department ? department.name : "Unknown"})`);
});

//  T-036: Extract all employee skill names into a single array.

//  T-037: Increment each employee's salary by 10%
const updatedEmployees = employees.map(employee => ({
  ...employee,
  salary: employee.salary * 1.1 // Increment salary by 10%
}));

//console.log(updatedEmployees);


//  T-038: Assume each employee can have multiple skills. Create an array of employee skills and flatten them. Example: [{name: "Alice", skills: ["Excel", "Management"]}, ...].

// const employees = [
//   { id: 1, name: "Alice", departmentId: 1, salary: 5000, skills: ["Excel", "Management"] },
//   { id: 2, name: "Bob", departmentId: 2, salary: 7000, skills: ["JavaScript", "React"] },
//   { id: 3, name: "Charlie", departmentId: 3, salary: 4500, skills: ["SEO", "Content Writing"] },
//   { id: 4, name: "Diana", departmentId: 1, salary: 5500, skills: ["Recruiting", "Communication"] },
//   { id: 5, name: "Edward", departmentId: 2, salary: 8000, skills: ["Python", "Django"] },
//   { id: 6, name: "Fiona", departmentId: 4, salary: 6000, skills: ["Salesforce", "Negotiation"] },
//   { id: 7, name: "George", departmentId: 3, salary: 5200, skills: ["Marketing", "Branding"] },
//   { id: 8, name: "Helen", departmentId: 4, salary: 7200, skills: ["Presentation", "Analytics"] },
//   { id: 9, name: "Ian", departmentId: 2, salary: 4800, skills: ["Java", "Spring Boot"] },
//   { id: 10, name: "Jane", departmentId: 1, salary: 5100, skills: ["HR Policies", "Conflict Resolution"] },
// ];

const allSkills = employees.flatMap(employee => employee.skills);

console.log(allSkills);


//  T-039: Find the total salary of all employees working in the "Engineering" department.
const engineeringEmployees = employees.filter(emp => emp.departmentId === departments.id);
console.log("Total salary of Engineering department:", totalSalary);
//  T-040: Check if there is any department where all employees earn more than 5000.
// Check if any department has all employees earning more than 5000
  const departmentWithHighSalaries = departments.find(dept => {
  const deptEmployees = employees.filter(emp => emp.departmentId === dept.id);
  return deptEmployees.length > 0 && deptEmployees.every(emp => emp.salary > 5000);
});

// Print the department if found
if (departmentWithHighSalaries) {
  console.log("Department where all employees earn more than 5000:", departmentWithHighSalaries.name);
} else {
  console.log("No department found where all employees earn more than 5000.");
}
//  T-041: Assume each employee has a projects array (e.g., { id: 1, name: "Alice", projects: ["Project A", "Project B"] }). Find the total number of unique projects being handled across all employees.
const employees = [
  { id: 1, name: "Alice", projects: ["Project A", "Project B"] },
  { id: 2, name: "Bob", projects: ["Project B", "Project C"] },
  { id: 3, name: "Charlie", projects: ["Project A", "Project D"] },
  { id: 4, name: "Diana", projects: ["Project C", "Project E"] },
  { id: 5, name: "Edward", projects: ["Project A", "Project F"] },
  { id: 6, name: "Fiona", projects: ["Project D", "Project F"] }
];

// Extract all projects into a single array
const allProjects = employees.flatMap(emp => emp.projects);

// Remove duplicates using a Set
const uniqueProjects = new Set(allProjects);

// Get the total number of unique projects
const totalUniqueProjects = uniqueProjects.size;

console.log("Total number of unique projects:", totalUniqueProjects);
console.log("Unique projects:", [...uniqueProjects]); // Optional: Print all unique projects

//  T-042: For each employee, find their department name and return an array of employee names with their department names.


const result = employees.map(emp => {
  const dept = departments.find(d => d.id === emp.departmentId);
  return {
    employee: emp.name,
    department: dept ? dept.name : "Unknown"
  };
});

console.log(result);


//  T-043: Get a list of names of employees earning more than 6000.

//  T-044: Write a for-of loop to print the names of all employees from the employees array.

//  T-045: Using a for-of loop, print the names of employees earning more than 5000.

//  T-046: Modify the for-of loop to destructure each employee object and log their name and salary.

//  T-047: Write a for-of loop to match employees with their departments and print the results.

//  T-048: Use Array.prototype.entries() with a for-of loop to print the index and name of each employee.