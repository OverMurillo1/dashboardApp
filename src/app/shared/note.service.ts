import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notes : Note[] = [
    new Note('Titulo', 'Contenido del bueno y del sabroso'),
    new Note('Otro Titulo', 'con mas contenido del bueno y del sabroso'),
  ];

  constructor() { }

  getNotes(){
    return this.notes
  }

  getNote( id: string){
    // Retorna un metodo verdadero cuando los ID son iguales
    return this.notes.find(n => n.id === id)
  }

  addNote(note:Note){
    this.notes.push(note)
  }

  updateNote(id: string, updatedFields: Partial<Note>){
    const note = this.getNote(id)
    Object.assign(note, updatedFields)
  }

  deleteNote(id:string){
    const noteIndex = this.notes.findIndex(n => n.id === id)
    if (noteIndex == -1) return
    this.notes.splice(noteIndex,1)
  }
}
