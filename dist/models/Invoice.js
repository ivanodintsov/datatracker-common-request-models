"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var class_transformer_1 = require("class-transformer");
var Invoice = /** @class */ (function () {
    function Invoice() {
    }
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return String; }),
        __metadata("design:type", String)
    ], Invoice.prototype, "title", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return String; }),
        __metadata("design:type", String)
    ], Invoice.prototype, "description", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return String; }),
        __metadata("design:type", String)
    ], Invoice.prototype, "start_parameter", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return String; }),
        __metadata("design:type", String)
    ], Invoice.prototype, "currency", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return Number; }),
        __metadata("design:type", Number)
    ], Invoice.prototype, "total_amount", void 0);
    Invoice = __decorate([
        class_transformer_1.Exclude()
    ], Invoice);
    return Invoice;
}());
exports.default = Invoice;
//# sourceMappingURL=Invoice.js.map