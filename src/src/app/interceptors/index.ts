import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpsInterceptors } from './https.interceptor'
import { NotifyInterceptors } from './notify.interceptor'
import { NoopInterceptors } from './noop.interceptor'

export const httpInterceotorrovidors = [
    { provide: HTTP_INTERCEPTORS, useClass:  HttpsInterceptors, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass:  NoopInterceptors, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass:  NotifyInterceptors, multi: true }
]