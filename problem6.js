/** Problem 06 :  (Current Salary )  */
var experience = 40;
var startingSalary = 30000;
var runningSalary = startingSalary;

for (var i = 0; i < experience; i++) {
    runningSalary = runningSalary + ((runningSalary / 100) * 5);
}

console.log(runningSalary.toFixed(2))