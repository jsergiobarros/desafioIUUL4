import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionsPageComponent } from './conversions-page.component';

describe('ConversionsPageComponent', () => {
  let component: ConversionsPageComponent;
  let fixture: ComponentFixture<ConversionsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConversionsPageComponent]
    });
    fixture = TestBed.createComponent(ConversionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
