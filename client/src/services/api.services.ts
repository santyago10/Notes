import axios from "axios";

class ApiServices {
    private path = "http://localhost:5000";

    public async createNote( data ){
        try{
            const result = await axios.post( `${ this.path }/notes`, data );
            return result.data;
        }
        catch( error ){
            return error;
        }
    }

    public async editNote( id, data ){
        try{
            debugger;
            const result = await axios.put( `${ this.path }/notes/${ id }`, data );
            return result.data;
        }
        catch( error ){
            return error;
        }
    }

    public async deleteNote( id ){
        try{
            const result = await axios.delete( `${ this.path }/notes/${ id }` );
            return result.data;
        }
        catch( error ){
            return error;
        }
    }

    public async getAllNotes(){
        try{
            const result = await axios.get( `${ this.path }/notes` );
            return result.data;
        }
        catch( error ){
            return error;
        }
    }

    public async getNoteById( id ){
        try{
            const result = await axios.get( `${ this.path }/notes/${ id }` );
            return result.data;
        }
        catch( error ){
            return error;
        }
    }
}

export default ApiServices;