class EmployeePayrollData{
    //property

    id;
    name;
    salary;
    date;

    constructor(...params){

        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.date = params[4];
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
        const options = {Year: 'numeric', month: 'long', day:'numeric'};
        const empDate = this.date === undefined ? "undefined":
                        this.date.toLocaleDateString("en-US", options);
        return "ID = " + this.id + ", Name = " +this.name + ", Salary: " + this.salary + ", Gender: " + this.gender + ", StartDate: " +empDate;
    }
}

let employeePayrollData  = new EmployeePayrollData(1, "Teressa", 30000, "F", new Date());
console.log(employeePayrollData.toString());