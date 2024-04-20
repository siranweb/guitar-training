export enum Note {
    C = 'C',
    D = 'D',
    E = 'E',
    F = 'F',
    G = 'G',
    A = 'A',
    B = 'B',
}

export type GuitarStringNote = Note.E | Note.B | Note.G | Note.D | Note.A;

export type NoteName = 'До' | 'Ре' | 'Ми' | 'Фа' | 'Соль' | 'Ля' | 'Си';
