import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { BrowsingComponent } from './components/browsing/browsing.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { AccountQuickAccessComponent } from './components/account-quick-access/account-quick-access.component';
import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { ResultListComponent } from './components/result-list/result-list.component';
import { GuidelineComponent } from './components/guideline/guideline.component';
import { FormsModule } from '@angular/forms';


const appRoutes :Routes = [
  {
    path: 'results',
    component: ResultListComponent
  },
  {
    path: 'guideline/:id',
    component: GuidelineComponent
  },
  {
    path: '',
    component: FrontpageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BrowsingComponent,
    HeaderComponent,
    SearchInputComponent,
    AccountQuickAccessComponent,
    FrontpageComponent,
    ResultListComponent,
    GuidelineComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
