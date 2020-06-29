import { types, unprotect } from "mobx-state-tree";
import ApiServices from "../services/api.services";
import Note from "../models/note.model";

const service: ApiServices = new ApiServices();
let targetId: number;

export const NoteList = types.model({
    notes: types.array( Note ),
    createForm: types.optional( types.boolean, false ),
    editForm: types.optional( types.boolean, false ),
    russian: types.optional( types.boolean, false )
})
.actions( self => ({
    async getNotes(){
        let result = await service.getAllNotes();
        if( result.toString().includes( "Network Error" )  ){
            alert( "Server error, try again later" );
        }
        else if( result.message ){
            alert( "Unknown error, try again" );
        }
        else{
            self.notes = self.notes = ( function (arr) {
                return arr.sort( ( a, b ) => a.id > b.id ? 1 : -1 );
            })( result );
        }
    },

    async deleteNote( e, id ){
        e.stopPropagation();
        let result = await service.deleteNote( id );
        
        if( result.toString().includes( "Network Error" ) ){
            alert( "Server error, try again later" );
        }
        else if( result.message ){
            alert( "Unknown error, try again" );
        }
        else{
            for( let i = 0; i < self.notes.length; i++ )
            {
                if(self.notes[i].id === id)
                {
                    self.notes.splice(i, 1);
                    self.createForm = false;
                    self.editForm = false;
                    break;
                }
            }
        }
    },

    async createNote ( e, inputInfo ) {
        e.stopPropagation();
        e.preventDefault();

        if( inputInfo === "" )
        {          
            alert( "Info is required" );
        }
        else
        {
            let data = {
                info: inputInfo
            }
        
            const result = await service.createNote( data );

            if( result.toString().includes( "Network Error" )){
                alert( "Server error, try again later" );
            }
            else if( result.message ){
                alert( "Unknown error, try again" );
            }
            else{
                let newNote = {
                    id: result.id,
                    info: result.info
                }
                self.notes.push( newNote );
                self.createForm = false;
                noteModel.setInfo( "" );
            }
            
        }   
    },

    async editNote( e, inputInfo ){
        e.preventDefault();
        if( inputInfo === "" )
        {          
            alert( "Info is required" );
        }
        else
        {
            let data = {
                info: inputInfo
            }
        
            const result = await service.editNote( targetId, data );

            if( result.toString().includes( "Network Error" ) ){
                alert( "Server error, try again later" );
            }
            else if( result.message ){
                alert( "Unknown error, try again" );
            }
            else{
                for( let i = 0; i < self.notes.length; i++ ){
                    if( self.notes[i].id === targetId )
                    {
                      self.notes.splice( i, 1, result );
                      self.editForm = false;
                      noteModel.setInfo( "" );
                      break;
                    }
                }
                self.editForm = false;
            }
        }
    }
}
))
.views( self => ({
    showEditForm( e, id, info ){
        e.stopPropagation();
        targetId = id;

        noteModel.setInfo( info );
        

        self.editForm = true;
        self.createForm = false;
    
    },
    
    showCreateForm( e ){
      e.stopPropagation();

      self.createForm = true;
      self.editForm = false;

    },

    hideCreateForm ( e ){
      e.preventDefault();

      self.createForm = false;
      noteModel.setInfo( "" );
    },

    hideEditForm ( e ){
      e.preventDefault();

      self.editForm = false;
      noteModel.setInfo( "" );
    },

    changeLanguage(){
        self.russian = !self.russian;
    }

}))

export const noteStore = NoteList.create();

export const noteModel = Note.create({
    id: 0
});

unprotect( noteStore );