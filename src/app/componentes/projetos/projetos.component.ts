import { Component } from '@angular/core';
import { Projeto } from './../../interfaces/projeto';
import { grupoProjetos } from 'src/app/interfaces/grupoProjetos';


@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent {

  projeto: Projeto = {} as Projeto;
  grupoProjetos: grupoProjetos = {} as grupoProjetos;

  projetosGeral: grupoProjetos[] = [];

  constructor() { }

  ngOnInit(): void {
    this.criandoProjetos();
  }

  abrirLink(link: string) {
    window.open(link, '_blank');
  }

  criandoProjetos() {

    this.projetosGeral = [];

    this.grupoProjetos = {} as grupoProjetos;
    this.grupoProjetos.titulo = 'Projetos Pessoais';

    this.grupoProjetos.projetos = [];

    this.projeto = {} as Projeto;

    this.projeto.nome = 'SoccerStats';
    this.projeto.descricao = 'Site desenvolvido em capacitação de PHP, MySQL e APIs';
    this.projeto.imagem = 'futebol';
    this.projeto.link = 'https://youtu.be/8QMlLkTDq88?si=z2DI_8DxkABm2a1w';
    this.grupoProjetos.projetos.push(this.projeto);

    this.projeto = {} as Projeto;

    this.projeto.nome = 'Gincana na Nota';
    this.projeto.descricao = 'Aplicativo de gincana de notas fiscais';
    this.projeto.imagem = 'recibo';
    this.projeto.link = 'https://play.google.com/store/apps/details?id=br.com.gincanananota.app';
    this.grupoProjetos.projetos.push(this.projeto);

    this.projeto = {} as Projeto;

    this.projeto.nome = '4GrinGo';
    this.projeto.descricao = 'Aplicativo de recomendação de lugares para turistas';
    this.projeto.imagem = 'avaliacao';
    this.projeto.link = 'https://github.com/Brennin555/forGringo';
    this.grupoProjetos.projetos.push(this.projeto);

    this.projeto = {} as Projeto;

    this.projeto.nome = 'Aplicativo: Rastramento de encomendas';
    this.projeto.descricao = 'Aplicativo desenvolvido em capacitação de Ionic e APIs';
    this.projeto.imagem = 'correio';
    this.projeto.link = 'https://youtu.be/cQdw9s6VLNI?si=-lNCTgvzRGASfidn';
    this.grupoProjetos.projetos.push(this.projeto);

    this.projeto = {} as Projeto;

    this.projeto.nome = 'Aplicativo: Lista de tarefas';
    this.projeto.descricao = 'Aplicativo desenvolvido em capacitação de Ionic, Angular e Firebase';
    this.projeto.imagem = 'listatarefas';
    this.projeto.link = 'https://github.com/Brennin555/Aplicativo-Lista-com-Autentiacao-Firebase';//arrumar
    this.grupoProjetos.projetos.push(this.projeto);

    this.projeto = {} as Projeto;

    this.projeto.nome = 'Portfólio ilusório';
    this.projeto.descricao = 'Portfólio desenvolvido em capacitação de HTML e CSS';
    this.projeto.imagem = 'curriculo';
    this.projeto.link = 'https://youtu.be/VUXvX0MkT_U?si=PfP9i1JtbSUY68Bj';//arrumar
    this.grupoProjetos.projetos.push(this.projeto);

    this.projetosGeral.push(this.grupoProjetos); // estou adicionando aqui chat

    // -------------------------------------------------------------------------------------- Projetos da faculdade
    this.grupoProjetos = {} as grupoProjetos;
    this.grupoProjetos.titulo = 'Projetos da Faculdade';
    this.grupoProjetos.projetos = [];

    this.projeto = {} as Projeto;

    this.projeto.nome = 'Linguagem BLE e seu compilador';
    this.projeto.descricao = 'Projeto final da disciplina de "Compiladores"';
    this.projeto.imagem = 'icons8-configurações-do-laptop-64';
    this.projeto.link = 'https://github.com/Brennin555/BLE-Compiler';
    this.grupoProjetos.projetos.push(this.projeto);

    this.projeto = {} as Projeto;

    this.projeto.nome = 'Jogo FreeCell desenvolvido em C (com ponteiros)';
    this.projeto.descricao = 'Projeto final da disciplina de "Estrutura de Dados"';
    this.projeto.imagem = 'icons8-cartas-64';
    this.projeto.link = 'https://youtu.be/VUXvX0MkT_U?si=PfP9i1JtbSUY68Bj';//arrumar
    this.grupoProjetos.projetos.push(this.projeto);

    this.projeto = {} as Projeto;

    this.projeto.nome = 'Mini jogos desenvolvidos em C';
    this.projeto.descricao = 'Jogos desenvolvidos dentro e fora da disciplina de "Lógica de Programação"';
    this.projeto.imagem = 'icons8-controle-64';
    this.projeto.link = 'https://youtu.be/VUXvX0MkT_U?si=PfP9i1JtbSUY68Bj';//arrumar
    this.grupoProjetos.projetos.push(this.projeto);

    this.projeto = {} as Projeto;

    this.projeto.nome = 'Simulação de funcionamento de uma geladeira';
    this.projeto.descricao = 'Projeto final da disciplina de "Programação Embarcada"';
    this.projeto.imagem = 'icons8-inverno-64';
    this.projeto.link = 'https://youtu.be/VUXvX0MkT_U?si=PfP9i1JtbSUY68Bj';
    this.grupoProjetos.projetos.push(this.projeto);


    this.projeto = {} as Projeto;

    this.projeto.nome = 'Indicador de nível de Luminosidade';
    this.projeto.descricao = 'Projeto final da disciplina de "Laboratório de Circuitos e Eletrônica"';
    this.projeto.imagem = 'icons8-luz-acesa-64';
    this.projeto.link = 'https://youtu.be/-Rnlg0DDw-I?si=kXyV1bRJLy83Qr2y';
    this.grupoProjetos.projetos.push(this.projeto);

    this.projetosGeral.push(this.grupoProjetos);
  }

}
