// factory function
function studentClass(studentList) {
    return {
      studentList: studentList,
      printStudent: function (callback) {
        var li = this.studentList
          .map(function (stud) {
            return ` <li>${stud.name}, ${stud.rollNumber}</li>`;
          })
          .join("");
        callback(li);
      },
    };
  }

// var  a = studentClass([]);
// console.log(a);

  //constructor function
function StudentClass(studentList){
    this.studentList = studentList;

    this.printStudent =  function (callback) {
        var li = this.studentList
          .map(function (stud) {
            return ` <li>${stud.name}, ${stud.rollNumber}</li>`;
          })
          .join("");
        callback(li);
      };
}

// var b = new StudentClass([]);
// console.log(b);



