import { Component, OnInit } from '@angular/core';
import { JournalEntriesServices } from '../services/journal-entries.services';


@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  eList: Array<any>

  constructor(
    private jE:JournalEntriesServices
  ) { 
    this.jE.getList().subscribe( list => this.eList = list );
  }

  ngOnInit() {
  }
}
