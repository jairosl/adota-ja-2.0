import { Pets } from "../Entities/Pets";

export interface filterStrategy {
  executeFilter(data: Array<Pets>): Array<Pets> | null;
}
