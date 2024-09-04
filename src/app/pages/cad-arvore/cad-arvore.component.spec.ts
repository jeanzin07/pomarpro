import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadArvoreComponent } from './cad-arvore.component';

describe('CadArvoreComponent', () => {
  let component: CadArvoreComponent;
  let fixture: ComponentFixture<CadArvoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadArvoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadArvoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
