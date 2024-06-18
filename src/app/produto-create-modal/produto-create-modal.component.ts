import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-create-modal',
  templateUrl: './produto-create-modal.component.html',
})
export class ProdutoCreateModalComponent {
  createForm: FormGroup;
  tipos = ['ELETRONICO', 'MOVEL'];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ProdutoCreateModalComponent>,
    private produtoService: ProdutoService
  ) {
    this.createForm = this.fb.group({
      nome: ['', Validators.required],
      tipo: ['', Validators.required],
      descricao: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.createForm.valid) {
      this.produtoService.addProduto(this.createForm.value).subscribe(() => {
        this.dialogRef.close();
      });
    }
  }

  onClose() {
    this.dialogRef.close();
  }
}
