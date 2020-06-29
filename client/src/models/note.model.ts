import { types } from "mobx-state-tree";

 const Note = types.model({
    id: types.identifierNumber,
    info: types.optional( types.string, "" )
})
.actions( self =>({
    setInfo( newInfo: string ){
        self.info = newInfo;
    }
}))

export default Note;