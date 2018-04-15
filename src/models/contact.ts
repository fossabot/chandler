interface IContactRelationships {
  family: {
    total: number;
    contacts: IContact[];
  };
  friend: {
    total: number;
    contacts: IContact[];
  };
  love: {
    total: number;
    contacts: IContact[];
  };
  work: {
    total: number;
    contacts: IContact[];
  };
}

interface IAgeDate {
  is_age_based?: boolean;
  is_year_unknown?: boolean;
  date: string;
}

interface IContactInformation {
  career: {
    job?: string;
    company?: string;
    linkedin_profile_url?: string;
  };
  avatar: {
    default_avatar_color: string;
    url: string;
    source: 'external' | 'internal';
  };
  relationships: IContactRelationships;
  dates: {
    birthdate: IAgeDate;
    deceased_date: IAgeDate;
  };
}

export interface IContact {
  id: number;
  first_name: string;
  last_name?: string;
  information: IContactInformation;
  updated_at: string;
  statistics: {
    number_of_calls: number;
    number_of_notes: number;
    number_of_activities: number;
    number_of_reminders: number;
    number_of_tasks: number;
    number_of_gifts: number;
    number_of_debts: number;
  };

  reminders?: number[];
  gifts?: number[];
  activities?: number[];
  tasks?: number[];
  calls?: number[];
  debts?: number[];
  notes?: number[];
}
