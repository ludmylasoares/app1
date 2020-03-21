import { __decorate } from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { FRASES } from './frases-mock';
let PainelComponent = class PainelComponent {
    constructor() {
        this.frases = FRASES;
        this.instrucao = 'Traduza as 4 frases:';
        this.resposta = '';
        this.rodada = 0;
        this.progresso = 0;
        this.tentativas = 3;
        this.encerrarJogo = new EventEmitter();
        this.rodadaFrase = this.frases[this.rodada];
        console.log(this.rodadaFrase);
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
    atualizaResposta(resposta) {
        this.resposta = resposta.target.value;
        //console.log(this.resposta)
    }
    verificarResposta() {
        if (this.rodadaFrase.frasePtBr == this.resposta) {
            //trocar pergunta da rodada
            this.rodada++;
            //progresso
            this.progresso = this.progresso + (100 / this.frases.length);
            //
            if (this.rodada === 4) {
                this.encerrarJogo.emit('vitoria');
            }
            //atualiza o objeto rodadaFrase
            this.atualizaRodada();
        }
        else {
            //diminuir a variável tentativas
            this.tentativas--;
            if (this.tentativas === -1) {
                this.encerrarJogo.emit('derrota');
            }
        }
    }
    atualizaRodada() {
        //define a frase da rodada com base em alguma lógica
        this.rodadaFrase = this.frases[this.rodada];
        //limpar a resposta
        this.resposta = '';
    }
};
__decorate([
    Output()
], PainelComponent.prototype, "encerrarJogo", void 0);
PainelComponent = __decorate([
    Component({
        selector: 'app-painel',
        templateUrl: './painel.component.html',
        styleUrls: ['./painel.component.css']
    })
], PainelComponent);
export { PainelComponent };
//# sourceMappingURL=painel.component.js.map