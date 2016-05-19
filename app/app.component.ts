import { Component } from '@angular/core';
// 配置Router相关
import { Route, Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { NavRouterDemo } from './demo/nav_router_demo/nav_router_demo';
import { Demo2Demo } from './demo/demo2/demo2.demo';
import { Demo3Demo } from './demo/demo3/demo3.demo';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
  ],
})

@Routes([
  new Route({ path: '/nav_router_demo', component: NavRouterDemo }),
  new Route({ path: '/demo2', component: Demo2Demo }),
  new Route({ path: '/demo3', component: Demo3Demo }),
])

export class AppComponent {

}
