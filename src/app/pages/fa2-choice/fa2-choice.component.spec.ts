import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fa2ChoiceComponent } from './fa2-choice.component';

describe('Fa2ChoiceComponent', () => {
  let component: Fa2ChoiceComponent;
  let fixture: ComponentFixture<Fa2ChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Fa2ChoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fa2ChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
