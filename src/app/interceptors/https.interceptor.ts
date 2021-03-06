import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpsInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const updatedRequest = this.replaceToHttps(request);
    return next.handle(updatedRequest);
  }

  replaceToHttps(request: HttpRequest<unknown>) {
    return request.clone({
      url: request.url.replace('http://', 'https://')
    });
  }
}
