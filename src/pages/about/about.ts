import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CustomerPage } from '../customer/customer';
import { StudentsServiceProvider } from '../../providers/students-service/students-service';
import { EventsManagerProvider } from '../../providers/events-manager/events-manager';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  data:any;
  colorLabel:string = 'secondary';
  students:any[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private student_provider: StudentsServiceProvider,
    private events_manager: EventsManagerProvider) {
    this.data = this.navParams.data;
    this.loadStudents();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  goCustomer() {
    // this.navCtrl.push( CustomerPage );
    setTimeout( () => {
      this.colorLabel = 'danger';
    },3*1000);
  }

  deleteCard( student ) {
    this.events_manager.setIsLoading( true );
    this.student_provider
        .deleteStudent( student.id )
        .subscribe( () => {
          this.events_manager.setIsLoading( false );
          this.loadStudents();
          this.events_manager.setMsgToast('Se elimino correctamente');
        },error => {
          console.log(error);
          this.events_manager.setIsLoading( false );
          this.events_manager.setMsgToast( error.error.message );
        });
        console.log(student);
  }

  loadStudents () {
    this.student_provider
        .getStudents()
        .subscribe( (response:any) => {
          this.students = response;
        },error => {
          console.log(error);
        })
  }


}
