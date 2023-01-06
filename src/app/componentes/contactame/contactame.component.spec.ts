import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactameComponent } from './contactame.component';

describe('ContactameComponent', () => {
  let component: ContactameComponent;
  let fixture: ComponentFixture<ContactameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
