import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Users } from '../models/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  constructor(private userService : UserService, private formBuilder : FormBuilder, private toaster:ToastrService) {}

  userForm  = new FormGroup({
    id : new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
  });

  onInit(){

    this.createForm();
  }
  userSave(){
    console.log(this.userForm.value);
    let user = new Users();
    user= this.formVal;
    this.userService.userSave(user).subscribe((userResponse: any)=>{

      if(userResponse){
        console.log(userResponse);
        this.toaster.success(userResponse.responseMessage,"Saved");
      }else{
        this.toaster.error(userResponse.responseMessage,"failed to save");
      }
    },(err:any)=>{
      this.toaster.error(err.error,"ERROR")
    })

  }

  createForm(){
    console.log(this.userForm);
    this.userForm=this.formBuilder.group({
      id: [0,[]],
      firstName:['',[Validators.required]],
      lastName:['',[]],
      password:['',[Validators.minLength(6)]],
      email:['',[Validators.email]]

    })
  }

  get f(){
    return this.userForm.controls;
  }
  get formVal() {
    return this.userForm.value;
  }
}
