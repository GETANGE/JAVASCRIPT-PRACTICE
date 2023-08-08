function Student() {
    let enrolled = false;
    let adminNumber = null;
    let studyingComputerScience = false;
    let currentYear = null;

    this.enroll = function(schoolName) {
        if (!enrolled) {
            console.log(`Enrolled at ${schoolName}`);
            enrolled = true;
        } else {
            console.log(`Already enrolled at ${schoolName}`);
        }
    };

    this.setAdminNumber = function(number) {
        if (enrolled) {
            adminNumber = number;
            console.log("Admission number set.");
        } else {
            console.log("Please enroll first!");
        }
    };

    this.setCourse = function(course) {
        if (enrolled) {
            if (course === "Computer Science") {
                studyingComputerScience = true;
                console.log("Course set to Computer Science");
            } else {
                console.log("The student does not study Computer Science");
            }
        } else {
            console.log("Please enroll first!");
        }
    };

    this.setCurrentYear = function(year) {
        if (enrolled) {
            currentYear = year;
            console.log(`The current year is ${year}`);
        } else {
            console.log("Please enroll first!");
        }
    };
}

const student = new Student();
student.enroll("Dedan Kimathi University of Technology");
student.setAdminNumber("C025-01-0983/2021");
student.setCourse("Computer Science");
student.setCurrentYear("2023");

console.log(student);
