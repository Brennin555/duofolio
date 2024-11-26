import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-licao',
  templateUrl: './card-licao.component.html',
  styleUrls: ['./card-licao.component.css']
})
export class CardLicaoComponent {
  @Input() indiceBotao!: number;
  @Input() indiceUnidade!: number;
  @Input() tituloCard!: string;
  @Input() descricaoCard!: string;
  @Input() dataCard!: string;
  @Input() linkCard!: string;

  organizarClasseSeta(): string {
    let nomeClasse = 'cardLicao'; // Sempre inclui a classe base

    if (this.indiceUnidade % 2 === 0) {
      switch (this.indiceBotao) {
        case 0:
          break;
        case 1:
          nomeClasse += ' l1';
          break;
        case 2:
          nomeClasse += ' l2';
          break;
        case 3:
          nomeClasse += ' l1';
          break;
        case 4:
          break;
      }
    } else {
      switch (this.indiceBotao) {
        case 0:
          break;
        case 1:
          nomeClasse += ' r1';
          break;
        case 2:
          nomeClasse += ' r2';
          break;
        case 3:
          nomeClasse += ' r1';
          break;
        case 4:
          break;
      }
    }

    const corClasse = ` cor${(this.indiceUnidade % 4) + 1}Card cor${(this.indiceUnidade % 4) + 1}Seta`;
    return nomeClasse + corClasse;
  }

}
