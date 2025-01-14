export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = name;
    }

    if (typeof (length) !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      this._length = length;
    }

    if (
      !Array.isArray(students)
      && students.every(typeof students !== 'string')
    ) {
      throw new TypeError('Students must be an array of string');
    } else {
      this._students = students;
    }
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof (name) !== 'string') {
      throw new TypeError('Name must be a string');
    }

    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof (length) !== 'number') {
      throw new TypeError('Length must be a number');
    }

    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (
      !Array.isArray(students)
      && !students.every(typeof students === 'string')
    ) {
      throw new TypeError('Students must be an array of string');
    }

    this._students = students;
  }
}
