import {Person} from "./Person.js";

export interface ScorerAssignment {
    license: License;
}

export interface License {
    id:                             number;
    number:                         string;
    valid_until:                    string;
    created_at:                     string;
    updated_at:                     string;
    category:                       string;
    level:                          string;
    baseball:                       boolean;
    softball:                       boolean;
    code_of_honor:                  boolean;
    first_aid_training:             boolean;
    valid_for_renewal:              boolean;
    contact_info_id:                number;
    history_modifications:          null;
    preset_for_clubs:               boolean | null;
    human_category:                 string;
    human_level:                    string;
    human_sport_association:        null;
    person:                         Person;
    sleeve_number?:                 number;
}

export interface UmpireAssignment {
    license:         License;
    assignment_type: string;
    crew_chief:      boolean;
}