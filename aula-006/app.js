"use strict";
// setInterval(() => {
//   console.log("Olá Alberto");
// }, 1000); // 1000ms === 1s
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    }
    else {
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
function simularProcesso1() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Processo 1 completo"), 2000);
    });
}
function simularProcesso2() {
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
function executaEla() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const resultado = yield minhaPromise;
            console.log(resultado);
        }
        catch (error) {
            console.log(error);
        }
    });
}
executaEla();
