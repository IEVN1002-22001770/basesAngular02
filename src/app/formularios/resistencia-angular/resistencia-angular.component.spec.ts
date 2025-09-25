import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistenciaAngularComponent } from './resistencia-angular.component';

describe('ResistenciaAngularComponent', () => {
  let component: ResistenciaAngularComponent;
  let fixture: ComponentFixture<ResistenciaAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResistenciaAngularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResistenciaAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
