export interface EventInterface {
  _id?: string;
  id?: number;
  activity: string;
  startDate: string;
  endDate: string;
  location: string;
  isDuplicate?: boolean;
  hasDuplicate?: boolean;
};
