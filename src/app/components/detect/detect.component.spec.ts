import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { DetectComponent } from './detect.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

describe('DetectComponent', () => {
  let component: DetectComponent;
  let fixture: ComponentFixture<DetectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetectComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [HttpClientModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
