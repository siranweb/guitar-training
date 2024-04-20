import {GuitarStringNote, Note, NoteName} from "../types";

export const namesByNotes: Record<Note, NoteName> = {
    [Note.C]: 'До',
    [Note.D]: 'Ре',
    [Note.E]: 'Ми',
    [Note.F]: 'Фа',
    [Note.G]: 'Соль',
    [Note.A]: 'Ля',
    [Note.B]: 'Си',
};

export const notesByNames: Record<NoteName, Note> = {
    'До': Note.C,
    'Ре': Note.D,
    'Ми': Note.E,
    'Фа': Note.F,
    'Соль': Note.G,
    'Ля': Note.A,
    'Си': Note.B,
};

export const guitarStringNotesPositions: Record<GuitarStringNote, (Note | null)[]> = {
    [Note.E]: [Note.E, Note.F, null, Note.G, null, Note.A, null, Note.B, Note.C, null, Note.D, null, Note.E],
    [Note.B]: [Note.B, Note.C, null, Note.D, null, Note.E, Note.F, null, Note.G, null, Note.A, null, Note.B],
    [Note.G]: [Note.G, null, Note.A, null, Note.B, Note.C, null, Note.D, null, Note.E, Note.F, null, Note.G],
    [Note.D]: [Note.D, null, Note.E, Note.F, null, Note.G, null, Note.A, null, Note.B, Note.C, null, Note.D],
    [Note.A]: [Note.A, null, Note.B, Note.C, null, Note.D, null, Note.E, Note.F, null, Note.G, null, Note.A],
};
