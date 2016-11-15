"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var FirstComponent = (function () {
    function FirstComponent(page) {
        this.page = page;
        this.page.enableSwipeBackNavigation = false;
    }
    FirstComponent = __decorate([
        core_1.Component({
            selector: "first",
            template: "\n        <StackLayout>\n            <Label text=\"First component\" class=\"title\"></Label>\n            <Button text=\"GO TO SECOND\" [nsRouterLink]=\"['/second']\" class=\"link\"></Button>\n        </StackLayout>\n    "
        }), 
        __metadata('design:paramtypes', [page_1.Page])
    ], FirstComponent);
    return FirstComponent;
}());
exports.FirstComponent = FirstComponent;
//# sourceMappingURL=first.component.js.map