function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Common() {}
Common.prototype.getElement = function (elementName) {
  var pre = elementName.substr(0, 1);
  switch (pre) {
    case "#":
      return document.getElementById(elementName.substr(1));
      break;

    case ".":
      return document.getElementsByClassName(elementName.substr(1));
      break;

    default:
      return document.getElementsByTagName(elementName);
      break;
  }
};
