import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DialogService } from '../services/dialog.service';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss']
})
export class DialogContentComponent implements OnInit {

  @Output() testEvent = new EventEmitter();

  constructor(
    private dialog: DialogService
  ) { }

  ngOnInit(): void {
  }

  dispatchEvent() {
    this.testEvent.emit('Event was dispatched!');
  }

  close() {
    this.dialog.close();
  }

}
