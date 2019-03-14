import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Students } from '../../model/students.model';
import { CREATE_USER, GET_USERS, DELETE_USER } from '../../endpoints/endpoints';

@Injectable()
export class StudentsServiceProvider {

  constructor(public http: HttpClient) {
  }

  createAccountStudent( account:Students ) {
    let URL = 'http://10.11.1.67:3000/students/create';
    return this.http.post(URL,account);
  }

  getStudents() {
    return this.http.get(GET_USERS);
  }

  deleteStudent( id:number ) {
    return this.http.delete(`${DELETE_USER}${id}`);
  }

}
