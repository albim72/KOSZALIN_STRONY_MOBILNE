import { async,ComponentFixture,TestBed } from '@angular/core/testing';
import { ActivitiesListComponent } from './activities-list.component';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

describe('ActivitiesListComponent', () => {
  let component: ActivitiesListComponent;
  let fixture: ComponentFixture<ActivitiesListComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ActivitiesListComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
