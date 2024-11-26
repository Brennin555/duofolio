import { Component } from '@angular/core';
import { Unidade } from 'src/app/interfaces/unidade';
import { Topico } from 'src/app/interfaces/topico';
@Component({
  selector: 'app-trajetoria',
  templateUrl: './trajetoria.component.html',
  styleUrls: ['./trajetoria.component.css']
})
export class TrajetoriaComponent {
  mostrarCard = false;
  indiceBotao: number | null = null;
  botoes = [0, 1, 2, 3, 4];

  unidades: Unidade[] = [];
  topicos: Topico[] = [];

  unidade: Unidade = {} as Unidade;
  topico: Topico = {} as Topico;

  constructor() { }

  ngOnInit() {
    this.criarUnidade();
  }

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

  criarUnidade() {
    this.unidade = {} as Unidade;
    this.unidade.id = 1;
    this.unidade.nome = 'Faculdade';
    this.unidade.periodo = "2021, EM ANDAMENTO";
    this.unidade.topicos = [];

    this.topico = {} as Topico;
    this.topico.id = 0;
    this.topico.nome = 'Ingresso na faculdade';
    this.topico.descricao = 'Aprovado na UNIFEI - Universidade Federal de Itajubá';
    this.topico.data = "05/2021";
    this.topico.icone = 'school';
    this.topico.link = 'https://www.google.com';

    this.unidade.topicos.push(this.topico);

    this.topico = {} as Topico;
    this.topico.id = 2;
    this.topico.nome = 'Projeto de Programação Embarcada';
    this.topico.descricao = '';
    this.topico.data = "12/2021";
    this.topico.icone = 'sim_card';
    this.topico.link = 'https://youtu.be/VUXvX0MkT_U';

    this.unidade.topicos.push(this.topico);

    this.topico = {} as Topico;
    this.topico.id = 3;
    this.topico.nome = 'Jogo de Estrutura de Dados';
    this.topico.descricao = 'Jogo Free-Cell em C';
    this.topico.data = "12/2021";
    this.topico.icone = 'videogame_asset';
    this.topico.link = '';

    this.unidade.topicos.push(this.topico);

    this.topico = {} as Topico;
    this.topico.id = 4;
    this.topico.nome = 'Mudança para Itajubá/MG';
    this.topico.descricao = 'Inicio das aulas presenciais';
    this.topico.data = "03/2022";
    this.topico.icone = 'airport_shuttle';
    this.topico.link = '';

    this.unidade.topicos.push(this.topico);

    this.topico = {} as Topico;
    this.topico.id = 5;
    this.topico.nome = 'Projeto de Engenharia de Software';
    this.topico.descricao = 'Aplicativo mobile desenvolvido para matéria de engenharia de software';
    this.topico.data = "12/2023";
    this.topico.icone = 'smartphone';
    this.topico.link = '';

    this.unidade.topicos.push(this.topico);

    this.unidades.push(this.unidade);

    this.unidade = {} as Unidade;
    this.unidade.id = 2;
    this.unidade.nome = 'Asimov Jr.';
    this.unidade.periodo = "12/2021, 03/2024";
    this.unidade.topicos = [];

    this.topico = {} as Topico;
    this.topico.id = 0;
    this.topico.nome = 'Processo Trainee';
    this.topico.descricao = 'Selecionado para o processo trainee';
    this.topico.data = "12/2021";
    this.topico.icone = 'work';
    this.topico.link = '';

    this.unidade.topicos.push(this.topico);

    this.topico = {} as Topico;
    this.topico.id = 1;
    this.topico.nome = 'Efetivação';
    this.topico.descricao = 'Efetivado como desenvolvedor de projetos mobile';
    this.topico.data = "03/2022";
    this.topico.icone = 'work';
    this.topico.link = '';

    this.unidade.topicos.push(this.topico);

    this.topico = {} as Topico;
    this.topico.id = 2;
    this.topico.nome = 'Gerente de Projetos Mobile';
    this.topico.descricao = 'Desenvolvimento de aplicativo mobile para empresa de tecnologia';
    this.topico.data = "01/2023";
    this.topico.icone = 'smartphone';
    this.topico.link = '';

    this.unidade.topicos.push(this.topico);

    this.topico = {} as Topico;
    this.topico.id = 3;
    this.topico.nome = 'Gerente de Projetos Mobile';
    this.topico.descricao = 'Desenvolvimento de aplicativo mobile para empresa de tecnologia';
    this.topico.data = "12/2023";
    this.topico.icone = 'smartphone';
    this.topico.link = '';

    this.unidade.topicos.push(this.topico);

    this.topico = {} as Topico;
    this.topico.id = 4;
    this.topico.nome = 'Saída da empresa';
    this.topico.descricao = 'Saída da empresa júnior após dois anos para novos desafios';
    this.topico.data = "03/2024";
    this.topico.icone = '';
    this.topico.link = '';

    this.unidade.topicos.push(this.topico);

    this.unidades.push(this.unidade);

  }

}
