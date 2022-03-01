import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {

  url = environment.baseUrl;

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const updatedRequest = this.addBaseUrl(request);
    return next.handle(updatedRequest);
  }

  addBaseUrl(request: HttpRequest<unknown>) {
    return request.clone({
      url: `${this.url}${request.url}`
    });
  }
}
