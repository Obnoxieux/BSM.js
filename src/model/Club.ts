import {BSMDataObject} from "./BSMDataObject.js";

export interface Club extends BSMDataObject {
    id: number;
    federation_id: number;
    organization_id: number;
    name: string;
    acronym: string;
    short_name: string;
    number: number;
    headquarter: string;
    main_club: string;
    chairman: string;
    registered_association: string;
    court: string;
    contact_name: string;
    address_addon: string;
    street: string;
    postal_code: string;
    city: string;
    country: string;
    longitude: number;
    latitude: number;
    phone: string;
    phone_alt: string;
    mobile: string;
    mobile_alt: string;
    mail: string;
    mail_alt: string;
    website: string;
    admission_date: string;
    retirement_date: string | null;
    created_at: string;
    updated_at: string;
    successes: string;
    opaso_id: number;
    successes_html: string;
    logo_url: string;
}