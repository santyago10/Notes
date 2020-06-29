import * as express from 'express';
import NoteService from '../services/note.service';
import { request } from 'http';

class NoteController {

    public service: NoteService = new NoteService();

    public create = async ( request: express.Request, response: express.Response ) => {
        let newNote = await this.service.create( request.body );
        response.send( newNote );
    }

    public getAll = async ( request: express.Request, response: express.Response ) => {
        let notes = await this.service.getAll();
        response.send( notes );
    }

    public getById = async ( request: express.Request, response: express.Response ) => {
        let note = await this.service.getById( request.params.id );
        response.send( note );
    }

    public edit = async ( request: express.Request, response: express.Response ) => {
        let editedNote = await this.service.edit( request.params.id, request.body );
        response.send( editedNote );
    }

    public delete = async ( request: express.Request, response: express.Response ) => {
        let deletedNote = await this.service.delete( request.params.id );
        response.send( deletedNote );
    }
}

export default NoteController;