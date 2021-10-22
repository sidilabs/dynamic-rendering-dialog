import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DialogService } from '../services/dialog.service';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss']
})
export class DialogContentComponent implements OnInit {

  @Output() emitirEvento = new EventEmitter();

  constructor(
    private dialog: DialogService
  ) { }

  ngOnInit(): void {
  }

  test() {
    this.emitirEvento.emit('test');
    
  }

  close() {
    this.dialog.close();
  }

}
