import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { Coracao } from '../shared/coracao.model';
let TentativasComponent = class TentativasComponent {
    constructor() {
        this.coracoes = [
            new Coracao(true), new Coracao(true), new Coracao(true)
        ];
    }
    ngOnChanges() {
        //this.tentativas
        //this.coracoes.lenght
        if (this.tentativas !== this.coracoes.length) {
            let indice = this.coracoes.length - this.tentativas;
            this.coracoes[indice - 1].cheio = false;
        }
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], TentativasComponent.prototype, "tentativas", void 0);
TentativasComponent = __decorate([
    Component({
        selector: 'app-tentativas',
        templateUrl: './tentativas.component.html',
        styleUrls: ['./tentativas.component.css']
    })
], TentativasComponent);
export { TentativasComponent };
//# sourceMappingURL=tentativas.component.js.map