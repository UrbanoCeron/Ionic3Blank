import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { StudentsServiceProvider } from '../../providers/students-service/students-service';
import { Students } from '../../model/students.model';
import { EventsManagerProvider } from '../../providers/events-manager/events-manager';

@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {

  createAccountForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fb: FormBuilder,
    private student_provider: StudentsServiceProvider,
    private loading: LoadingController,
    private events_manager: EventsManagerProvider) {
      this.createAccountForm = this.fb.group({
        name:['',Validators.required],
        app: ['',Validators.required],
        apm: [''],
        email: ['',[Validators.required,Validators.email]],
        matricula: ['',[Validators.required]]
      })
  }

  ionViewDidLoad() {
  }

  createAccount() {
    let presentLoading = this.loading.create({
      content: 'Espere por favor'
    });
    presentLoading.present();
    let accountInfo: Students = this.createAccountForm.getRawValue();
    this.student_provider
        .createAccountStudent( accountInfo )
        .subscribe( () => {
          this.events_manager.setMsgToast( 'Cuenta creada con exito' );
          this.navCtrl.popToRoot();
        }, error => {
          presentLoading.dismiss()
          console.log( 'Error',error );
        },() => {
          console.log('Succes');
          presentLoading.dismiss()
        })

  }

}
