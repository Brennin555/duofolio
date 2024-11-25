import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent {
  @Input() opcaoAtiva!: string; // Recebe a opção ativa
  @Output() opcaoSelecionada = new EventEmitter<string>(); // Emite eventos para o componente pai

  onOpcaoSelecionada(opcao: string): void {
    this.opcaoSelecionada.emit(opcao);
  }
}
