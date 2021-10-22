import { Component } from '@angular/core';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { DialogService } from './services/dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ReusableDialog';

  constructor(
    private dialog: DialogService
  ) {}

  open() {
    const componentRef = this.dialog.open(DialogContentComponent, 
      {
        width: '500px'
      }
    );

    componentRef.instance.emitirEvento.subscribe((res: any) => {
      console.log(res)
    });

    componentRef.onDestroy(()=> {
      console.log('destruiu')
    })
  }
}
