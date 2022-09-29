import { Injectable }     from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { RouteDataService } from './route-data.service';

@Injectable()
export class AuthGuard implements CanActivate {

    profile = {
        userid: 14, 
        name: 'Clyde Dorman',
      }
    
      constructor(
        private route : ActivatedRoute,
        private routeData: RouteDataService
    ) {}
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      
      let routeData = this.routeData.getData() || { ownerId: -1 };  
      console.log('>>AuthService->Verifica userul curent ' + JSON.stringify(this.profile) + '; RouteData: ' + JSON.stringify(routeData));
      
      return ( this.profile.userid === routeData.ownerId );    // << true permite sa se acceseze ruta
    }

}
