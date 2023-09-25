import { Routes as BaseRoutes } from '@angular/router';

type BaseRoute = BaseRoutes[0];
interface RouteWithParams extends Omit<BaseRoute, 'title'> {
  id?: number;
  showInNav: boolean;
  title?: string;
}
export type Routes = Array<RouteWithParams>
export type Route = RouteWithParams
