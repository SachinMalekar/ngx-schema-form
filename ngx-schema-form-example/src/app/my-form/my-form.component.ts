import { Component, OnInit } from '@angular/core';
import schema_json from './schema-form.json'

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.css'
})
export class MyFormComponent implements OnInit{

  schemaObject = schema_json
  currentModel : object = {};
  constructor() { }
  ngOnInit() {
    
  }
}
