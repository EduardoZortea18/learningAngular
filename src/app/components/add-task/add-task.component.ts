import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  text?: string;
  day?: string;
  reminder: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
  }
}
