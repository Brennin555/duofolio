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
    this.topico.descricao = 'Aprovado na UNIFEI - Universidade Federal de Itajubá para o curso de Engenharia de Computação. Inicio das aulas remotas devido a pandemia';
    this.topico.data = "05/2021";
    this.topico.icone = 'school';
    this.topico.link = '';

    this.unidade.topicos.push(this.topico);

    this.topico = {} as Topico;
    this.topico.id = 1;
    this.topico.nome = 'Desenvolvendo jogos em C';
    this.topico.descricao = 'Desenvolvendo jogos para as disciplinas de lógica de programação e algoritmos';
    this.topico.data = "09/2021";
    this.topico.icone = 'sports_esports';
    this.topico.link = '';

    this.unidade.topicos.push(this.topico);

    this.topico = {} as Topico;
    this.topico.id = 2;
    this.topico.nome = 'Participação em Maratona de Programação';
    this.topico.descricao = 'Participai da XXVI Maratona de Programação - 2021 devido a matéria que eu fazia naquele semestre';
    this.topico.data = "10/2021";
    this.topico.icone = 'timer';
    this.topico.link = '';

    this.unidade.topicos.push(this.topico);

    this.topico = {} as Topico;
    this.topico.id = 3;
    this.topico.nome = 'Jogo de Estrutura de Dados';
    this.topico.descricao = 'Desenvolvi o jogo "Free-Cell" em C para a disciplina de Estrutura de Dados, cursada em meu segundo semestre na faculdade';
    this.topico.data = "12/2021";
    this.topico.icone = 'gamepad';
    this.topico.link = '';

    this.unidade.topicos.push(this.topico);

    this.topico = {} as Topico;
    this.topico.id = 4;
    this.topico.nome = 'Processo Trainee';
    this.topico.descricao = 'Selecionado para o processo trainee na EJ Asimov Jr. Participei do processo seletivo por incentivo de um amigo';
    this.topico.data = "12/2021";
    this.topico.icone = 'group';
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
    this.topico.descricao = 'Inicio das aulas presenciais. Muita expectativa para a nova vida e o novo semestre';
    this.topico.data = "03/2022";
    this.topico.icone = 'location_on';
    this.topico.link = '';

    this.unidade.topicos.push(this.topico);

    this.topico = {} as Topico;
    this.topico.id = 1;
    this.topico.nome = 'Efetivação';
    this.topico.descricao = 'Efetivado como desenvolvedor de projetos mobile, após longas semanas de capacitações';
    this.topico.data = "03/2022";
    this.topico.icone = 'check_circle';
    this.topico.link = '';

    this.unidade.topicos.push(this.topico);

    this.topico = {} as Topico;
    this.topico.id = 2;
    this.topico.nome = 'Desenvolvimento de aplicativos mobile em Ionic/Angular';
    this.topico.descricao = 'Efetivado como desenvolvedor de projetos mobile';
    this.topico.data = "12/2022";
    this.topico.icone = 'smartphone';
    this.topico.link = '';

    this.unidade.topicos.push(this.topico);

    this.topico = {} as Topico;
    this.topico.id = 3;
    this.topico.nome = 'Estudo de grafos e algoritmos de ordenação em C++';
    this.topico.descricao = 'Conhecendo Dijkstra, Bubble Sort, Quick Sort entre outros';
    this.topico.data = "07/2022";
    this.topico.icone = 'device_hub';
    this.topico.link = '';

    this.unidade.topicos.push(this.topico);


    this.topico = {} as Topico;
    this.topico.id = 4;
    this.topico.nome = 'Estudo de padrões de projeto em Java';
    this.topico.descricao = 'Estudo de padrões de projeto em Java para melhorar a orientação a objeto e a qualidade do código';
    this.topico.data = "12/2022";
    this.topico.icone = 'design_services';
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
    this.topico.descricao = 'Eleito gerente de projetos mobile após um ano de empresa júnior e alguns projetos desenvolvidos';
    this.topico.data = "01/2023";
    this.topico.icone = 'workspace_premium';
    this.topico.link = '';

    this.unidade.topicos.push(this.topico);

    this.topico = {} as Topico;
    this.topico.id = 1;
    this.topico.nome = 'Aprendizado sobre banco de dados e MySQL';
    this.topico.descricao = ' Estudos sobre banco de dados relacionais, modelagem de dados e SQL';
    this.topico.data = "01/2023";
    this.topico.icone = 'storage';
    this.topico.link = '';

    this.unidade.topicos.push(this.topico);

    this.topico = {} as Topico;
    this.topico.id = 2;
    this.topico.nome = 'Criação de novas capacitações para a equipe';
    this.topico.descricao = 'Desenvolvimento de capacitações para os membros após um periodo sem projetos';
    this.topico.data = "01/2023";
    this.topico.icone = 'school';
    this.topico.link = '';

    this.unidade.topicos.push(this.topico);

    this.topico = {} as Topico;
    this.topico.id = 3;
    this.topico.nome = 'Publicação de aplicativos nas lojas Google Play e Apple Store';
    this.topico.descricao = 'Estudo referente a publicação dos aplicativos para a entrega dos projetos finalizados';
    this.topico.data = "01/2023";
    this.topico.icone = 'cloud_upload';
    this.topico.link = '';

    this.unidade.topicos.push(this.topico);

    this.topico = {} as Topico;
    this.topico.id = 4;
    this.topico.nome = 'Aprendizado sobre compiladores em Python';
    this.topico.descricao = 'Estudo sobre os aspectos léxico e sintático de compiladores, desenvolvendo um interpretador de código.';
    this.topico.data = "01/2023";
    this.topico.icone = 'code';
    this.topico.link = '';

    this.unidade.topicos.push(this.topico);
    this.unidades.push(this.unidade);

    // ------------------------------------------------- 2024 -------------------------------------------------
    this.unidade = {} as Unidade;
    this.unidade.id = 4;
    this.unidade.nome = 'Grandes mudanças e novidades';
    this.unidade.periodo = "2024";
    this.unidade.topicos = [];

    this.topico = {} as Topico;
    this.topico.id = 1;
    this.topico.nome = 'Saída da empresa júnior';
    this.topico.descricao = 'Saída da empresa júnior após dois anos para novos desafios';
    this.topico.data = "03/2024";
    this.topico.icone = 'exit_to_app';
    this.topico.link = '';

    this.unidade.topicos.push(this.topico);

    this.topico = {} as Topico;
    this.topico.id = 1;
    this.topico.nome = 'O começo de um novo projeto';
    this.topico.descricao = 'Início do Gincana na Nota, uma nova parceria com frutos do ano anterior';
    this.topico.data = "03/2024";
    this.topico.icone = 'lightbulb';
    this.topico.link = '';

    this.unidade.topicos.push(this.topico);

    this.topico = {} as Topico;
    this.topico.id = 2;
    this.topico.nome = 'Aprendizado sobre IA em python';
    this.topico.descricao = 'Aprofundamento sobre modelos de machine learning e deep learning, aplicados em exercícios com contextos reais';
    this.topico.data = "03/2024";
    this.topico.icone = 'psychology';
    this.topico.link = '';

    this.unidade.topicos.push(this.topico);

    this.topico = {} as Topico;
    this.topico.id = 3;
    this.topico.nome = 'Inicio das operaçoes do projeto';
    this.topico.descricao = 'Após todo o desenvolvimento, o projeto Gincana na Nota é publicado e começa a operar';
    this.topico.data = "09/2024";
    this.topico.icone = 'play_arrow';
    this.topico.link = '';

    this.unidade.topicos.push(this.topico);


    this.topico = {} as Topico;
    this.topico.id = 4;
    this.topico.nome = 'Busca por uma vaga de estágio';
    this.topico.descricao = 'Com toda esta jornada, planejo dar um passo a mais e buscar novos desafios';
    this.topico.data = "09/2024";
    this.topico.icone = 'search';
    this.topico.link = '';

    this.unidade.topicos.push(this.topico);
    this.unidades.push(this.unidade);
  }

}
