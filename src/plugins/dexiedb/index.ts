import Dexie, { Table } from "dexie";
export interface Note {
  id?: number;
  title: string;
  text: string;
  date: number;
  tags: [];
}

export class NotesDB extends Dexie {
  // 'Notes' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  Notes!: Table<Note>;
  constructor() {
    super("NotesDB");
    this.version(1).stores({
      Notes: "++id, title, text, date, tags", // Primary key and indexed props
    });
  }
}
export const notesDB = new NotesDB();
