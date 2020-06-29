import * as express from 'express';
import NoteController from '../controllers/note.controller';

class NoteRoute {
    
    public path = '/notes';
    public router = express.Router();
    public controller: NoteController = new NoteController();
    
    constructor() {
      this.initializeRoutes();
    }
    
    private initializeRoutes() {    
      this.router.get( this.path, this.controller.getAll );
      this.router.get( `${this.path}/:id`, this.controller.getById );
      this.router.post( this.path, this.controller.create );
      this.router.put( `${this.path}/:id`, this.controller.edit );
      this.router.delete( `${this.path}/:id`, this.controller.delete );
    }   
}

export default NoteRoute;