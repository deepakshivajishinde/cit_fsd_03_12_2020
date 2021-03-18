var classList = [
  {
    id: 1,
    className: "8th",
  },
  {
    id: 2,
    className: "9th",
  },
  {
    id: 3,
    className: "10th",
  },
  {
    id: 4,
    className: "11th",
  },
];
var student = new Student(classList);
var selectStudentClass = student.getElement("#studentClass");
var studentName = student.getElement("#studentName");
var saveStudent = student.getElement("#saveStudent");
var tbodyStudentList = student.getElement("#tbodyStudentList");
var input = student.getElement("input");
console.log(input);
