import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiensoyComponent } from './quiensoy.component';

describe('QuiensoyComponent', () => {
  let component: QuiensoyComponent;
  let fixture: ComponentFixture<QuiensoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuiensoyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuiensoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
