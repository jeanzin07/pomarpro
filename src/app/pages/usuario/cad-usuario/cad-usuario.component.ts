import { Component } from '@angular/core';
import { FormGroup, Form, FormControl, Validators, CheckboxRequiredValidator } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cad-usuario',
  templateUrl: './cad-usuario.component.html',
  styleUrl: './cad-usuario.component.scss'
})
export class CadUsuarioComponent {

  constructor(
    private usuarioService:UsuarioService,
    private snackbar:MatSnackBar
  ){
this.buscaUsuarios()
  }

// inicializa o formulário
  formulario:FormGroup = new FormGroup({
    id:new FormControl(null),
    nome:new FormControl('',Validators.required),
    sobrenome:new FormControl('',Validators.required),
    endereco:new FormControl('',Validators.required),
    telefone:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    login:new FormControl('',Validators.required),
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
this.usuarioService.addUsuario(info).subscribe({
  next:(resposta)=>{
    console.log(resposta)
    this.snackbar.open(
      "Usuario adicionado com sucesso!",
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
      "OH não!",
      "Usuario não adicionado!",
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

  buscaUsuarios(){
    this.usuarioService.getUsuarios().subscribe({
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
