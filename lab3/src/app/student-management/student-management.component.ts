import { Component, OnInit } from '@angular/core';
import { Student } from '../shared/models/student-model';

@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.css']
})
export class StudentManagementComponent implements OnInit {

  studentList: Student[];

  constructor() {
    this.studentList = [
      {name: "name1", surname: "surname1", id: "1234567890"},
      {name: "name2", surname: "surname2", id: "1234567890"},
      {name: "name3", surname: "surname3", id: "1234567890"}
    ]
   }

  ngOnInit(): void {
  }

  addStudent(name, surname, id){
    console.log(name)
    let student: Student = {
      name: name,
      surname: surname,
      id: id
    }

    this.studentList.push(student);
  }
}
