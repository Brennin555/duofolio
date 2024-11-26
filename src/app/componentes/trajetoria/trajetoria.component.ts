import { Component } from '@angular/core';

@Component({
  selector: 'app-trajetoria',
  templateUrl: './trajetoria.component.html',
  styleUrls: ['./trajetoria.component.css']
})
export class TrajetoriaComponent {
  mostrarCard = false;
  indiceBotao: number | null = null;
  botoes = [0, 1, 2, 3, 4];


  constructor() { }

  trocarEstadoCard(i: number) {
    this.indiceBotao = this.indiceBotao === i ? null : i;
  }

  organizarClasseBotoes(i: number): string {
    if (true) {
      switch (i) {
        case 0:
          return 'centralizar';
        case 1:
          return 'centralizar_l1';
        case 2:
          return 'centralizar_l2';
        case 3:
          return 'centralizar_l1';
        case 4:
          return 'centralizar';
        default:
          return 'centralizar';
      }
    }else{
      switch (i) {
        case 0:
          return 'centralizar';
        case 1:
          return 'centralizar_r1';
        case 2:
          return 'centralizar_r2';
        case 3:
          return 'centralizar_r1';
        case 4:
          return 'centralizar';
        default:
          return 'centralizar';
      }
    }
  }
}
