import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaEditarComponent } from './persona-editar.component';

describe('PersonaEditarComponent', () => {
  let component: PersonaEditarComponent;
  let fixture: ComponentFixture<PersonaEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
