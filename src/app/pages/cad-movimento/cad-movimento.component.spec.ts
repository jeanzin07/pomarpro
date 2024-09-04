import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadMovimentoComponent } from './cad-movimento.component';

describe('CadMovimentoComponent', () => {
  let component: CadMovimentoComponent;
  let fixture: ComponentFixture<CadMovimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadMovimentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadMovimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
