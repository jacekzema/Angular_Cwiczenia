export interface Task {
  _id?: { $oid: string };
  name: string;
  created: string;
  end?: string; // ?- nie wymagane na początku
  isDone: boolean;

}
