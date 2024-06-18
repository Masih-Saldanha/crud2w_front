import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProdutoService } from '../produto.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private produtoService: ProdutoService,
    private snackBar: MatSnackBar
  ) {
    this.updateForm = this.fb.group({
      nome: [data.nome, Validators.required],
      tipo: [data.tipo, Validators.required],
      descricao: [data.descricao, Validators.required],
    });
  }

  onSubmit() {
    if (this.updateForm.valid) {
      this.produtoService.addProduto(this.updateForm.value).subscribe(
        () => {
          this.snackBar.open('Produto atualizado com sucesso!', '', { duration: 2000 });
          this.dialogRef.close();
        },
        (error: any) => {
          console.error(error);
          this.snackBar.open('Erro ao tentar atualizar produto!', '', { duration: 2000 });
          this.dialogRef.close();
        }
      );
    }
  }

  onClose() {
    this.dialogRef.close();
  }
}
