export interface Philosopher {
  name: string;
  birth_year: string | number;
  death_year: string | number;
  birth_place: string;
  philosophical_tradition: string;
  main_school_or_movement: string;
  key_contributions: {
    metaphysics?: string;
    epistemology?: string;
    ethics?: string;
    political_philosophy?: string;
    logic_and_reasoning?: string;
    other?: string;
  };
  major_works: Work[];
  core_philosophical_ideas: Idea[];
  influences: Influence[];
  students_or_followers: Follower[];
  historical_context: string;
  methodology: string;
  criticisms_and_debates: Criticism[];
  legacy_and_influence: string;
  quotes: Quote[];
  related_philosophical_movements: Movement[];
  relevant_texts_and_references: Reference[];
}

export interface Work {
  title: string;
  year: string | number;
  type: string;
  description: string;
}

export interface Idea {
  concept: string;
  description: string;
  influence: string;
}

export interface Influence {
  name: string;
  relationship: string;
  impact: string;
}

export interface Follower {
  name: string;
  significance: string;
}

export interface Criticism {
  critic_name: string;
  criticism: string;
  response: string;
}

export interface Quote {
  quote: string;
  source: string;
}

export interface Movement {
  movement_name: string;
  relationship: string;
}

export interface Reference {
  reference_title: string;
  link: string;
  summary: string;
}
