/** Problem -01 ( Divide the Asset ) */
var area = 800;

var share = area / 2;

console.log(share);


/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;

if (money >= 25000) {
    console.log("Laptop");
} else if (money >= 10000) {
    console.log("Cycle");
} else {
    console.log("Chocolate");
}


/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;

for (var i = 1; i <= lastDay; i++) {
    if (i % 3 == 0) {
        console.log(`${i} - medicine`);
    } else {
        console.log(`${i} - rest`);
    }
}


/** Problem 04 - (Delete / Store) */
var fileName= "#exp.mp4";

if (
    fileName.startsWith("#") ||
    fileName.endsWith(".pdf") ||
    fileName.endsWith(".docx")
) {
    console.log("Store");
} else {
    console.log("Delete")
}


/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhankar" , roll: 1014 ,department: "cse" };

var studentEmail = `${student.name}${student.roll}.${student.department}@ph.ac.bd`;

console.log(studentEmail)