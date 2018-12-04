class Employee {

    firstName: string;
    lastName: string;

    constructor(fName: string, lName: string) {
        this.firstName = fName;
        this.lastName = lName;
    }

    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}

class FullTimeEmployee extends Employee {

    designation: string;
    AnnualSalary: number;

    constructor(fName: string, lName: string, annualSalary:number, desig:string) {
        super(fName, lName);
        this.designation = desig;
        this.AnnualSalary = annualSalary;
    }

    getFullTimeInfo() {
        console.log("FullName: " + this.firstName + " " + this.lastName + ", " + "Designation: " + this.designation + ", " + "Annual Salary: $" + this.AnnualSalary);
    }
}

class PartTimeEmployee extends Employee {

    designation: string;
    HourlyRate: number;

    constructor(fName: string, lName: string, hourlyRate:number, desig:string) {
        super(fName, lName);
        this.designation = desig;
        this.HourlyRate = hourlyRate;
    }

    getPartTimeInfo() {
        console.log("FullName: " + this.firstName + " " + this.lastName + ", " + "Designation: " + this.designation + ", " + "Hourly Rate: $" + this.HourlyRate);
    }
}

var femp = new FullTimeEmployee("Akash", "Reddy", 20000, "FullTime");
var pemp = new PartTimeEmployee("Robert", "Downey", 10, "Contractor")

femp.getFullTimeInfo();
pemp.getPartTimeInfo();