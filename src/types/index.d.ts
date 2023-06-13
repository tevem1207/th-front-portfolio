export interface Skill {
  id: string;
  name: string;
  contents: string;
  level: number;
  color: string;
}

export interface Project {
  id: string;
  name: string;
  role: string;
  description: string;
  url: string;
}

export interface Profile {
  id: string;
  title: string;
  startAt: Date;
  endAt: Date;
  contents: string;
}
