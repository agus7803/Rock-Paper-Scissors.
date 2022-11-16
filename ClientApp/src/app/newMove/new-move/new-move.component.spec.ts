import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMoveComponent } from './new-move.component';

describe('NewMoveComponent', () => {
  let component: NewMoveComponent;
  let fixture: ComponentFixture<NewMoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
