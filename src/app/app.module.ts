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
import { GuidelineListComponent } from './admin-components/guideline-admin/guideline-list/guideline-list.component';
import { EditGuidelineComponent } from './admin-components/guideline-admin/edit-guideline/edit-guideline.component';

import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditLevelListComponent } from './admin-components/guideline-admin/edit-level-list/edit-level-list.component';
import { EditLevelComponent } from './admin-components/guideline-admin/edit-level/edit-level.component'; // this is needed!
import { AngularEditorModule } from '@kolkov/angular-editor';
import { EditRecommendationListComponent } from './admin-components/guideline-admin/edit-recommendation-list/edit-recommendation-list.component';
import { EditGenericRecommendationComponent } from './admin-components/guideline-admin/edit-generic-recommendation/edit-generic-recommendation.component';
import { EditMedicationRecommendationComponent } from './admin-components/guideline-admin/edit-medication-recommendation/edit-medication-recommendation.component';
import { EditFreeTextRecommendationComponent } from './admin-components/guideline-admin/edit-free-text-recommendation/edit-free-text-recommendation.component';
import { EditGroupRecommendationComponent } from './admin-components/guideline-admin/edit-group-recommendation/edit-group-recommendation.component';
import { EditSyntaxRecommendationComponent } from './admin-components/guideline-admin/edit-syntax-recommendation/edit-syntax-recommendation.component';
import { EditPreDefListComponent } from './admin-components/guideline-admin/edit-pre-def-list/edit-pre-def-list.component';
import { NgDragDropModule } from 'ng-drag-drop';
import { AllGuidelinesComponent } from './components/all-guidelines/all-guidelines.component';
import { GuidelinesEditOverviewComponent } from './admin-components/guideline-admin/guidelines-edit-overview/guidelines-edit-overview.component';
import { AccessUnitEditOverviewComponent } from './admin-components/access-unit-admin/access-unit-edit-overview/access-unit-edit-overview.component';
import { AccessUnitListComponent } from './admin-components/access-unit-admin/access-unit-list/access-unit-list.component';
import { AccessUnitManagerService } from './services/access-unit-manager/access-unit-manager.service';
import { EditAccessUnitComponent } from './admin-components/access-unit-admin/edit-access-unit/edit-access-unit.component';
import { UserAdminOverviewComponent } from './admin-components/user-admin/user-admin-overview/user-admin-overview.component';
import { UserListComponent } from './admin-components/user-admin/user-list/user-list.component';

import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { EditUserComponent } from './admin-components/user-admin/edit-user/edit-user.component';
import { UserManagerService } from './services/user-manager/user-manager.service';
import { AccessUnitSelectionListComponent } from './admin-components/access-unit-admin/access-unit-selection-list/access-unit-selection-list.component';
import { AdminProtectedDirective } from './directives/admin-protected/admin-protected.directive';
import { DiagramEditorModule } from './lib/modules/diagram-editor/diagram-editor.module';
import { EditLevelLinkComponent } from './admin-components/guideline-admin/edit-level-link/edit-level-link.component';
import { GuidelineLevelIteratorService } from './services/guideline-level-iterator/guideline-level-iterator.service';
import { CovidGuidelineComponent } from './components/covid-guideline/covid-guideline.component';

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
    path: 'admin/edit/accessUnit/:id',
    component: EditAccessUnitComponent
  },
  {
    path: 'admin/edit/user/:id',
    component: EditUserComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "guidelines"
      },
      {
        path: 'guidelines',
        component: GuidelinesEditOverviewComponent,
      },
      {
        path: 'accessUnits',
        component: AccessUnitEditOverviewComponent,
      },
      {
        path: 'users',
        component: UserAdminOverviewComponent
      }
    ]
  },
  {
    path: '',
    component: CovidGuidelineComponent
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
    AllGuidelinesComponent,
    GuidelinesEditOverviewComponent,
    AccessUnitEditOverviewComponent,
    AccessUnitListComponent,
    EditAccessUnitComponent,
    UserAdminOverviewComponent,
    UserListComponent,
    EditUserComponent,
    AccessUnitSelectionListComponent,
    AdminProtectedDirective,
    EditLevelLinkComponent,
    CovidGuidelineComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule,
    HttpClientModule,
    TagInputModule,
    BrowserAnimationsModule,
    AngularEditorModule,
    NgDragDropModule.forRoot(),
    NgxDatatableModule,
    DiagramEditorModule
  ],
  providers: [
    HttpClientModule,
    SearchHandlerService,
    SyntaxParserService,
    // AuthService,
    CookieService,
    // {
    //   provide : HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi   : true,
    // },
    InsertionService,
    AccessUnitManagerService,
    UserManagerService,
    GuidelineLevelIteratorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
