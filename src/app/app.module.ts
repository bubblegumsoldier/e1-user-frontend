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
import { LevelComponent } from './components/level/level.component';
import { FreeTextRecommendationComponent } from './components/free-text-recommendation/free-text-recommendation.component';
import { MedicationRecommendationComponent } from './components/medication-recommendation/medication-recommendation.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { SearchHandlerService } from './services/search-handler/search-handler.service';
import { SyntaxParserService } from './services/syntax-parser/syntax-parser.service';
import { GenericRecommendationComponent } from './components/generic-recommendation/generic-recommendation.component';
import { GroupRecommendationComponent } from './components/group-recommendation/group-recommendation.component';
import { SyntaxRecommendationComponent } from './components/syntax-recommendation/syntax-recommendation.component';

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
    GuidelineComponent,
    LevelComponent,
    FreeTextRecommendationComponent,
    MedicationRecommendationComponent,
    GenericRecommendationComponent,
    GroupRecommendationComponent,
    SyntaxRecommendationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    HttpClientModule,
    SearchHandlerService,
    SyntaxParserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
