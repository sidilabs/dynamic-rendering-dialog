import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSecondContentComponent } from './dialog-second-content.component';

describe('DialogSecondContentComponent', () => {
  let component: DialogSecondContentComponent;
  let fixture: ComponentFixture<DialogSecondContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSecondContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSecondContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
