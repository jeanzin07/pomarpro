import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MovimentoService } from '../../services/movimento.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-cad-movimento',
  templateUrl: './cad-movimento.component.html',
  styleUrl: './cad-movimento.component.scss'
})
export class CadMovimentoComponent {
  constructor(
    private movimentoService:MovimentoService,
    private snackbar:MatSnackBar
  ){
//this.buscaMovimento()
  }



// inicializa o formulário
  formulario:FormGroup = new FormGroup({
    id:new FormControl(null),
    tipo:new FormControl('',Validators.required),
    produto:new FormControl('',Validators.required),
    quantidade:new FormControl('',Validators.required),
   
    
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
this.movimentoService.addMovimento(info).subscribe({
  next:(resposta)=>{
    console.log(resposta)
    this.snackbar.open(
    "Movimento adicionado com sucesso",
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
    "Movimento não adicionado",
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

  buscaMovimento(){
    this.movimentoService.getMovimento().subscribe({
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


