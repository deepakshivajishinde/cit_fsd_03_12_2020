var studentListClassOne = [
    {
      name: "Suraj",
      rollNumber: 22,
    },
    {
      name: "Ramesh",
      rollNumber: 23,
    },
    {
      name: "Rohan",
      rollNumber: 24,
    },
    {
      name: "Rohit",
      rollNumber: 30,
    },
  ];
  var studentListClassTwo = [
    {
      name: "Rupesh",
      rollNumber: 1,
    },
    {
      name: "Sahil",
      rollNumber: 2,
    },
  ];

  var idStudent = document.getElementById("id-student");
  var idStudentTwo = document.getElementById("id-student-two");

  var firstStandard = studentClass(studentListClassOne);
  var secondStandard = new StudentClass(studentListClassTwo)

  var array  = new Array();


  firstStandard.printStudent(function (li) {
    idStudent.innerHTML = li;
  });
  secondStandard.printStudent(function (li) {
    idStudentTwo.innerHTML = li;
  });