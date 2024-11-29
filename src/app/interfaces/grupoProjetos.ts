import { Projeto } from "./projeto";

export interface grupoProjetos {
  id: number;
  titulo: string;
  descricao: string;

  projetos: Projeto[];
}
