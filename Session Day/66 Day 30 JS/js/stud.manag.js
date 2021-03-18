student.printSelectClass(classList, function (studList) {
  selectStudentClass.innerHTML = studList;
});

function removeStudentFromList(_this, event, indexId) {
  student.removeStudent(indexId, function () {
    student.printStudentList(function (list) {
      tbodyStudentList.innerHTML = list;
    });
  });
}

saveStudent.addEventListener("click", function (event) {
  event.preventDefault();
  var newStudent = {
    student_class_id: Number(selectStudentClass.value),
    student_name: studentName.value,
  };
  student.saveNewStudent(newStudent, function () {
    selectStudentClass.value = 1;
    studentName.value = "";
    student.printStudentList(function (list) {
      tbodyStudentList.innerHTML = list;
    });
  });
});
