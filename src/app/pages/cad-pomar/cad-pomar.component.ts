import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PomarService } from '../../services/pomar.service';


@Component({
  selector: 'app-cad-pomar',
  templateUrl: './cad-pomar.component.html',
  styleUrl: './cad-pomar.component.scss'
})
export class CadPomarComponent {
  constructor(
    private pomarService:PomarService,
    private snackbar:MatSnackBar
  ){
this.buscaPomar()
  }



// inicializa o formulário
  formulario:FormGroup = new FormGroup({
    id:new FormControl(null),
    apelido:new FormControl('',Validators.required),
    num_linha:new FormControl('',Validators.required),
    num_coluna:new FormControl('',Validators.required),
    
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
  console.log(info)
//Irá inserir no banco de dados um usuario
this.pomarService.addPomar(info).subscribe({
  next:(resposta)=>{
    console.log(resposta)
    this.snackbar.open(
    "Pomar adicionado com sucesso",
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
    "Pomar não adicionado",
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

  buscaPomar(){
    this.pomarService.getPomar().subscribe({
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


