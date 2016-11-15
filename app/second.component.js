"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var SecondComponent = (function () {
    function SecondComponent(page) {
        this.page = page;
        // this.page.enableSwipeBackNavigation  = false;
    }
    SecondComponent = __decorate([
        core_1.Component({
            selector: "second",
            template: "\n        <StackLayout>\n            <Label text=\"Second component\" class=\"title\"></Label>\n            <Button text=\"GO TO FIRST\" [nsRouterLink]=\"['/first']\" class=\"link\"></Button>\n        </StackLayout>\n    "
        }), 
        __metadata('design:paramtypes', [page_1.Page])
    ], SecondComponent);
    return SecondComponent;
}());
exports.SecondComponent = SecondComponent;
//# sourceMappingURL=second.component.js.map