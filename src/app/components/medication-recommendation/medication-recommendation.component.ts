import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'e1-medication-recommendation',
  templateUrl: './medication-recommendation.component.html',
  styleUrls: ['./medication-recommendation.component.css']
})
export class MedicationRecommendationComponent implements OnInit {

  @Input() medicationRecommendation = null;

  commentShown :boolean = false;

  constructor() { }

  ngOnInit() {
  }

  get descriptionText() :string
  {
    let text = "";

    if(this.medicationRecommendation["dosageAmount"] <= 0)
    {
      return "";
    }

    if(!this.medicationRecommendation["useSpecificDosageSchema"] && this.medicationRecommendation["dosageAmount"] > 0)
    {
      text += this.medicationRecommendation["dosageAmount"] + this.medicationRecommendation["dosageUnit"] + " ";
    }

    if(!this.medicationRecommendation["unlimitedApplicationDuration"])
    {
      text += " über " + this.medicationRecommendation["dosageDuration"] + " " + this.getDosageDurationUnitText(this.medicationRecommendation["dosageDurationUnit"]); 
    }


    if(this.medicationRecommendation["dosageFrequency"] <= 1) return text;
    text += "(jeden ";
    text += this.medicationRecommendation["dosageFrequency"] + ". ";
    text += "Tag)";

    return text;

  }

  getDosageDurationUnitText(dosage_duration_unit) :string
  {
    let a = [];
    a["minutes"] = "Minuten";        
    a["hours"] = "Stunden";    
    a["days"] = "Tage";
    a["weeks"] = "Wochen";
    a["months"] = "Monate";
    a["years"] = "Jahre";
    return a[dosage_duration_unit];
  }

  toggleComment()
  {
    this.commentShown = !this.commentShown;
  }
}
