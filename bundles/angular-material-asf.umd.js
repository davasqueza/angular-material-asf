(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material')) :
    typeof define === 'function' && define.amd ? define('angular-material-asf', ['exports', '@angular/core', '@angular/material'], factory) :
    (factory((global['angular-material-asf'] = {}),global.ng.core,global.ng.material));
}(this, (function (exports,i0,material) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/angular-material-asf.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AngularMaterialAsfService = /** @class */ (function () {
        function AngularMaterialAsfService() {
        }
        AngularMaterialAsfService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        AngularMaterialAsfService.ctorParameters = function () { return []; };
        /** @nocollapse */ AngularMaterialAsfService.ngInjectableDef = i0.defineInjectable({ factory: function AngularMaterialAsfService_Factory() { return new AngularMaterialAsfService(); }, token: AngularMaterialAsfService, providedIn: "root" });
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
            { type: i0.Component, args: [{
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
            { type: i0.NgModule, args: [{
                        declarations: [AngularMaterialAsfComponent],
                        imports: [
                            material.MatFormFieldModule,
                            material.MatInputModule
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

    exports.AngularMaterialAsfService = AngularMaterialAsfService;
    exports.AngularMaterialAsfComponent = AngularMaterialAsfComponent;
    exports.AngularMaterialAsfModule = AngularMaterialAsfModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=angular-material-asf.umd.js.map