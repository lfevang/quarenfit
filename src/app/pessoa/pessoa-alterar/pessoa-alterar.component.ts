import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Pessoa } from '../pessoa.model';

@Component({
  selector: 'app-pessoa-alterar',
  templateUrl: './pessoa-alterar.component.html',
  styleUrls: ['./pessoa-alterar.component.css']
})
export class PessoaAlterarComponent implements OnInit {


  public pessoa: Pessoa
  form: FormGroup

  constructor() {
  }

  ngOnInit(): void {
     this.form = new FormGroup({
       peso: new FormControl(null, {
         validators: [Validators.required, Validators.minLength(3)]
       }),
       email: new FormControl (null, {
         validators: [Validators.required, Validators.email]
       }),
       telefone: new FormControl (null, {
         validators: [Validators.required, Validators.minLength(8)]
       }),
       celular: new FormControl (null, {
         validators: [Validators.required, Validators.minLength(9)]
       }),
       logradouro:new FormControl (null, {
         validators: [Validators.required, Validators.minLength(9)]
       }),
       numero: new FormControl (null, {
         validators: [Validators.required, Validators.email]
       }),
       complemento: new FormControl (null, {
         validators: [Validators.required, Validators.minLength(0)]
       }),
       cep: new FormControl (null, {
         validators: [Validators.required, Validators.minLength(8)]
       }),
       bairro: new FormControl (null, {
         validators: [Validators.required, Validators.minLength(5)]
       }),
       cidade: new FormControl (null, {
         validators: [Validators.required, Validators.minLength(5)]
       }),
       estado: new FormControl (null, {
         validators: [Validators.required, Validators.minLength(2)]
       })
     })
  }

}
