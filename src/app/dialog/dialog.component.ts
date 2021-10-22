import { AfterViewInit, Component, ComponentFactory, ComponentFactoryResolver, HostListener, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';
import { DialogService } from '../services/dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit, AfterViewInit {
  @ViewChild('modalContent', { read: ViewContainerRef })
  modalContent!: ViewContainerRef;

  @HostListener('click', ['$event.target']) public onClick(targetElement: HTMLElement) {
    if (targetElement.classList.value === "dialog dialog__show") {
      this.modalContent.clear();
      this.component = null;
    }
  }

  component: any;
  options: any = {};

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private dialog: DialogService
  ) {
    this.dialog.dialogContent.subscribe(data => {
      if (data) {
      this.component = data.content;
      this.options = data.options;
        const componentFactory: ComponentFactory<any> = this.componentFactoryResolver.resolveComponentFactory(this.component);
        this.modalContent.clear();
        const componentRef = this.modalContent.createComponent(componentFactory);
        this.dialog.setCurrentRef(componentRef);      
      }
    });
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
   
  }

}
