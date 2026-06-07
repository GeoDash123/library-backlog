import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { request } from 'https';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private pathRequireAuthAuthentication(url: string): boolean {
    const unauthenticatedPaths: string[] = ['/login', '/not-found'];

    if (unauthenticatedPaths.some((path) => url.includes(path))) {
      return false;
    }

    return true;
  }

  //Alatorre Lopez Jose Carlos

  private addToken(
    request: HttpRequest<any>,
    token: string
  ): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const token = sessionStorage.getItem('token') || '';
    const requiredAuth = this.pathRequireAuthAuthentication(req.url);

    req = req.clone({
      setHeaders: {
        'x-api-key': environment.apiKey,
      },
      setParams: {
        project_id: environment.apiId.toString(),
      },
    });

    if (token && requiredAuth) {
      req = this.addToken(req, token);
    }

    return next.handle(req);
  }
}