import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class HttpsInterceptors implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(!req.url.includes("todos")){
            return next.handle(req);
    }
    const httpReqs = req.clone({
        url: req.url.replace("http://", "https://")
    });
    return next.handle(httpReqs); 
    }
}