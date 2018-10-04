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

  constructor(private syntaxParser :SyntaxParserService) { }

  ngOnInit() {
    
  }

  get contentHtml() :string
  {
    console.log("------------");
    console.log(this.syntaxRecommendation.content);
    console.log(this.syntaxRecommendation.preDefs);
    let html = this.syntaxParser.getHtmlForSyntax(this.syntaxRecommendation.content, this.syntaxRecommendation.preDefs);
    console.log(html);
    return html;
  }

}
