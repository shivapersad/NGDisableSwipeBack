"use strict";
var first_component_1 = require("./first.component");
var second_component_1 = require("./second.component");
exports.routes = [
    { path: "", redirectTo: "/first", pathMatch: "full" },
    { path: "first", component: first_component_1.FirstComponent },
    { path: "second", component: second_component_1.SecondComponent }
];
//# sourceMappingURL=app.routes.js.map