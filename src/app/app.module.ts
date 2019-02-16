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
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { SearchHandlerService } from './services/search-handler/search-handler.service';
import { SyntaxParserService } from './services/syntax-parser/syntax-parser.service';
import { AuthService } from './services/auth/auth.service';
import { GenericRecommendationComponent } from './components/generic-recommendation/generic-recommendation.component';
import { GroupRecommendationComponent } from './components/group-recommendation/group-recommendation.component';
import { SyntaxRecommendationComponent } from './components/syntax-recommendation/syntax-recommendation.component';
import { LoeIconComponent } from './components/loe-icon/loe-icon.component';
import { OriginalDocumentReferenceComponent } from './components/original-document-reference/original-document-reference.component';
import { CookieService } from 'ngx-cookie-service';
import { ProtectedDirective } from './directives/protected/protected.directive';
import { SimpleProtectedDirective } from './directives/simple-protected/simple-protected.directive';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './services/auth-interceptor/auth.interceptor';
import { InsertionService } from './services/insertion/insertion.service';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { WriteProtectedDirective } from './directives/write-protected/write-protected.directive';
import { AdminComponent } from './components/admin/admin.component';
import { AbstractGuidelineListComponent } from './components/abstract-guideline-list/abstract-guideline-list.component';
import { GuidelineListComponent } from './admin-components/guideline-list/guideline-list.component';
import { EditGuidelineComponent } from './admin-components/edit-guideline/edit-guideline.component';

import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditLevelListComponent } from './admin-components/edit-level-list/edit-level-list.component';
import { EditLevelComponent } from './admin-components/edit-level/edit-level.component'; // this is needed!
import { AngularEditorModule } from '@kolkov/angular-editor';
import { EditRecommendationListComponent } from './admin-components/edit-recommendation-list/edit-recommendation-list.component';
import { EditGenericRecommendationComponent } from './admin-components/edit-generic-recommendation/edit-generic-recommendation.component';
import { EditMedicationRecommendationComponent } from './admin-components/edit-medication-recommendation/edit-medication-recommendation.component';
import { EditFreeTextRecommendationComponent } from './admin-components/edit-free-text-recommendation/edit-free-text-recommendation.component';
import { EditGroupRecommendationComponent } from './admin-components/edit-group-recommendation/edit-group-recommendation.component';
import { EditSyntaxRecommendationComponent } from './admin-components/edit-syntax-recommendation/edit-syntax-recommendation.component';
import { EditPreDefListComponent } from './admin-components/edit-pre-def-list/edit-pre-def-list.component';
import { NgDragDropModule } from 'ng-drag-drop';
import { AllGuidelinesComponent } from './components/all-guidelines/all-guidelines.component';

const appRoutes :Routes = [
  {
    path: 'results/all',
    component: AllGuidelinesComponent
  },
  {
    path: 'results',
    component: ResultListComponent
  },
  {
    path: 'guideline/:id',
    component: GuidelineComponent
  },
  {
    path: "auth/login",
    pathMatch: "full",
    component: LoginComponent
  },
  {
    path: "auth",
    pathMatch: "full",
    redirectTo: "auth/login"
  },
  {
    path: 'admin/edit/guideline/:id',
    component: EditGuidelineComponent
  },
  {
    path: 'admin',
    component: AdminComponent
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
    SyntaxRecommendationComponent,
    LoeIconComponent,
    OriginalDocumentReferenceComponent,
    ProtectedDirective,
    LoginComponent,
    SafeHtmlPipe,
    WriteProtectedDirective,
    SimpleProtectedDirective,
    AdminComponent,
    AbstractGuidelineListComponent,
    GuidelineListComponent,
    EditGuidelineComponent,
    EditLevelListComponent,
    EditLevelComponent,
    EditRecommendationListComponent,
    EditGenericRecommendationComponent,
    EditMedicationRecommendationComponent,
    EditFreeTextRecommendationComponent,
    EditGroupRecommendationComponent,
    EditSyntaxRecommendationComponent,
    EditPreDefListComponent,
    AllGuidelinesComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule,
    HttpClientModule,
    HttpModule,
    TagInputModule,
    BrowserAnimationsModule,
    AngularEditorModule,
    NgDragDropModule.forRoot()

  ],
  providers: [
    HttpClientModule,
    SearchHandlerService,
    SyntaxParserService,
    AuthService,
    CookieService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi   : true,
    },
    InsertionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
