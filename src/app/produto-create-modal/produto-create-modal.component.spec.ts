import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoCreateModalComponent } from './produto-create-modal.component';

describe('ProdutoCreateModalComponent', () => {
  let component: ProdutoCreateModalComponent;
  let fixture: ComponentFixture<ProdutoCreateModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutoCreateModalComponent]
    });
    fixture = TestBed.createComponent(ProdutoCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
