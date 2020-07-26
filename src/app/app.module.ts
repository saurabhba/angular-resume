import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FrontendComponent } from './technologies/frontend/frontend.component';
import { BackendComponent } from './technologies/backend/backend.component';
import { DatabasesComponent } from './technologies/databases/databases.component';
import { ToolsComponent } from './technologies/tools/tools.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FrontendComponent,
    BackendComponent,
    DatabasesComponent,
    ToolsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
