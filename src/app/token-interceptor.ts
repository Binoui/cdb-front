import { Injectable, Type } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { AppService } from './app.service';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(public appService: AppService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.log("[interceptor] adding token : " + this.appService.getToken());
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${this.appService.getToken()}`
            }
        });
        return next.handle(request);
    }
}