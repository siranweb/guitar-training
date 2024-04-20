import {GuitarStringNote, Note, NoteName} from "../types";
import {getRandomIntInclusive} from "../../common/utils";
import {guitarStringNotesPositions, namesByNotes, notesByNames} from "./notes.constants.ts";


class NotesService {
    public getNameByNote(note: Note): NoteName {
        return namesByNotes[note];
    }

    public getNoteByName(name: NoteName): Note {
        return notesByNames[name];
    }

    public getRandomNote(): Note {
        const index = getRandomIntInclusive(0, this.notes.length - 1);
        return this.notes[index];
    }

    public getRandomNoteName(): NoteName {
        const index = getRandomIntInclusive(0, this.names.length - 1);
        return this.names[index];
    }

    public getRandomNoteOrName(): Note | NoteName {
        const all = [...this.notes, ...this.names];
        const index = getRandomIntInclusive(0, all.length - 1);
        return all[index];
    }

    public getGuitarStringNotesPositions(note: GuitarStringNote): (Note | null)[] {
        return guitarStringNotesPositions[note];
    }

    get notes(): Note[] {
        return Object.values(Note);
    }

    get names(): NoteName[] {
        return ['До', 'Ре', 'Ми', 'Фа', 'Соль', 'Ля', 'Си'];
    }
}

export const notesService = new NotesService();
