import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'e1-original-document-reference',
  templateUrl: './original-document-reference.component.html',
  styleUrls: ['./original-document-reference.component.css']
})
export class OriginalDocumentReferenceComponent implements OnInit {

  @Input() sourceUrl = undefined;
  @Input() sourceRef = undefined;

  constructor() { }

  ngOnInit() {
  }

  get fullLink() :string
  {
    return this.sourceUrl + "#" + this.sourceRef;
  }

}
