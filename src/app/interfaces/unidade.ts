import { Topico } from './topico';

export interface Unidade {
  id: number;
  nome: string;
  periodo: string;
  topicos: Topico[];
  nomeImagem: string;

}
