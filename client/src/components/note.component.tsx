import * as React from "react";
import { noteStore, noteModel } from "../stores/note.store";
import { observer } from "mobx-react";
import { MyButton, DeleteButton, CreateButton, LanguageButton } from "../shares/button";
import { EditForm } from "./edit-form";
import { CreateForm } from "./create-form";
import { Table, Form } from "react-bootstrap";

@observer
class NoteComponent extends React.Component{

    componentDidMount(){
        noteStore.getNotes();
    }
    render(){
        return <div>
            <div className = "get-by-id-form">
                <Form>
                <Form.Group controlId="formGroupEmail">
                    { noteStore.russian ? <Form.Control type="number" placeholder="Введите ID" value = { noteModel.idForFound }
                    onChange = { e => noteModel.setId( e.target.value ) } required/> : 
                    <Form.Control type="number" placeholder="Enter ID" value = { noteModel.idForFound }
                    onChange = { e => noteModel.setId( e.target.value ) } required/> }
                </Form.Group>
                { noteStore.russian ? <MyButton title = "Найти по ID" onClick = { e => { noteStore.getNoteById ( noteModel.idForFound ) } } /> :
                <MyButton title = "Found by id" onClick = { e => { noteStore.getNoteById ( noteModel.idForFound ) } } /> }
                </Form>
            </div>
            
            { noteStore.russian ? ( <LanguageButton title = "Изменить язык" className = "language-button" onClick = { noteStore.changeLanguage }/> ) :
             ( <LanguageButton title = "Change language" className = "language-button" onClick = { noteStore.changeLanguage }/> ) }
            { noteStore.createForm ? <CreateForm/> : null }
            { noteStore.editForm ? <EditForm/> : null }
            <Table striped bordered >
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>{ noteStore.russian ? "Описание" : "Info" }</th>
                     <th>{ noteStore.createButton ? 
                        ( noteStore.russian ? 
                        (<CreateButton className = "create-button" title = "Создать" onClick = { e => { noteStore.showCreateForm( e ) } }/>) :
                        (<CreateButton className = "create-button" title = "Create" onClick = { e => { noteStore.showCreateForm( e ) } }/>) ) :
                        null 
                    }</th>
                      { noteStore.showAllButton ? ( <th>{ noteStore.russian ?
                        <MyButton title = "Показать все" onClick = { e => { noteStore.getNotes() } }/> : 
                        <MyButton  title = "Show all" onClick = { e => { noteStore.getNotes() } }/> }</th>
                    ) : null }
                    </tr>   
                </thead>
                <tbody>
                { noteStore.notes.map( note => {
                        return <tr key = { note.id }>
                            <td>{ note.id }</td><td className = "note-info" >{ note.info }</td>
                            <td>{ noteStore.russian ?
                             (<MyButton title = "Изменить" onClick = { e => { noteStore.showEditForm( e, note.id, note.info ) } }/>) :
                              (<MyButton title = "Edit" onClick = { e => { noteStore.showEditForm( e, note.id, note.info ) } }/> ) }</td>
                            <td>{ noteStore.russian ?
                             (<DeleteButton className = "delete-button" title = "Удалить" onClick = { e => { noteStore.deleteNote( e, note.id ) } }/>) :
                             (<DeleteButton className = "delete-button" title = "Delete" onClick = { e => { noteStore.deleteNote( e, note.id ) } }/>) }</td>
                        </tr>
                    })
                }
                </tbody>
            </Table>
        </div>
        
    }
}

export default NoteComponent;