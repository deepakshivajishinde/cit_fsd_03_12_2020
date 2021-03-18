function Student(classList) {
  this.studentList = [];
  this.classList = classList;
  this.printSelectClass = function (list, callback) {
    var studList = list
      .map(function (studClass) {
        return `<option value="${studClass.id}">${studClass.className}</option>`;
      })
      .join("");
    callback(studList);
  };
  this.saveNewStudent = function (newStudent, callback) {
    this.studentList.push(newStudent);
    callback();
  };
  this.printStudentList = function (callback) {
    var _tr = this.studentList
      .map(function (student, index) {
        return `<tr>
                  <td>${index + 1}</td>
                  <td>${student.student_name}</td>
                  <td>${getClassName(student.student_class_id)}</td>
                  <td>
                    <button onclick="removeStudentFromList(this,event,${index})">DELETE</button></td>
                </tr>`;
      })
      .join("");
    callback(_tr);
  };
  function getClassName(id) {
    var classNameObj = this.classList.find(function (element) {
      if (element.id == id) return element;
    });
    return classNameObj.className;
  }

  this.removeStudent = function (id, callback) {
    this.studentList.splice(id, 1);
    callback();
  };
}
extend(Student, Common);
