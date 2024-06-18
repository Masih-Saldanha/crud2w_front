import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Produto {
  id: number;
  nome: string;
  tipo: string;
  descricao: string;
}

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  produtos: Produto[] = [];
  produto: Produto = { id: 0, nome: '', tipo: '', descricao: '' };
  updateProdutoData: Produto = { id: 0, nome: '', tipo: '', descricao: '' };
  updateMode: boolean = false;

  displayedColumns: string[] = ['id', 'nome', 'tipo', 'descricao', 'dataInclusao', 'acoes'];

  constructor(private produtoService: ProdutoService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos(): void {
    this.produtoService.getProdutos().subscribe(
      (data: Produto[]) => {
        this.produtos = data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  onSubmit(): void {
    this.produtoService.addProduto(this.produto).subscribe(
      () => {
        this.getProdutos();
        this.snackBar.open('Produto adicionado com sucesso!', '', { duration: 2000 });
        this.produto = { id: 0, nome: '', tipo: '', descricao: '' };
      },
      (error: any) => {
        console.error(error);
        this.snackBar.open('Erro ao tentar adicionar produto!', '', { duration: 2000 });
        this.produto = { id: 0, nome: '', tipo: '', descricao: '' };
      }
    );
  }

  deleteProduto(id: number): void {
    this.produtoService.deleteProduto(id).subscribe(
      () => {
        this.getProdutos();
        this.snackBar.open('Produto deletado com sucesso!', '', { duration: 2000 });
      },
      (error: any) => {
        console.error(error);
        this.snackBar.open('Erro ao tentar deletar produto!', '', { duration: 2000 });
      }
    );
  }

  setUpdateMode(produto: Produto): void {
    this.updateMode = !this.updateMode;
    this.updateProdutoData = { ...produto };
  }

  onUpdateSubmit(): void {
    this.produtoService.updateProduto(this.updateProdutoData.id, this.updateProdutoData).subscribe(
      () => {
        this.getProdutos();
        this.snackBar.open('Produto atualizado com sucesso!', '', { duration: 2000 });
        this.updateMode = false;
        this.updateProdutoData = { id: 0, nome: '', tipo: '', descricao: '' };
      },
      (error: any) => {
        console.error(error);
        this.snackBar.open('Erro ao tentar atualizar produto!', '', { duration: 2000 });
        this.updateMode = false;
        this.updateProdutoData = { id: 0, nome: '', tipo: '', descricao: '' };
      }
    );
  }
}
