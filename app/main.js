"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var router_1 = require("nativescript-angular/router");
var app_routes_1 = require("./app.routes");
var first_component_1 = require("./first.component");
var second_component_1 = require("./second.component");
var AppComponentModule = (function () {
    function AppComponentModule() {
    }
    AppComponentModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, first_component_1.FirstComponent, second_component_1.SecondComponent],
            entryComponents: [first_component_1.FirstComponent, second_component_1.SecondComponent],
            bootstrap: [app_component_1.AppComponent],
            imports: [platform_1.NativeScriptModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(app_routes_1.routes)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponentModule);
    return AppComponentModule;
}());
platform_1.platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
//# sourceMappingURL=main.js.map