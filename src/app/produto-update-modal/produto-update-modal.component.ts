import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-update-modal',
  templateUrl: './produto-update-modal.component.html',
})
export class ProdutoUpdateModalComponent {
  updateForm: FormGroup;
  tipos = ['ELETRONICO', 'MOVEL'];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ProdutoUpdateModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private produtoService: ProdutoService
  ) {
    this.updateForm = this.fb.group({
      nome: [data.nome, Validators.required],
      tipo: [data.tipo, Validators.required],
      descricao: [data.descricao, Validators.required],
    });
  }

  onSubmit() {
    if (this.updateForm.valid) {
      this.produtoService.updateProduto(this.data.id, this.updateForm.value).subscribe(() => {
        this.dialogRef.close();
      });
    }
  }

  onClose() {
    this.dialogRef.close();
  }
}
