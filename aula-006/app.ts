// setInterval(() => {
//   console.log("Olá Alberto");
// }, 1000); // 1000ms === 1s

// setTimeout(() => {
//   console.log("Olá Cipriano");
// }, 3000);

// Pending => pendente
// Fulfilled => resolvida
// Rejected => rejeitada

const minhaPromise = new Promise((resolve, reject) => {
  let sucesso = false;

  if (sucesso) {
    resolve("Operação realizada com sucesso!");
  } else {
    reject("Erro na operação");
  }
});

// minhaPromise
//   .then((mensagem) => {
//     console.log(mensagem);
//   })
//   .catch((erro) => {
//     console.log(erro);
//   });

// function simularCalculoDemorado(): Promise<number> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(42);
//     }, 3000); // 3s
//     console.log("Iniciando cálculo...");
//   });
// }

// simularCalculoDemorado().then((resultado) => {
//   console.log(`Resultado do cálculo: ${resultado}`);
// });

// async function executarCalculo() {
//   console.log("Iniciando cálculo...");
//   const resultado = await simularCalculoDemorado();
//   console.log(`Resultado do cálculo: ${resultado}`);
// }

// executarCalculo();

function simularProcesso1(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Processo 1 completo"), 2000);
  });
}

function simularProcesso2(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Processo 2 completo"), 1000);
  });
}

// simularProcesso1()
//   .then((resultado1) => {
//     console.log(resultado1);
//     return simularProcesso2();
//   })
//   .then((resultado2) => {
//     console.log(resultado2);
//   });

// async function executarProcessos() {
//   const resultado1 = await simularProcesso1();
//   console.log(resultado1);
//   const resultado2 = await simularProcesso2();
//   console.log(resultado2);
// }

// async function executarProcessos() {
//   const [resultado1, resultado2] = await Promise.all([
//     simularProcesso1(),
//     simularProcesso2(),
//   ]);
//   console.log(resultado1, resultado2);
// }

// executarProcessos();

async function executaEla() {
  try {
    const resultado = await minhaPromise;
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
}

executaEla();
