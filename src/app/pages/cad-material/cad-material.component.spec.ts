import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadMaterialComponent } from './cad-material.component';

describe('CadMaterialComponent', () => {
  let component: CadMaterialComponent;
  let fixture: ComponentFixture<CadMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadMaterialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
