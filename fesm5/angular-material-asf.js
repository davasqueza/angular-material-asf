import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-material-asf.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AngularMaterialAsfService = /** @class */ (function () {
    function AngularMaterialAsfService() {
    }
    AngularMaterialAsfService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AngularMaterialAsfService.ctorParameters = function () { return []; };
    /** @nocollapse */ AngularMaterialAsfService.ngInjectableDef = defineInjectable({ factory: function AngularMaterialAsfService_Factory() { return new AngularMaterialAsfService(); }, token: AngularMaterialAsfService, providedIn: "root" });
    return AngularMaterialAsfService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-material-asf.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AngularMaterialAsfComponent = /** @class */ (function () {
    function AngularMaterialAsfComponent() {
    }
    /**
     * @return {?}
     */
    AngularMaterialAsfComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    AngularMaterialAsfComponent.decorators = [
        { type: Component, args: [{
                    selector: 'asf-angular-material-asf',
                    template: "<div class=\"example-full-width\">\r\n  <mat-form-field>\r\n    <mat-label>Basic input</mat-label>\r\n    <input matInput placeholder=\"Ex. Pizza\" value=\"Sushi\">\r\n  </mat-form-field>\r\n</div>\r\n",
                    styles: [":host ::ng-deep .example-full-width .mat-form-field-infix{border:1px solid #000;border-radius:5px}"]
                }] }
    ];
    /** @nocollapse */
    AngularMaterialAsfComponent.ctorParameters = function () { return []; };
    return AngularMaterialAsfComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-material-asf.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AngularMaterialAsfModule = /** @class */ (function () {
    function AngularMaterialAsfModule() {
    }
    AngularMaterialAsfModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [AngularMaterialAsfComponent],
                    imports: [
                        MatFormFieldModule,
                        MatInputModule
                    ],
                    exports: [AngularMaterialAsfComponent]
                },] }
    ];
    return AngularMaterialAsfModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: angular-material-asf.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AngularMaterialAsfService, AngularMaterialAsfComponent, AngularMaterialAsfModule };

//# sourceMappingURL=angular-material-asf.js.map