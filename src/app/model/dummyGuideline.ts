export const dummyGuideline = {
    "_id" : "5b9a24d03f94222d20e67da2",
    "keywords" : [
            "diabetes",
            "diabetes mellitus",
            "zucker",
            "typ-2",
            "typ 2",
            "typ-2-diabetes"
    ],
    "active" : "true",
    //"institution_name" : "MIT",
    //"recommended_for" : "Mannheim Hospital",
    "publisher" : "Programm für Nationale Versorgung",
    "diagnosis" : "Typ-2-Diabetes",
    "name_of_guideline" : "Therapie des Typ-2-Diabetes",
    "source" : "https://www.awmf.org/leitlinien/detail/ll/nvl-001g.html",
    "valid_until" : new Date("2018-08-01T00:00:00Z"),
    "internal_author" : "Johann Rink",
    "level" : [
        {
            "level" : [
                
            ],
            "recommendations": [
                {
                    "type": "group",
                    "title": "Basistherapie (Schulung, Ernährungstherapie, körperliche Aktivität, Raucher-Entwöhnung, Behandlung weiterer Risikofaktoren)",
                    "primaryRecommendation": true,
                    "recommendations": 
                    [
                        {
                            "type": "freeText",
                            "title": "",
                            "content": "Strukturiertes, evaluiertes Zielgruppen und Themenspezifisches Schulungs- und Behandlungszentrum",
                            "grade_of_evidence": "a",
                            "grade_of_recommendation": "2",
                            "primaryRecommendation": true,
                            "comment": "",
                            "hideOnSublevelSelect": false
                        },
                        {
                            "type": "freeText",
                            "title": "",
                            "content": "Ernährungsempfehlungen (gesunde, ausgewogene Kostform, keine Diabetesnahrung)",
                            "grade_of_evidence": "a",
                            "grade_of_recommendation": "2",
                            "primaryRecommendation": true,
                            "comment": "",
                            "hideOnSublevelSelect": false
                        },
                        {
                            "type": "freeText",
                            "title": "",
                            "content": "Ernährungsberatung: Individuelle Ernährungsberatung anbieten",
                            "grade_of_evidence": "a",
                            "grade_of_recommendation": "2",
                            "primaryRecommendation": true,
                            "comment": "",
                            "hideOnSublevelSelect": false
                        },
                        {
                            "type": "freeText",
                            "title": "",
                            "content": "Ausarbeitung eines individuellen Selbstmanagementplans",
                            "grade_of_evidence": "a",
                            "grade_of_recommendation": "2",
                            "primaryRecommendation": true,
                            "comment": "",
                            "hideOnSublevelSelect": false
                        },
                        {
                            "type": "freeText",
                            "title": "",
                            "content": "Körperliche Aktivität: Individuelle Zielfestlegung",
                            "grade_of_evidence": "a",
                            "grade_of_recommendation": "2",
                            "primaryRecommendation": true,
                            "comment": "",
                            "hideOnSublevelSelect": false
                        },
                        {
                            "type": "freeText",
                            "title": "",
                            "content": "Tabakentwöhnung",
                            "grade_of_evidence": "a",
                            "grade_of_recommendation": "2",
                            "primaryRecommendation": true,
                            "comment": "",
                            "hideOnSublevelSelect": false
                        }
                    ]
                },
                {
                    "type": "freeText",
                    "title": "",
                    "content": "Kein Erfolg zu erwarten: Direkt Stufe 2",
                    "grade_of_evidence": "a",
                    "grade_of_recommendation": "2",
                    "primaryRecommendation": true,
                    "comment": "",
                    "hideOnSublevelSelect": false
                },
                {
                    "type": "freeText",
                    "title": "",
                    "content": "Minimale Wirkstoffdosis erfolgreich: Auslassversuch unter HbA1C Kontrolle",
                    "grade_of_evidence": "a",
                    "grade_of_recommendation": "2",
                    "primaryRecommendation": true,
                    "comment": "",
                    "hideOnSublevelSelect": false
                },
                {
                    "type": "freeText",
                    "title": "",
                    "content": "Indikation für Plasmaglukose-Selbstmessung prüfen (Link S. 33)",
                    "grade_of_evidence": "a",
                    "grade_of_recommendation": "2",
                    "primaryRecommendation": true,
                    "comment": "",
                    "hideOnSublevelSelect": false
                }
            ],
            "level_name" : "Stufe 1: Diagnostizierter Typ-2-Diabetes Mellitus",
            "level_id" : "06781160-b732-11e8-8097-87b5bf74cf76",
            "definition": "Diagnosekriterien über klinische Untersuchung oder über Algorithmus zur Diagnose eines Typ-2-Diabetes (Link S.27)"
        },
        {
            "level": [
                {
                    "level_name" : "Metformin Unverträglichkeit / Kontraindikationen?",
                    "level_id" : "06781160-b732-11e8-8097-87b5bf74cf76",
                    "definition": "",
                    "recommendations": [
                        {
                            "type": "freeText",
                            "title": "Empfohlen von DEGAM/AkdÄ",
                            "primaryRecommendation": true,
                            "hideOnSublevelSelect": true,
                            "content": "Basistherapie mit Humaninsulin",
                            "grade_of_evidence" : "a",
                            "grade_of_recommendation" : "2"
                        },
                        {
                            "type": "syntax",
                            "title": "Empfohlen von DEGAM/AkdÄ",
                            "primaryRecommendation": true,
                            "hideOnSublevelSelect": true,
                            "grade_of_evidence" : "a",
                            "grade_of_recommendation" : "2",
                            "content": "Basistherapie mit {0}",
                            "preDefs": 
                            [
                                {
                                    "type": "medication",
                                    "name" : "Glibenclamid (Sulfonylharnstoff)",
                                    "refId": 0,
                                    "comment" : "(positiver Nutzennachweiß)",
                                    "active_substance" : "",
                                    "dosage_amount" : "0",
                                    "dosage_unit" : "ml",
                                    "use_specific_dosage_schema": true,
                                    "morning_dosage" : "0",
                                    "noon_dosage" : "0",
                                    "evening_dosage" : "0",
                                    "night_dosage" : "0",
                                    "dosage_freq" : "0",
                                    "dosage_duration" : "0",
                                    "dosage_duration_unit" : "days",
                                    "unlimited_application_duration": true
                                }
                            ]
                        },
                        {
                            "type": "syntax",
                            "title": "Empfohlen von DEGAM/AkdÄ",
                            "primaryRecommendation": false,
                            "hideOnSublevelSelect": true,
                            "content": "Basistherapie mit DPP-4-Inhibitor",
                            "grade_of_evidence" : "a",
                            "grade_of_recommendation" : "2"
                        },
                        {
                            "type": "syntax",
                            "title": "Empfohlen von DEGAM/AkdÄ",
                            "primaryRecommendation": false,
                            "hideOnSublevelSelect": true,
                            "grade_of_evidence" : "a",
                            "grade_of_recommendation" : "2",
                            "content": "Basistherapie mit weitere Sulfonylharnstoffe / Glinid"
                        },
                        {
                            "type": "syntax",
                            "title": "Empfohlen von DDG/DGIM",
                            "primaryRecommendation": true,
                            "hideOnSublevelSelect": true,
                            "content": "Basistherapie mit DPP-4-Inhibitor",
                            "grade_of_evidence" : "a",
                            "grade_of_recommendation" : "2"
                        },
                        {
                            "type": "syntax",
                            "title": "Empfohlen von DDG/DGIM",
                            "primaryRecommendation": true,
                            "hideOnSublevelSelect": true,
                            "grade_of_evidence" : "a",
                            "grade_of_recommendation" : "2",
                            "content": "Basistherapie mit Insulin (häufig Verzögerungsinsuline)"
                        },
                        {
                            "type": "syntax",
                            "title": "Empfohlen von DDG/DGIM",
                            "primaryRecommendation": true,
                            "hideOnSublevelSelect": true,
                            "content": "Basistherapie mit SGLT-2-Inhibitor",
                            "grade_of_evidence" : "a",
                            "grade_of_recommendation" : "2"
                        },
                        {
                            "type": "syntax",
                            "title": "Empfohlen von DDG/DGIM",
                            "primaryRecommendation": true,
                            "hideOnSublevelSelect": true,
                            "grade_of_evidence" : "a",
                            "grade_of_recommendation" : "2",
                            "content": "Basistherapie mit Sulfonylharnstoff / Glinid"
                        },
                        {
                            "type": "syntax",
                            "title": "Empfohlen von DDG/DGIM",
                            "primaryRecommendation": false,
                            "hideOnSublevelSelect": true,
                            "grade_of_evidence" : "a",
                            "grade_of_recommendation" : "2",
                            "content": "Basistherapie mit Glukosidasehemmer"
                        },
                        {
                            "type": "syntax",
                            "title": "Empfohlen von DDG/DGIM",
                            "primaryRecommendation": false,
                            "hideOnSublevelSelect": true,
                            "grade_of_evidence" : "a",
                            "grade_of_recommendation" : "2",
                            "content": "Basistherapie mit {0}",
                            "preDefs": 
                            [
                                {
                                    "refId": 0,
                                    "type": "medication",
                                    "name" : "Pioglitazon",
                                    "comment" : "",
                                    "active_substance" : "Metformin",
                                    "dosage_amount" : "0",
                                    "dosage_unit" : "ml",
                                    "use_specific_dosage_schema": true,
                                    "morning_dosage" : "0",
                                    "noon_dosage" : "0",
                                    "evening_dosage" : "0",
                                    "night_dosage" : "0",
                                    "dosage_freq" : "0",
                                    "dosage_duration" : "0",
                                    "dosage_duration_unit" : "days",
                                    "unlimited_application_duration": true
                                }
                            ]
                        }
                    ]
                }
            ],
            "recommendations" : [
                {
                    "type": "syntax",
                    "title": "",
                    "primaryRecommendation": true,
                    "hideOnSublevelSelect": true,
                    "grade_of_evidence" : "a",
                    "grade_of_recommendation" : "2",
                    "content": "Basistherapie mit {0}",
                    "preDefs": 
                    [
                        {
                            "refId": 0,
                            "type": "medication",
                            "name" : "Metformin",
                            "grade_of_evidence" : "a",
                            "grade_of_recommendation" : "2",
                            "comment" : "",
                            "active_substance" : "Metformin",
                            "dosage_amount" : "0",
                            "dosage_unit" : "ml",
                            "use_specific_dosage_schema": true,
                            "morning_dosage" : "0",
                            "noon_dosage" : "0",
                            "evening_dosage" : "0",
                            "night_dosage" : "0",
                            "dosage_freq" : "0",
                            "dosage_duration" : "0",
                            "dosage_duration_unit" : "days",
                            "unlimited_application_duration": true
                        }
                    ]
                }
            ],
            "level_name" : "Stufe 2: Therapierefraktärer Typ-2-Diabetes Mellitus auf Basistherapie über 3-6 Monate",
            "level_id" : "06781160-b732-11e8-8097-87b5bf74cf76",
            "definition": "Individueller HbA1c nach 3-6 Monaten nicht erreicht oder primär aussichtslos"
        },
        {
            "level" : [
                
            ],
            "recommendations": [
                {
                    "type": "medication",
                    "name" : "Insulin",
                    "grade_of_evidence" : "a",
                    "grade_of_recommendation" : "2",
                    "comment" : "",
                    "active_substance" : "Metformin",
                    "dosage_amount" : "0",
                    "dosage_unit" : "ml",
                    "use_specific_dosage_schema": true,
                    "morning_dosage" : "0",
                    "noon_dosage" : "0",
                    "evening_dosage" : "0",
                    "night_dosage" : "0",
                    "dosage_freq" : "0",
                    "dosage_duration" : "0",
                    "dosage_duration_unit" : "days",
                    "unlimited_application_duration": true
                },
                {
                    "type": "group",
                    "title": "Empfohlen von DEGAM/AkdÄ",
                    "primaryRecommendation": true,
                    "hideOnSublevelSelect": true,
                    "comment": "Method. zuverlässige klin. Endpunktstudien, Nachteil Hypoglykämie, Gesichtszunahme",
                    "recommendations": 
                    [
                        {
                            "type": "medication",
                            "name" : "Metformin",
                            "grade_of_evidence" : "a",
                            "grade_of_recommendation" : "2",
                            "comment" : "",
                            "active_substance" : "Metformin",
                            "dosage_amount" : "20",
                            "dosage_unit" : "mg",
                            "use_specific_dosage_schema": true,
                            "morning_dosage" : "1",
                            "noon_dosage" : "0",
                            "evening_dosage" : "1.5",
                            "night_dosage" : "1",
                            "dosage_freq" : "1",
                            "dosage_duration" : "10",
                            "dosage_duration_unit" : "days",
                            "unlimited_application_duration": false
                        },
                        {
                            "type": "syntax",
                            "preDefs": [
                                {
                                    "type": "medication",
                                    "name" : "Insulin",
                                    "active_substance" : "",
                                    "dosage_amount" : "0",
                                    "dosage_unit" : "ml",
                                    "use_specific_dosage_schema": true,
                                    "morning_dosage" : "0",
                                    "noon_dosage" : "0",
                                    "evening_dosage" : "0",
                                    "night_dosage" : "0",
                                    "dosage_freq" : "0",
                                    "dosage_duration" : "0",
                                    "dosage_duration_unit" : "days",
                                    "unlimited_application_duration": true,
                                    "refId": 0
                                },
                                {
                                    "type": "medication",
                                    "name" : "Glibenclamid",
                                    "active_substance" : "",
                                    "dosage_amount" : "0",
                                    "dosage_unit" : "ml",
                                    "use_specific_dosage_schema": true,
                                    "morning_dosage" : "0",
                                    "noon_dosage" : "0",
                                    "evening_dosage" : "0",
                                    "night_dosage" : "0",
                                    "dosage_freq" : "0",
                                    "dosage_duration" : "0",
                                    "dosage_duration_unit" : "days",
                                    "unlimited_application_duration": true,
                                    "refId": 1
                                },
                                {
                                    "type": "medication",
                                    "name" : "DPP-4-Inhibitor",
                                    "active_substance" : "",
                                    "dosage_amount" : "200",
                                    "dosage_unit" : "ml",
                                    "use_specific_dosage_schema": true,
                                    "morning_dosage" : "0",
                                    "noon_dosage" : "0",
                                    "evening_dosage" : "0",
                                    "night_dosage" : "0",
                                    "dosage_freq" : "0",
                                    "dosage_duration" : "0",
                                    "dosage_duration_unit" : "days",
                                    "unlimited_application_duration": true,
                                    "refId": 2
                                }
                            ],
                            
                            "grade_of_evidence" : "a",
                            "grade_of_recommendation" : "2",
                            "comment" : "",
                            "content": "Entweder Insulin, {1|name} oder DPP-4-Inhibitor"
                        }
                    ]
                },
                {
                    "type": "group",
                    "title": "Empfohlen von DDG/DGIM: 2-fach Kombi aus",
                    "primaryRecommendation": true,
                    "hideOnSublevelSelect": true,
                    "comment": "",
                    "hideAnd": true,
                    "recommendations": 
                    [
                        {
                            "type": "medication",
                            "name" : "DPP-4-Inhibitor",
                            "grade_of_evidence" : "a",
                            "grade_of_recommendation" : "2",
                            "comment" : "",
                            "active_substance" : "",
                            "dosage_amount" : "0",
                            "dosage_unit" : "ml",
                            "use_specific_dosage_schema": true,
                            "morning_dosage" : "0",
                            "noon_dosage" : "0",
                            "evening_dosage" : "0",
                            "night_dosage" : "0",
                            "dosage_freq" : "0",
                            "dosage_duration" : "0",
                            "dosage_duration_unit" : "days",
                            "unlimited_application_duration": true
                        },
                        {
                            "type": "medication",
                            "name" : "GLP-1-Rezeptoragonist",
                            "grade_of_evidence" : "a",
                            "grade_of_recommendation" : "2",
                            "comment" : "",
                            "active_substance" : "",
                            "dosage_amount" : "0",
                            "dosage_unit" : "ml",
                            "use_specific_dosage_schema": true,
                            "morning_dosage" : "0",
                            "noon_dosage" : "0",
                            "evening_dosage" : "0",
                            "night_dosage" : "0",
                            "dosage_freq" : "0",
                            "dosage_duration" : "0",
                            "dosage_duration_unit" : "days",
                            "unlimited_application_duration": true
                        },
                        {
                            "type": "medication",
                            "name" : "Glukosidasehemmer",
                            "grade_of_evidence" : "a",
                            "grade_of_recommendation" : "2",
                            "comment" : "",
                            "active_substance" : "",
                            "dosage_amount" : "0",
                            "dosage_unit" : "ml",
                            "use_specific_dosage_schema": true,
                            "morning_dosage" : "0",
                            "noon_dosage" : "0",
                            "evening_dosage" : "0",
                            "night_dosage" : "0",
                            "dosage_freq" : "0",
                            "dosage_duration" : "0",
                            "dosage_duration_unit" : "days",
                            "unlimited_application_duration": true
                        },
                        {
                            "type": "medication",
                            "name" : "Insulin (häufig Verzögerungsinsulin)",
                            "grade_of_evidence" : "a",
                            "grade_of_recommendation" : "2",
                            "comment" : "",
                            "active_substance" : "",
                            "dosage_amount" : "0",
                            "dosage_unit" : "ml",
                            "use_specific_dosage_schema": true,
                            "morning_dosage" : "0",
                            "noon_dosage" : "0",
                            "evening_dosage" : "0",
                            "night_dosage" : "0",
                            "dosage_freq" : "0",
                            "dosage_duration" : "0",
                            "dosage_duration_unit" : "days",
                            "unlimited_application_duration": true
                        },
                        {
                            "type": "medication",
                            "name" : "SGLT2-Inhibtor",
                            "grade_of_evidence" : "a",
                            "grade_of_recommendation" : "2",
                            "comment" : "",
                            "active_substance" : "",
                            "dosage_amount" : "0",
                            "dosage_unit" : "ml",
                            "use_specific_dosage_schema": true,
                            "morning_dosage" : "0",
                            "noon_dosage" : "0",
                            "evening_dosage" : "0",
                            "night_dosage" : "0",
                            "dosage_freq" : "0",
                            "dosage_duration" : "0",
                            "dosage_duration_unit" : "days",
                            "unlimited_application_duration": true
                        },
                        {
                            "type": "medication",
                            "name" : "Sulfonylharnstoff / Glinid",
                            "grade_of_evidence" : "a",
                            "grade_of_recommendation" : "2",
                            "comment" : "",
                            "active_substance" : "",
                            "dosage_amount" : "0",
                            "dosage_unit" : "ml",
                            "use_specific_dosage_schema": true,
                            "morning_dosage" : "0",
                            "noon_dosage" : "0",
                            "evening_dosage" : "0",
                            "night_dosage" : "0",
                            "dosage_freq" : "0",
                            "dosage_duration" : "0",
                            "dosage_duration_unit" : "days",
                            "unlimited_application_duration": true
                        }
                    ]
                }
            ],
            "level_name" : "Stufe 3: Therapierefraktärer Typ-2-DM auf Basis + Pharmako-Monotherapie über 3-6 Monate",
            "level_id" : "06781160-b732-11e8-8097-87b5bf74cf76",
            "definition": "Individueller HbA1c nach 3-6 Monaten nicht erreicht"
        },
        {
            "recommendations": [
                {
                    "type": "freeText",
                    "title": "",
                    "content": "(Intensivierte) Insulintherapie (SIT, CT, ICT, CSII, Verzögerungsinsulin)",
                    "grade_of_evidence": "a",
                    "grade_of_recommendation": "2",
                    "primaryRecommendation": true,
                    "comment": "",
                    "hideOnSublevelSelect": true
                },
                {
                    "type": "group",
                    "title": "Empfohlen von DDG / DGIM",
                    "primaryRecommendation": true,
                    "hideOnSublevelSelect": false,
                    "comment": "",
                    "recommendations": 
                    [
                        {
                            "type": "freeText",
                            "title": "",
                            "content": "(Intensivierte) Insulintherapie (SIT, CT, ICT, CSII, Verzögerungsinsulin)",
                            "grade_of_evidence": "a",
                            "grade_of_recommendation": "2",
                            "primaryRecommendation": true,
                            "comment": ""
                        },
                        {
                            "type": "syntax",
                            "preDefs": 
                            [
                                {
                                    "refId": 0,
                                    "type": "medication",
                                    "name" : "Metformin",
                                    "grade_of_evidence" : "a",
                                    "grade_of_recommendation" : "2",
                                    "comment" : "",
                                    "active_substance" : "Metformin",
                                    "dosage_amount" : "0",
                                    "dosage_unit" : "ml",
                                    "use_specific_dosage_schema": true,
                                    "morning_dosage" : "0",
                                    "noon_dosage" : "0",
                                    "evening_dosage" : "0",
                                    "night_dosage" : "0",
                                    "dosage_freq" : "0",
                                    "dosage_duration" : "0",
                                    "dosage_duration_unit" : "days",
                                    "unlimited_application_duration": true
                                }
                            ],
                            "content" : "Orale Antidiabetika ({0}, Dpp-4-Inhibtor, SGLT-2-Inhibitor)",
                            "grade_of_evidence" : "a",
                            "grade_of_recommendation" : "2",
                            "comment" : "",
                            "active_substance" : "",
                            "dosage_amount" : "0",
                            "dosage_unit" : "ml",
                            "use_specific_dosage_schema": true,
                            "morning_dosage" : "0",
                            "noon_dosage" : "0",
                            "evening_dosage" : "0",
                            "night_dosage" : "0",
                            "dosage_freq" : "0",
                            "dosage_duration" : "0",
                            "dosage_duration_unit" : "days",
                            "unlimited_application_duration": true
                        }
                    ]
                },
                {
                    "type": "group",
                    "title": "Empfohlen von DDG / DGIM",
                    "primaryRecommendation": true,
                    "hideOnSublevelSelect": false,
                    "comment": "",
                    "recommendations": 
                    [
                        {
                            "type": "freeText",
                            "title": "",
                            "content": "Verzögerungsinsulin",
                            "grade_of_evidence": "a",
                            "grade_of_recommendation": "2",
                            "primaryRecommendation": true,
                            "comment": ""
                        },
                        {
                            "type": "freeText",
                            "content" : "GLP-1-Rezeptorantagonist",
                            "grade_of_evidence" : "a",
                            "grade_of_recommendation" : "2",
                            "comment" : ""
                        }
                    ]
                }
            ],
            "level" : [
                {
                    "level_name": "Adipös?",
                    "level_id": "lkjhsdflkbl1kjh412l34",
                    "recommendations": 
                    [
                        {
                            "type": "group",
                            "primaryRecommendation": true,
                            "hideOnSublevelSelect": false,
                            "comment": "",
                            "title": "Empfehlung bei Adipositas nach DEGAM / AkdÄ",
                            "recommendations": 
                            [
                                {
                                    "type": "freeText",
                                    "title": "",
                                    "content": "Insulin (SIT, CT, ICT)",
                                    "grade_of_evidence": "a",
                                    "grade_of_recommendation": "2",
                                    "primaryRecommendation": true,
                                    "comment": ""
                                },
                                {
                                    "type": "medication",
                                    "name" : "Metformin",
                                    "grade_of_evidence" : "a",
                                    "grade_of_recommendation" : "2",
                                    "comment" : "",
                                    "active_substance" : "Metformin",
                                    "dosage_amount" : "0",
                                    "dosage_unit" : "ml",
                                    "use_specific_dosage_schema": true,
                                    "morning_dosage" : "0",
                                    "noon_dosage" : "0",
                                    "evening_dosage" : "0",
                                    "night_dosage" : "0",
                                    "dosage_freq" : "0",
                                    "dosage_duration" : "0",
                                    "dosage_duration_unit" : "days",
                                    "unlimited_application_duration": true
                                }
                            ]
                        }
                    ]
                }
            ],
            "level_name" : "Stufe 4: Therapierefraktärer auf Insulin alleine / Pharmako 2-fach Kombi",
            "level_id" : "06781160-b732-11e8-8097-87b5bf74cf76",
            "definition": "Individueller HbA1c nach 3-6 Monaten nicht erreicht"
        }
    ],
    "__v" : 0
};