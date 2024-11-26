import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-licao',
  templateUrl: './card-licao.component.html',
  styleUrls: ['./card-licao.component.css']
})
export class CardLicaoComponent {
  @Input() indiceBotao!: number;

  organizarClasseSeta(): string {
    if (true) {
      switch (this.indiceBotao) {
        case 0:
          return '';
        case 1:
          return 'l1';
        case 2:
          return 'l2';
        case 3:
          return 'l1';
        case 4:
          return '';
        default:
          return '';
      }
    } else {
      switch (this.indiceBotao) {
        case 0:
          return '';
        case 1:
          return 'r1';
        case 2:
          return 'r2';
        case 3:
          return 'r1';
        case 4:
          return '';
        default:
          return '';
      }
    }
  }
}
