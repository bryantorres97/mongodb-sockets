import NoteModel from "../models/note.model";

export const getNotes = async() => {
    return await NoteModel.find({});
}

export const createNote = async( note ) => {
    return await NoteModel.create(note)
}