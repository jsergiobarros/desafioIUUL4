import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencieConverterComponent } from './currencie-converter.component';

describe('CurrencieConverterComponent', () => {
  let component: CurrencieConverterComponent;
  let fixture: ComponentFixture<CurrencieConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencieConverterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencieConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
