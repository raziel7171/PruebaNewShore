import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HouseComponent } from './house/house.component';
import { APP_ROUTING } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { MembersService } from './services/members.service';
import { FilterService, GridModule, GroupService, PagerModule, SortService, } from '@syncfusion/ej2-angular-grids';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    HouseComponent,
    HeaderComponent
    
  ],
  imports: [
    NgxDatatableModule,
    BrowserModule,
    GridModule, PagerModule,
    // InMemoryWebApiModule.forRoot(MembersService),
    APP_ROUTING,
    HttpClientModule
  ],
  providers: [MembersService, SortService, FilterService, GroupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
