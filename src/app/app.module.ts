import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextFormComponent } from './components/input-text-form/input-text-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextService } from './services/input-text.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, InputTextFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [InputTextService],
  bootstrap: [AppComponent],
})
export class AppModule {}
