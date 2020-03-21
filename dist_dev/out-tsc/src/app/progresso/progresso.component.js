import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let ProgressoComponent = class ProgressoComponent {
    constructor() {
        this.progresso = 0;
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], ProgressoComponent.prototype, "progresso", void 0);
ProgressoComponent = __decorate([
    Component({
        selector: 'app-progresso',
        templateUrl: './progresso.component.html',
        styleUrls: ['./progresso.component.css']
    })
], ProgressoComponent);
export { ProgressoComponent };
//# sourceMappingURL=progresso.component.js.map