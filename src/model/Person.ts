export interface Person {
    name_prefix:  string;
    first_name:   string;
    last_name:    string;
    name_suffix:  string;
    contact_info: ContactInfo;
}

export interface ContactInfo {
    postal_code: string;
    city:        string;
    country:     string;
}