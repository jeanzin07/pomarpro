import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ArvoreService } from '../../services/arvore.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-cad-arvore',
  templateUrl: './cad-arvore.component.html',
  styleUrl: './cad-arvore.component.scss'
})
export class CadArvoreComponent {
  constructor(
    private arvoreService:ArvoreService,
    private snackbar:MatSnackBar
  ){
this.buscaArvore()
  }



// inicializa o formulário
  formulario:FormGroup = new FormGroup({
    id:new FormControl(null),
    defensivo:new FormControl('',Validators.required),
    fertilizante:new FormControl('',Validators.required),
    última_verificacao:new FormControl('',Validators.required),
    linha:new FormControl('',Validators.required),
    coluna:new FormControl('',Validators.required),
    tipo:new FormControl('',Validators.required),
    situacao:new FormControl('',Validators.required),
    pomar:new FormControl('',Validators.required),
    
  })


  //Métodos de Controles do formulário
  onIncluir(){
this.formulario.reset();
this.formulario.enable();    
  }

  onSalvar(){
    //Guarde as informações em uma variavel pra melhorar o acesso
let info = this.formulario.value;
//Verifica se esta inserindo ou alterando com base no valor do ID (se for null,esta inserindo, senão esta alterando)
if(info.id == null){
//Irá inserir no banco de dados um usuario
this.arvoreService.addArvore(info).subscribe({
  next:(resposta)=>{
    console.log(resposta)
    this.snackbar.open(
    "Arvore adicionado com sucesso",
    "OK",
    {
      verticalPosition:'top',
      horizontalPosition:'end',
      duration:3000
    }
  )
  },
error:(erro)=>{
  console.log(erro)
  this.snackbar.open(
    "Oh não!",
    "Arvore não adicionado",
    {
      verticalPosition:'top',
      horizontalPosition:'end',
      duration:3000
    }
  )
  this.onCancelar();
}

})


}else{
  //Irá alterar o usuario no bancos de dados
}
  
  }
  onCancelar(){
this.formulario.reset();
this.formulario.disable();
  }

  //Função para buscar as informações e usuários

  relatorio:any[] = [];

  buscaArvore(){
    this.arvoreService.getArvore().subscribe({
      next:(resposta)=>{
        console.log(resposta);
        this.relatorio = resposta.body;
      },
      error:(erro)=>{
        console.log(erro);
      }
    })
  }
}


