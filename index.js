/* Your Code Here */
function createEmployeeRecord(arr) {
    let obj = {};
    obj.firstName = arr[0];
    obj.familyName = arr[1];
    obj.title = arr[2];
    obj.payPerHour = arr[3];
    obj.timeInEvents = [];
    obj.timeOutEvents = [];
    return obj;
  }
  
  function createEmployeeRecords(arr) {
    return arr.map(createEmployeeRecord);
  }
  
  function createTimeInEvent(dateString) {
    let date = dateString.split(" ")[0];
    let hour = parseInt(dateString.split(" ")[1]);
    this.timeInEvents.push({ type: "TimeIn", date: date, hour: hour });
    return this;
  }
  
  function createTimeOutEvent(dateString) {
    let date = dateString.split(" ")[0];
    let hour = parseInt(dateString.split(" ")[1]);
    this.timeOutEvents.push({ type: "TimeOut", date: date, hour: hour });
    return this;
  }
  
  function hoursWorkedOnDate(date) {
    const timeInEvent = this.timeInEvents.find(event => event.date === date);
    const timeOutEvent = this.timeOutEvents.find(event => event.date === date);
    const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
    return hoursWorked;
  }
  
  function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    const wagesEarned = hoursWorked * this.payPerHour;
    return wagesEarned;
  }
  
  function findEmployeeByFirstName(collection, firstNameString) {
    return collection.find(function (employee) {
      return employee.firstName === firstNameString;
    });
  }
  
  function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce(function (memo, employee) {
      return memo + allWagesFor.call(employee);
    }, 0);
  }
  
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

