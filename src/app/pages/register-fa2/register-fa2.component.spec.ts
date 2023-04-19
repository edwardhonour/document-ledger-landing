import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFa2Component } from './register-fa2.component';

describe('RegisterFa2Component', () => {
  let component: RegisterFa2Component;
  let fixture: ComponentFixture<RegisterFa2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RegisterFa2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFa2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
