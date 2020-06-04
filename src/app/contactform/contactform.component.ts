import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';





@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {
  ngOnInit(): void {
    
    contactform = new FormGroup({
      Email: new FormControl('',[
        Validators.required,
      ])
    })
  
  }
}

