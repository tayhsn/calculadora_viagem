import { despesas } from "./mocks/despesas.js";
import { pessoas } from "./mocks/pessoas.js";

// FUNÇÃO PARA CALCULAR A DESPESA POR PESSOA
function calcularDespesasPorPessoa(despesas, pessoas) {
  // VERIFICA SE AS LISTAS ESTAO VAZIAS
  // e se estiverem um aviso é retornado
  if (despesas.length === 0 || pessoas.length === 0)
    return "É necessário haver VALOR DE DESPESAS e QUANTIDADE DE PESSOAS para o calculo ser realizado";

  // CALCULA GASTO TOTAL DAS DESPESAS
  // Multiplica o valor pela quantidade e soma todas as ocorrencias.
  let custo = 0,
      total = 0;
  for (const gasto of despesas) {
    custo = gasto.quantidade * gasto.valor_unitario;
    total += custo;
  }

  //DIVIDE PELA QUANTIDADE DE PESSOAS
  // divide o total em centavos pelo tamanho da lista de pessoas que inicia na posição 0, e remove os digitos sobresalentes
  let partePorPessoa = ((total * 100) / (pessoas.length - 1)).toFixed();

  // RETORNA UM MAPA COM OS VALORES
  // para cada pessoa na lista, a chave é a pessoa e o valor é o total a pagar em reais.
  let mapaDespesas = new Map();
  for (const pessoa of pessoas) {
    mapaDespesas.set(pessoa, `R$ ${partePorPessoa / 100}`);
  }
  return mapaDespesas;
}

// CHAMA A FUNÇÃO E IMPRIME O RESULTADO
const resultado = calcularDespesasPorPessoa(despesas, pessoas);
console.log(resultado);
