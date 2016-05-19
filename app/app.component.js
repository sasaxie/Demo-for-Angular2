var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
// 配置Router相关
var router_1 = require('@angular/router');
var nav_router_demo_1 = require('./demo/nav_router_demo/nav_router_demo');
var demo2_demo_1 = require('./demo/demo2/demo2.demo');
var demo3_demo_1 = require('./demo/demo3/demo3.demo');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES,
            ],
        }),
        router_1.Routes([
            new router_1.Route({ path: '/nav_router_demo', component: nav_router_demo_1.NavRouterDemo }),
            new router_1.Route({ path: '/demo2', component: demo2_demo_1.Demo2Demo }),
            new router_1.Route({ path: '/demo3', component: demo3_demo_1.Demo3Demo }),
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map