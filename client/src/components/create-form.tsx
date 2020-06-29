import { observer } from "mobx-react";
import React from 'react';
import '../App.scss';
import { MyButton } from '../shares/button';
import { noteModel, noteStore } from "../stores/note.store";
import Form from "react-bootstrap/Form";

@observer
export class CreateForm extends React.Component{
    render(){
        return <div className = 'create-form'>
        { noteStore.russian ? 
        ( <Form id = 'create-form'>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Создать заметку</Form.Label>
                <Form.Control type="text" placeholder = "Введите описание" value = { noteModel.info }
                onChange = { e => noteModel.setInfo( e.target.value ) } />
            </Form.Group>
            <MyButton title = "Создать" 
                onClick = { e => { noteStore.createNote(e, noteModel.info ) } }/>
            <MyButton title = "Отменить" onClick = { e => { noteStore.hideCreateForm( e ) } }/>
            </Form>
        ) :
        ( <Form id = 'create-form'>
        <Form.Group controlId="formGroupEmail">
            <Form.Label>Create note</Form.Label>
            <Form.Control type="text" placeholder="Enter info" value = { noteModel.info }
            onChange = { e => noteModel.setInfo( e.target.value ) } />
        </Form.Group>
        <MyButton title = "Create" 
            onClick = { e => { noteStore.createNote(e, noteModel.info ) } }/>
        <MyButton title = "Cancel" onClick = { e => { noteStore.hideCreateForm( e ) } }/>
        </Form>
       )}
       </div>
    }
}