import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { SyntaxParserService } from 'src/app/services/syntax-parser/syntax-parser.service';

@Component({
  selector: 'e1-syntax-recommendation',
  templateUrl: './syntax-recommendation.component.html',
  styleUrls: ['./syntax-recommendation.component.css'],
  providers: [SyntaxParserService],
  encapsulation: ViewEncapsulation.None

})
export class SyntaxRecommendationComponent implements OnInit {

  @Input() syntaxRecommendation = null;

  commentShown :boolean = false;

  constructor(private syntaxParser :SyntaxParserService) { }

  ngOnInit() {
    
  }

  get contentHtml() :string
  {
    let html = this.syntaxParser.getHtmlForSyntax(this.syntaxRecommendation.content, this.syntaxRecommendation.preDefs);
    return html;
  }

  toggleComment()
  {
    this.commentShown = !this.commentShown;
  }

}
