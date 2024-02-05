import { Component, OnInit } from '@angular/core';
import schema_json from './schema-form.json'
import { ISchema } from 'ngx-schema-form';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.css'
})
export class MyFormComponent implements OnInit{
model: any;
layout: any;
schema: ISchema = { properties: {}};
  currentModel : object = {};
  constructor() { }
  ngOnInit() {
    this.setupSchema();
  }
  async setupSchema() {
    this.schema = schema_json as ISchema;
    console.log("this.schema", this.schema);
    this.model = {};
    
  }
}
