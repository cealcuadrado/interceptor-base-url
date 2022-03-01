import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { ErrorHandleInterceptor } from './interceptors/error-handle.interceptor';

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorHandleInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
