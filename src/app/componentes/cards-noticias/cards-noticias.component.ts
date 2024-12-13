import { Component } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia';
import { Meta } from 'src/app/interfaces/meta';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-cards-noticias',
  templateUrl: './cards-noticias.component.html',
  styleUrls: ['./cards-noticias.component.css']
})
export class CardsNoticiasComponent {
  progressValue: number = 0;

 noticias: any[] = [];
 metas: any[] = [];

 noticia: Noticia = {} as Noticia;
 meta: Meta = {} as Meta;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.adicionarNoticias();
    this.adicionarMetas();
  }

  adicionarNoticias() {

    this.noticia = {
      id: 1,
      titulo: 'Dias de Asimov Jr.',
      dataInicio: '2022-03-01',
      dataFim: '2024-02-15',
      icone: 'icons8-fire-64_2.png',
      totalDias: 0,
      restante: 0,
      porcentagemCompleta: 0
    }

    this.noticia.totalDias = this.contarDias(this.noticia.dataInicio, this.noticia.dataFim);
    this.noticia.restante = this.contarDiasRestantes(this.noticia.dataFim);
    this.noticia.porcentagemCompleta = this.calcularPorcentagemCompleta();

    this.noticias.push(this.noticia);

    this.noticia = {
      id: 2,
      titulo: 'Matérias Obrig.',
      dataInicio: '2022-03-01',
      dataFim: '2024-02-15',
      icone: 'icons8-fire-64_2.png',
      totalDias: 80,
      restante: 11,
      porcentagemCompleta: 0
    }
    this.noticia.porcentagemCompleta = this.calcularPorcentagemCompleta();

    this.noticias.push(this.noticia);

    this.noticia = {
      id: 3,
      titulo: 'Dias de Unifei',
      dataInicio: '2021-05-01',
      dataFim: '2025-12-20',
      icone: 'icons8-fire-64_2.png',
      totalDias: 0,
      restante: 0,
      porcentagemCompleta: 0
    }

    this.noticia.totalDias = this.contarDias(this.noticia.dataInicio, this.noticia.dataFim);
    this.noticia.restante = this.contarDiasRestantes(this.noticia.dataFim);
    this.noticia.porcentagemCompleta = this.calcularPorcentagemCompleta();

    this.noticias.push(this.noticia);

  }

  adicionarMetas() {
    this.meta = {
      id: 1,
      titulo: 'Trajetória',
      icone: 'icons8-fire-64_2.png',
      restante: 0,
      totalItens: 4,
      porcentagemCompleta: 0
    }

    this.meta.porcentagemCompleta = this.calcularPorcentagemCompletaMeta();
    this.metas.push(this.meta);

    this.meta = {
      id: 3,
      titulo: 'Sobre mim',
      icone: 'icons8-fire-64_2.png',
      restante: 0,
      totalItens: 3,
      porcentagemCompleta: 0
    }

    this.meta.porcentagemCompleta = this.calcularPorcentagemCompletaMeta();
    this.metas.push(this.meta);

    this.meta = {
      id: 2,
      titulo: 'Projetos',
      icone: 'icons8-fire-64_2.png',
      restante: 0,
      totalItens: 11,
      porcentagemCompleta: 0
    }

    this.meta.porcentagemCompleta = this.calcularPorcentagemCompletaMeta();
    this.metas.push(this.meta);

    this.meta = {
      id: 4,
      titulo: 'Contato',
      icone: 'icons8-fire-64_2.png',
      restante: 1,
      totalItens: 1,
      porcentagemCompleta: 0
    }

    this.meta.porcentagemCompleta = this.calcularPorcentagemCompletaMeta();
    this.metas.push(this.meta);

    this.meta = {
      id: 5,
      titulo: 'Responsividade',
      icone: 'icons8-fire-64_2.png',
      restante: 4,
      totalItens: 4,
      porcentagemCompleta: 0
    }
    this.meta.porcentagemCompleta = this.calcularPorcentagemCompletaMeta();
    this.metas.push(this.meta);

  }

  salvarNoBanco() {
    this.firebaseService.saveNoticia(this.noticia).then(() => {
      console.log('Notícia salva com sucesso!');
    }).catch((error) => {
      console.error('Erro ao salvar notícia: ', error);
      alert(`Erro: ${error.message}`);
    });
  }

  buscarNoticias() {
    this.firebaseService.getNoticias().subscribe(
      (noticias) => {
        this.noticias = noticias;
      },
      (error) => {
        console.error('Erro ao buscar notícias:', error);
      }
    );
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

    if (dataFim.getTime() < hoje.getTime()) {
      return 0;
    }
    let diasRestantes = Math.floor((dataFim.getTime() - hoje.getTime()) / (1000 * 60 * 60 * 24));


    return diasRestantes;
  }

  calcularPorcentagemCompleta(): number {
    if (!this.noticia) return 0;

    const diasPassados = this.noticia.totalDias - this.noticia.restante;
    return Math.min(100, (diasPassados / this.noticia.totalDias) * 100); // Garante que não passe de 100%
  }

  calcularPorcentagemCompletaMeta(): number {
    if (!this.meta) return 0;

    return Math.min(100, ((this.meta.totalItens - this.meta.restante) / this.meta.totalItens) * 100); // Garante que não passe de 100%
  }
}
