import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'e1-edit-medication-recommendation',
  templateUrl: './edit-medication-recommendation.component.html',
  styleUrls: ['./edit-medication-recommendation.component.css']
})
export class EditMedicationRecommendationComponent implements OnInit {
  @Input() recommendation;

  dosageUnits = [
    "mg",
    "g",
    "ml",
    "l",
    ""
  ];

  dosageDurationUnits = [
    "Sekunden",
    "Minuten",
    "Stunden",
    "Tage",
    "Wochen",
    "Monate",
    "Jahre"
  ]

  constructor() { }

  ngOnInit() {
  }

}
