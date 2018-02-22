import { Component, OnInit } from '@angular/core';
import { JournalEntriesServices } from '../services/journal-entries.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {

  eList: Array<any>;
  entry: any;
  constructor(
    private jE: JournalEntriesServices,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getEntryDetails(params['id']);
    })
  }

  getEntryDetails(id) {
    this.jE.getOne(id)
      .subscribe((entry) => {
        this.entry = entry;
      })
    }
}
