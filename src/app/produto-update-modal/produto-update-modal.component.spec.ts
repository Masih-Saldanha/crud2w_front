import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoUpdateModalComponent } from './produto-update-modal.component';

describe('ProdutoUpdateModalComponent', () => {
  let component: ProdutoUpdateModalComponent;
  let fixture: ComponentFixture<ProdutoUpdateModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutoUpdateModalComponent]
    });
    fixture = TestBed.createComponent(ProdutoUpdateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
