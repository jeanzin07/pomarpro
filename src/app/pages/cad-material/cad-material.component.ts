import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaterialService } from '../../services/material.service';


@Component({
  selector: 'app-cad-material',
  templateUrl: './cad-material.component.html',
  styleUrl: './cad-material.component.scss'
})
export class CadMaterialComponent {
  constructor(
    private materialService:MaterialService,
    private snackbar:MatSnackBar
  ){
this.buscaMaterial()
  }



// inicializa o formulário
  formulario:FormGroup = new FormGroup({
    id:new FormControl(null),
    nome:new FormControl('',Validators.required),
    valor:new FormControl('',Validators.required),
    tipo:new FormControl('',Validators.required),
    fornecedor:new FormControl('',Validators.required),
    
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
this.materialService.addMaterial(info).subscribe({
  next:(resposta)=>{
    console.log(resposta)
    this.snackbar.open(
    "Material adicionado com sucesso",
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
    "Material não adicionado",
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

  buscaMaterial(){
    this.materialService.getMaterial().subscribe({
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


