import { ComponentFixture, TestBed } from '@angular/core/testing';

import {CadPomarComponent } from './cad-pomar.component';

describe('CadPomarComponent', () => {
  let component: CadPomarComponent;
  let fixture: ComponentFixture<CadPomarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadPomarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadPomarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
