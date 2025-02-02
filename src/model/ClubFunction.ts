import {Person} from "./Person.js";
import {BSMDataObject} from "./BSMDataObject.js";

export interface ClubFunction extends BSMDataObject {
  id: number;
  category: string;
  function: string;
  admission_date: string;
  retirement_date: string | null;
  created_at: string;
  updated_at: string;
  sort: number;
  mail: string;
  human_category: string;
  person: Person;
}
