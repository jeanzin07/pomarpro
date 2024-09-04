import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadColheitaComponent } from './cad-colheita.component';

describe('CadColheitaComponent', () => {
  let component: CadColheitaComponent;
  let fixture: ComponentFixture<CadColheitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadColheitaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadColheitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
