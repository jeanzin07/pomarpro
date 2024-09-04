import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaterialService } from '../../services/material.service';
import { ColheitaService } from '../../services/colheita.service';
import { RepositionScrollStrategy } from '@angular/cdk/overlay';


@Component({
  selector: 'app-cad-colheita',
  templateUrl: './cad-colheita.component.html',
  styleUrl: './cad-colheita.component.scss'
})
export class CadColheitaComponent {
  constructor(
    private colheitaService:ColheitaService,
    private snackbar: MatSnackBar
  ){
this.buscaColheita()
  }



// inicializa o formulário
  formulario:FormGroup = new FormGroup({
    id:new FormControl(null),
    dt_colheita:new FormControl('',Validators.required),
    quantidade:new FormControl('',Validators.required),
    arvore:new FormControl('',Validators.required),
  
    
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
this.colheitaService.addColheita(info).subscribe({
  next: (resposta)=> {
    console.log(resposta)
    this.snackbar.open(
      "Colheita adicionado com sucesso",
      "OK",
      {
        verticalPosition: 'top',
        horizontalPosition: 'end',
        duration: 3000
      }
    )
  },
  error: (erro) =>{
    console.log(erro)
    this.snackbar.open(
      "Oh não!",
      "Colheita não adicionada",
      {
        verticalPosition:'top',
        horizontalPosition:'end',
        duration: 3000
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

  buscaColheita(){
    this.colheitaService.getColheita().subscribe({
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


