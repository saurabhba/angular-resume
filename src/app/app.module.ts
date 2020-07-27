import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FrontendComponent } from './technologies/frontend/frontend.component';
import { BackendComponent } from './technologies/backend/backend.component';
import { DatabasesComponent } from './technologies/databases/databases.component';
import { ToolsComponent } from './technologies/tools/tools.component';
import { HmComponent } from './experience/hm/hm.component';
import { AdtooxComponent } from './experience/adtoox/adtoox.component';
import { SummaryComponent } from './summary/summary.component';
import { ServersComponent } from './technologies/servers/servers.component';
import { TechniaComponent } from './experience/technia/technia.component';
import { CumminsComponent } from './experience/cummins/cummins.component';
import { GeometricComponent } from './experience/geometric/geometric.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FrontendComponent,
    BackendComponent,
    DatabasesComponent,
    ToolsComponent,
    HmComponent,
    AdtooxComponent,
    SummaryComponent,
    ServersComponent,
    TechniaComponent,
    CumminsComponent,
    GeometricComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
