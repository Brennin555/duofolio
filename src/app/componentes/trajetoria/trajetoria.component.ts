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
  indiceUnidade: number | null = null;
  botoes = [0, 1, 2, 3, 4];

  unidades: Unidade[] = [];
  topicos: Topico[] = [];

  unidade: Unidade = {} as Unidade;
  topico: Topico = {} as Topico;

  constructor() { }

  ngOnInit() {
    this.criarUnidade();
  }

  trocarEstadoCard(i: number, j: number) {
    this.indiceBotao = this.indiceBotao === i ? null : i;
    this.indiceUnidade = j;

  }

  organizarClasseBotoes(i: number, j:number): string {
    let nomeClasse = '';
    if (j%2 == 0) {
      switch (i) {
        case 0:
          nomeClasse = 'centralizar';
          break;
        case 1:
          nomeClasse = 'centralizar_l1';
          break;
        case 2:
          nomeClasse = 'centralizar_l2';
          break;
        case 3:
          nomeClasse = 'centralizar_l1';
          break;
        case 4:
          nomeClasse = 'centralizar';
          break;
        default:
          nomeClasse = 'centralizar';
          break;
      }
    }else{
      switch (i) {
        case 0:
          nomeClasse = 'centralizar';
          break;
        case 1:
          nomeClasse = 'centralizar_r1';
          break;
        case 2:
          nomeClasse = 'centralizar_r2';
          break;
        case 3:
          nomeClasse = 'centralizar_r1';
          break;
        case 4:
          nomeClasse = 'centralizar';
          break;
        default:
          nomeClasse = 'centralizar';
          break;
      }
    }

    if(j % 4 == 0){
      nomeClasse = nomeClasse + ' cor1Card';
    }else if(j % 4 == 1){
      nomeClasse = nomeClasse + ' cor2Card';
    }else if(j % 4 == 2){
      nomeClasse = nomeClasse + ' cor3Card';
    }else if(j % 4 == 3){
      nomeClasse = nomeClasse + ' cor4Card';
    }else{
      nomeClasse = nomeClasse + ' cor1Card';
    }

    return nomeClasse;
  }

  setColorCard(i: number): string {
    if(i % 4 == 0){
      return 'cor1Card';
    }else if(i % 4 == 1){
      return 'cor2Card';
    }else if(i % 4 == 2){
      return 'cor3Card';
    }else if(i % 4 == 3){
      return 'cor4Card';
    }else{
      return 'cor1Card';
    }

  }

  criarUnidade() {

    // ------------------------------------------------- 2021 -------------------------------------------------
    this.unidade = {} as Unidade;
    this.unidade.id = 1;
    this.unidade.nome = 'Faculdade e pandemia';
    this.unidade.periodo = "2021";
    this.unidade.topicos = [];

    this.topico = {} as Topico;
    this.topico.id = 0;
    this.topico.nome = 'Ingresso na faculdade';
    this.topico.descricao = 'Aprovado na UNIFEI - Universidade Federal de Itajubá';
    this.topico.data = "05/2021";
    this.topico.icone = 'school';
    this.topico.link = '';

    this.unidade.topicos.push(this.topico);

    this.topico = {} as Topico;
    this.topico.id = 1;
    this.topico.nome = 'Desenvolvendo jogos em C';
    this.topico.descricao = 'Desenvolvendo jogos para as disciplinas de lógica de programação e algoritmos';
    this.topico.data = "09/2021";
    this.topico.icone = 'school';
    this.topico.link = '';

    this.unidade.topicos.push(this.topico);

    this.topico = {} as Topico;
    this.topico.id = 2;
    this.topico.nome = 'Participação em Olimpíada de Programação';
    this.topico.descricao = '';
    this.topico.data = "10/2021";
    this.topico.icone = 'sim_card';
    this.topico.link = '';

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
    this.topico.nome = 'Processo Trainee';
    this.topico.descricao = 'Selecionado para o processo trainee na EJ Asimov Jr.';
    this.topico.data = "12/2021";
    this.topico.icone = 'work';
    this.topico.link = '';

    this.unidade.topicos.push(this.topico);
    this.unidades.push(this.unidade);

    // ------------------------------------------------- 2022 -------------------------------------------------
    this.unidade = {} as Unidade;
    this.unidade.id = 2;
    this.unidade.nome = 'Itajubá e Asimov Jr.';
    this.unidade.periodo = "2022";
    this.unidade.topicos = [];

    this.topico = {} as Topico;
    this.topico.id = 0;
    this.topico.nome = 'Mudança para Itajubá/MG';
    this.topico.descricao = 'Inicio das aulas presenciais';
    this.topico.data = "03/2022";
    this.topico.icone = 'airport_shuttle';
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
    this.topico.nome = 'Desenvolvimento de aplicativos mobile em Ionic/Angular';
    this.topico.descricao = 'Efetivado como desenvolvedor de projetos mobile';
    this.topico.data = "12/2022";
    this.topico.icone = 'work';
    this.topico.link = '';

    this.unidade.topicos.push(this.topico);

    this.topico = {} as Topico;
    this.topico.id = 3;
    this.topico.nome = 'Estudo de grafos e algoritmos de ordenação em C++';
    this.topico.descricao = 'Efetivado como desenvolvedor de projetos mobile';
    this.topico.data = "07/2022";
    this.topico.icone = 'work';
    this.topico.link = '';

    this.unidade.topicos.push(this.topico);


    this.topico = {} as Topico;
    this.topico.id = 4;
    this.topico.nome = 'Estudo de padrões de projeto em Java';
    this.topico.descricao = 'Efetivado como desenvolvedor de projetos mobile';
    this.topico.data = "12/2022";
    this.topico.icone = 'work';
    this.topico.link = '';

    this.unidade.topicos.push(this.topico);


    this.unidades.push(this.unidade);

    // ------------------------------------------------- 2023 -------------------------------------------------
    this.unidade = {} as Unidade;
    this.unidade.id = 3;
    this.unidade.nome = 'Novos desafios e responsabilidades';
    this.unidade.periodo = "2023";
    this.unidade.topicos = [];

    this.topico = {} as Topico;
    this.topico.id = 0;
    this.topico.nome = 'Promoção para gerente de Projetos Mobile';
    this.topico.descricao = 'Desenvolvimento de aplicativo mobile para empresa de tecnologia';
    this.topico.data = "01/2023";
    this.topico.icone = 'smartphone';
    this.topico.link = '';

    this.unidade.topicos.push(this.topico);

    this.topico = {} as Topico;
    this.topico.id = 1;
    this.topico.nome = 'Aprendizado sobre banco de dados e MySQL';
    this.topico.descricao = 'Desenvolvimento de aplicativo mobile para empresa de tecnologia';
    this.topico.data = "01/2023";
    this.topico.icone = 'smartphone';
    this.topico.link = '';

    this.unidade.topicos.push(this.topico);

    this.topico = {} as Topico;
    this.topico.id = 2;
    this.topico.nome = 'Criação de novas capacitações para a equipe';
    this.topico.descricao = 'Desenvolvimento de aplicativo mobile para empresa de tecnologia';
    this.topico.data = "01/2023";
    this.topico.icone = 'smartphone';
    this.topico.link = '';

    this.unidade.topicos.push(this.topico);

    this.topico = {} as Topico;
    this.topico.id = 3;
    this.topico.nome = 'Publicação de aplicativos nas lojas Google Play e Apple Store';
    this.topico.descricao = 'Desenvolvimento de aplicativo mobile para empresa de tecnologia';
    this.topico.data = "01/2023";
    this.topico.icone = 'smartphone';
    this.topico.link = '';

    this.unidade.topicos.push(this.topico);

    this.topico = {} as Topico;
    this.topico.id = 4;
    this.topico.nome = 'Aprendizado sobre compiladores e interpretação de código em Python';
    this.topico.descricao = 'Desenvolvimento de aplicativo mobile para empresa de tecnologia';
    this.topico.data = "01/2023";
    this.topico.icone = 'smartphone';
    this.topico.link = '';

    this.unidade.topicos.push(this.topico);
    this.unidades.push(this.unidade);

    // ------------------------------------------------- 2024 -------------------------------------------------
    this.unidade = {} as Unidade;
    this.unidade.id = 4;
    this.unidade.nome = 'Novos desafios e responsabilidades';
    this.unidade.periodo = "2024";
    this.unidade.topicos = [];

    this.topico = {} as Topico;
    this.topico.id = 1;
    this.topico.nome = 'Saída da empresa júnior';
    this.topico.descricao = 'Saída da empresa júnior após dois anos para novos desafios';
    this.topico.data = "03/2024";
    this.topico.icone = '';
    this.topico.link = '';

    this.unidade.topicos.push(this.topico);

    this.topico = {} as Topico;
    this.topico.id = 1;
    this.topico.nome = 'O começo de um novo projeto';
    this.topico.descricao = 'Saída da empresa júnior após dois anos para novos desafios';
    this.topico.data = "03/2024";
    this.topico.icone = '';
    this.topico.link = '';

    this.unidade.topicos.push(this.topico);

    this.topico = {} as Topico;
    this.topico.id = 2;
    this.topico.nome = 'Aprendizado sobre inteligência artificial em python';
    this.topico.descricao = 'Saída da empresa júnior após dois anos para novos desafios';
    this.topico.data = "03/2024";
    this.topico.icone = '';
    this.topico.link = '';

    this.unidade.topicos.push(this.topico);

    this.topico = {} as Topico;
    this.topico.id = 3;
    this.topico.nome = 'Inicio das operaçoes do projeto';
    this.topico.descricao = 'Saída da empresa júnior após dois anos para novos desafios';
    this.topico.data = "09/2024";
    this.topico.icone = '';
    this.topico.link = '';

    this.unidade.topicos.push(this.topico);


    this.topico = {} as Topico;
    this.topico.id = 4;
    this.topico.nome = 'Busca por uma vaga de estágio';
    this.topico.descricao = 'Saída da empresa júnior após dois anos para novos desafios';
    this.topico.data = "09/2024";
    this.topico.icone = '';
    this.topico.link = '';

    this.unidade.topicos.push(this.topico);
    this.unidades.push(this.unidade);
  }

}
