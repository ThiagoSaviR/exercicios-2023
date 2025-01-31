import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { UserComponent } from './components/user/user.component';
import { PageContentComponent } from './components/page-content/page-content.component';
import { SummaryComponent } from './components/summary/summary.component';
import { DetailComponent } from './components/detail/detail.component';
import { DiscussionsComponent } from './components/discussions/discussions.component';
import { FormComponent } from './components/form/form.component';

import { AnswersComponent } from './components/answers/answers.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    LanguageSelectorComponent,
    UserComponent,
    PageContentComponent,
    SummaryComponent,
    DetailComponent,
    DiscussionsComponent,
    FormComponent,
    AnswersComponent,
    FooterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
