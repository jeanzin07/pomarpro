import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProdutoService } from '../../services/produto.service';


@Component({
  selector: 'app-cad-produto',
  templateUrl: './cad-produto.component.html',
  styleUrl: './cad-produto.component.scss'
})
export class CadProdutoComponent {
  constructor(
    private produtoService: ProdutoService,
    private snackbar: MatSnackBar
  ) {
    this.buscaProduto()
  }



  // inicializa o formulário
  formulario: FormGroup = new FormGroup({
    id: new FormControl(null),
    descricao: new FormControl('', Validators.required),
    unid_medida: new FormControl('', Validators.required),
    valor: new FormControl('', Validators.required),
    tipo: new FormControl('', Validators.required),

  })


  //Métodos de Controles do formulário
  onIncluir() {
    this.formulario.reset();
    this.formulario.enable();
  }

  onSalvar() {
    //Guarde as informações em uma variavel pra melhorar o acesso
    let info = this.formulario.value;
    //Verifica se esta inserindo ou alterando com base no valor do ID (se for null,esta inserindo, senão esta alterando)
    if (info.id == null) {
      //Irá inserir no banco de dados um produto
      this.produtoService.addProduto(info).subscribe({
        next: (resposta) => {
          console.log(resposta)
          this.snackbar.open(
            "Produto adicionado com sucesso",
            "OK",
            {
              verticalPosition: 'top',
              horizontalPosition: 'end',
              duration: 3000
            }
          )
        },
        error: (erro) => {
          console.log(erro)
          this.snackbar.open(
            "Oh não!",
            "Produto não adiconado",
            {
              verticalPosition: 'top',
              horizontalPosition: 'end',
              duration: 3000
            }
          )
          this.onCancelar();
        }

      })


    } else {
      //Irá alterar o usuario no bancos de dados
    }

  }
  onCancelar() {
    this.formulario.reset();
    this.formulario.disable();
  }

  //Função para buscar as informações e usuários

  relatorio: any[] = [];

  buscaProduto() {
    this.produtoService.getProduto().subscribe({
      next: (resposta) => {
        console.log(resposta);
        this.relatorio = resposta.body;
      },
      error: (erro) => {
        console.log(erro);
      }
    })
  }
}


