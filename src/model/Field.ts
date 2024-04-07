export interface Field {
    id:                     number;
    name:                   string;
    description:            string;
    address_addon:          string;
    street:                 string;
    postal_code:            string;
    city:                   string;
    country:                string;
    longitude:              number;
    latitude:               number;
    spectator_total:        number;
    spectator_seats:        number;
    created_at:             string;
    updated_at:             string;
    other_information:      string;
    groundrules:            string;
    human_country:          string;
    description_html:       string;
    other_information_html: string;
    groundrules_html:       string;
    photo_url?: string;
}