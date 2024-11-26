import { Component } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia';

@Component({
  selector: 'app-cards-noticias',
  templateUrl: './cards-noticias.component.html',
  styleUrls: ['./cards-noticias.component.css']
})
export class CardsNoticiasComponent {
  progressValue: number = 0;

 noticias = [];

  noticia: Noticia = {} as Noticia;

  ngOnInit() {
    this.noticia = {
      id: 1,
      titulo: 'Dias de UNIFEI',
      dataInicio: '2021-05-01',
      dataFim: '2025-12-20',
      totalDias: 0,
      restante: 0,
      porcentagemCompleta: 0
    }
    this.noticia.totalDias = this.contarDias('2021-05-01', '2025-12-20');
    this.noticia.restante = this.contarDiasRestantes(this.noticia.dataFim);
    this.noticia.porcentagemCompleta = this.calcularPorcentagemCompleta();
  }

  // função de contar número de dias entre duas datas
  contarDias(inicio: string, fim:string): number {
    const dataInicio = new Date(inicio);
    const dataFim = new Date(fim);
    const diferenca = dataFim.getTime() - dataInicio.getTime();
    let totalDias =  Math.floor(diferenca / (1000 * 60 * 60 * 24));

    return totalDias;
  }

  contarDiasRestantes(fim: string): number {
    const dataFim = new Date(fim);
    const hoje = new Date();

    let diasRestantes = Math.floor((dataFim.getTime() - hoje.getTime()) / (1000 * 60 * 60 * 24));

    return diasRestantes;
  }

  calcularPorcentagemCompleta(): number {
    if (!this.noticia) return 0;

    const diasPassados = this.noticia.totalDias - this.noticia.restante;
    return Math.min(100, (diasPassados / this.noticia.totalDias) * 100); // Garante que não passe de 100%
  }

}
