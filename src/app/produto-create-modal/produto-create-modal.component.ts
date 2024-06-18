import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ProdutoService } from '../produto.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private produtoService: ProdutoService,
    private snackBar: MatSnackBar
  ) {
    this.createForm = this.fb.group({
      nome: ['', Validators.required],
      tipo: ['', Validators.required],
      descricao: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.createForm.valid) {
      this.produtoService.addProduto(this.createForm.value).subscribe(
        () => {
          this.snackBar.open('Produto adicionado com sucesso!', '', { duration: 2000 });
          this.dialogRef.close();
        },
        (error: any) => {
          console.error(error);
          this.snackBar.open('Erro ao tentar adicionar produto!', '', { duration: 2000 });
          this.dialogRef.close();
        }
      );
    }
  }

  onClose() {
    this.dialogRef.close();
  }
}
