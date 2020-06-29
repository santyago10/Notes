import { getRepository } from 'typeorm';
import Note from '../models/note.entity';

class NoteService {
    
  private noteRepository;
  
  constructor(){
    this.noteRepository = getRepository( Note );
  }

  //Create note
  public create = async ( body ) => {
    try{
      const newNote = this.noteRepository.create( body );
      await this.noteRepository.save( newNote );
      return( newNote );
    }
    catch( error ){
      return error;
    }
  }

  //Get all notes
  public getAll = async () => {
    try{
      const notes = await this.noteRepository.find();
      return ( notes );
    }
    catch( error ){
      return error;
    }
  }  
  
  //Get note by id
  public getById = async ( id ) => {
    try{
      const note = await this.noteRepository.findOne( id );
      return ( note );
    }
    catch( error ){
      return error;
    }
  }

  //Edit note
  public edit = async ( id, body ) => {
    try{
      const noteData: Note = body;
      await this.noteRepository.update(id, noteData);
      const updatedNote = await this.noteRepository.findOne( id );
      if ( updatedNote ) {
        return( updatedNote );
      } 
      else {
          return( "Not Found " + id );
      }
    }
    catch( error ){
      return error;
    }
  }

  //Delete note
  public delete = async ( id ) => {
    try{
      const deleteResponse = await this.noteRepository.delete( id );
      if (deleteResponse.affected !== 0) {
        return ( deleteResponse );
      } 
      else {
        return( "Not Found " + id );
      }
    }
    catch( error ){
      return error;
    }
  }
}

export default NoteService;