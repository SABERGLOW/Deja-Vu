import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  /**
   * The face api response object.           
   * @param {any} faceApiResponse - the face api response object.           
   */
  @Input() faceApiResponse: any;

  constructor() { }

  ngOnInit(): void {
  }

}
