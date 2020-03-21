export class Coracao {
    constructor(cheio, urlCoracaoCheio = '/assets/coracao_cheio.png', urlCoracaoVazio = '/assets/coracao_vazio.png') {
        this.cheio = cheio;
        this.urlCoracaoCheio = urlCoracaoCheio;
        this.urlCoracaoVazio = urlCoracaoVazio;
    }
    exibeCoracao() {
        if (this.cheio) {
            return this.urlCoracaoCheio;
        }
        else {
            return this.urlCoracaoVazio;
        }
    }
}
//# sourceMappingURL=coracao.model.js.map