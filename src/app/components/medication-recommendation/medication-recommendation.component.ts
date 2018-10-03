import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'e1-medication-recommendation',
  templateUrl: './medication-recommendation.component.html',
  styleUrls: ['./medication-recommendation.component.css']
})
export class MedicationRecommendationComponent implements OnInit {

  @Input() medicationRecommendation = null;

  constructor() { }

  ngOnInit() {
  }

  get descriptionText() :string
  {
    let text = "";

    if(!this.medicationRecommendation["use_specific_dosage_schema"])
    {
      text += this.medicationRecommendation["dosage_amount"] + this.medicationRecommendation["dosage_unit"] + " ";
    }

    text += "jeden ";

    if(this.medicationRecommendation["dosage_freq"] > 1)
    {
      text += this.medicationRecommendation["dosage_freq"] + ". ";
    }

    text += "Tag";

    if(!this.medicationRecommendation["unlimited_application_duration"])
    {
      text += " über " + this.medicationRecommendation["dosage_duration"] + " " + this.getDosageDurationUnitText(this.medicationRecommendation["dosage_duration_unit"]); 
    }

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

}
