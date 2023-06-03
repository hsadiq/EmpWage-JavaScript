class EmployeePayrollData{
    //property

    id;
    name;
    salary;

    constructor(id, name, salary){

        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    get id(){
        return this.id;
    }

    get name(){
        return this.name;
    }

    get salary(){
        return this.salary;
    }

    set name(name){

        this._name = name;
    }

    set id(id){
        this._id = id;
    }

    set salary(salary){
        this._salary = salary;
    }

    toString(){
        return "ID = " + this.id + " Name = " +this.name + " Salary: " + this.salary;
    }
}

let employeePayrollData  = new EmployeePayrollData(1, "Teressa", 30000);
console.log(employeePayrollData.toString());