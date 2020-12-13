import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InMemoryDataService } from './in-memory-data.service';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MembersComponent } from './members/members.component';
import { MessagesComponent } from './messages/messages.component';
import { MemberSearchComponent } from './member-search/member-search.component';

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    MemberDetailComponent,
    MessagesComponent,
    DashboardComponent,
    MemberSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
