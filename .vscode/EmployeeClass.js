class EmployeePayrollData {
    constructor(...params) {
        this._id = params[0];
        this._name = params[1];
        this._salary = params[2];
        this._gender = params[3];
        this._date = params[4];
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get salary() {
        return this._salary;
    }

    set name(name) {
        let regexName = /^[A-Z]{1}[a-z]{2}$/;
        if (regexName.test(name))
            this._name = name;
        else
            throw new Error('Invalid Name');
    }

    set id(id) {
        let regexId = /^[1-9]{1}[0-9]*$/;
        if (regexId.test(id))
            this._id = id;
        else
            throw new Error('Invalid ID');
    }

    set salary(salary) {
        if (salary > 0)
            this._salary = salary;
        else
            throw new Error('Invalid Salary');
    }

    set gender(gender) {
        let regexGender = /^[MF]$/;
        if (regexGender.test(gender))
            this._gender = gender;
        else
            throw new Error('Invalid Gender');
    }

    set date(date) {
        let currentDate = new Date();
        if (date <= currentDate)
            this._date = date;
        else
            throw new Error('Invalid Start Date');
    }

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const startDate = this._date === undefined ? "undefined" :
            this._date.toLocaleDateString("en-US", options);
        return "ID = " + this._id + ", Name = " + this._name + ", Salary: " + this._salary + ", Gender: " + this._gender + ", StartDate: " + startDate;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Teressa", 30000, "F", new Date());
console.log(employeePayrollData.toString());

try {
    let newEmp = new EmployeePayrollData(4, "John", 15000, "M", new Date());
    console.log(newEmp.toString());
} catch (e) {
    console.error(e);
}

try {
    let invalidGenderEmp = new EmployeePayrollData(2, "Alice", 20000, "F", new Date());
    console.log(invalidGenderEmp.toString());
} catch (e) {
    console.error(e);
}

try {
    let futureStartDateEmp = new EmployeePayrollData(3, "Bob", 25000, "M", new Date('2024-01-01'));
    console.log(futureStartDateEmp.toString());
} catch (e) {
    console.error(e);
}
