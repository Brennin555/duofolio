import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  opcaoEscolhida: string = '';

  opcoesMenu = [
    "trajetoria",
    "curriculo",
    "projetos",
    "contato"
  ]


  constructor() { }

  ngOnInit(): void {
    this.opcaoEscolhida = this.opcoesMenu[2];
  }

  selecionarOpcao(opcao: string): void {
    this.opcaoEscolhida = opcao;
    console.log('Opção selecionada:', opcao);
  }
}
