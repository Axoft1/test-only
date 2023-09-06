export interface IEventByYear {
  id: number;
  name: string
  beginningYear: number;
  endingYear: number;
  events: IEvents[];
}

export interface IEvents {
  year: number;
  description: string;
}
