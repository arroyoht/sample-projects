import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { PanelComponent } from './components/panel/panel.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { UserSectionComponent } from './components/sections/user-section/user-section.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopMenuComponent,
    BreadcrumbComponent,
    PanelComponent,
    SectionTitleComponent,
    UserSectionComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
