import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { routes } from './routes'
import { JournalEntriesServices } from './services/journal-entries.services';
import { SingleEntryComponent } from './single-entry/single-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    SingleEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [JournalEntriesServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
