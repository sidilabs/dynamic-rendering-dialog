import { Component, ComponentFactory, ComponentRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  public dialogContentSource = new BehaviorSubject<any>(null);   
  dialogContent = this.dialogContentSource.asObservable();

  public dialogContentCloseSource = new BehaviorSubject<boolean>(false);   
  dialogContentClose = this.dialogContentCloseSource.asObservable();

  dialogReference: any;

  constructor() { }

  setCurrentRef(ref: ComponentRef<any>) {
    this.dialogReference = ref;
  }

  open(content: any, options: any): ComponentRef<any> {
    const data = {content, options};
    this.dialogContentSource.next(data);
    return this.dialogReference;
  }

  close() {
    this.dialogContentCloseSource.next(true);
  }
}
