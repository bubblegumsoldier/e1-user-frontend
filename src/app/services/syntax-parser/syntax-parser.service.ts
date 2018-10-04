import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SyntaxParserService {

  constructor() {}

  static DEFAULT_ATTRIBUTE = "name";

  getHtmlForSyntax(syntax: string, preDefs: any[]): string {
    let outputHTML = "";
    outputHTML = syntax;

    var regexForDefaultWithNoAttribute = /\{[0-9]+\}/g;


    outputHTML = outputHTML.replace(regexForDefaultWithNoAttribute, (a, b) => {
      return this.replaceUnspecificDefinitionWithSpecificDefinition(a, SyntaxParserService.DEFAULT_ATTRIBUTE);
    });

    var regexForSpecificRef = /\{[0-9]+\|[^(\{|\})]+\}/g;

    
    let results = [];
    
    let match;
    outputHTML = outputHTML.replace(regexForSpecificRef, (a, b) => {
      return this.referenceToHTML(a, preDefs);
    });


    return outputHTML;
  }

  replaceUnspecificDefinitionWithSpecificDefinition(unspecificDefinition: string, defaultAttribute: string): string {
    let numberRegex = /[0-9]+/;
    let number = numberRegex.exec(unspecificDefinition);
    return "{" + number[0] + "|" + defaultAttribute + "}";
  }

  referenceToHTML(referenceString :string, preDefs :any[]) :string
  {
    let html :string = "";

    let id :number = this.getIdFromRefString(referenceString);
    let attribute :string = this.getAttributeFromRefString(referenceString);
    let medicationInPreDef = this.getMedicationInPreDef(id, preDefs);

    html = "<span class='medication_attribute " + attribute + "'>" + medicationInPreDef[attribute] + "</span>";

    return html;
  }

  getIdFromRefString(referenceString :string) :number
  {
    return parseInt(referenceString.match(/[0-9]+/)[0]);
  }

  getAttributeFromRefString(referenceString :string) :string
  {
    return referenceString.split("|")[1].replace("}", "");
  }

  getMedicationInPreDef(id :number, preDefs :any) :any
  {
    for(var i = 0;i < preDefs.length; ++i)
    {
      if(preDefs[i].refId == id) return preDefs[i];
    }
    return null;
  }
}
