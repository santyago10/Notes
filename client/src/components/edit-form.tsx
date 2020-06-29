import { observer } from "mobx-react";
import React from 'react';
import '../App.scss';
import { MyButton } from '../shares/button';
import { noteModel, noteStore } from "../stores/note.store";
import Form from "react-bootstrap/Form";

@observer
export class EditForm extends React.Component{
    render(){
        return <div className = 'edit-form'>
        { noteStore.russian ? 
        ( <Form id = "edit-form">
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Описание</Form.Label>
                <Form.Control type="text" placeholder="Введите описание" value = { noteModel.info }
                onChange = { e => noteModel.setInfo( e.target.value ) } />
            </Form.Group>
            <MyButton title = "Изменить" 
                onClick = { e => { noteStore.editNote(e, noteModel.info ) } }/>
            <MyButton title = "Отменить" onClick = { e => { noteStore.hideEditForm( e ) } }/>
            </Form>
        ) :
        ( <Form id = "edit-form">
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Info</Form.Label>
                <Form.Control type="text" placeholder="Enter info" value = { noteModel.info }
                onChange = { e => noteModel.setInfo( e.target.value ) } />
            </Form.Group>
            <MyButton title = "Edit" 
                onClick = { e => { noteStore.editNote(e, noteModel.info ) } }/>
            <MyButton title = "Cancel" onClick = { e => { noteStore.hideEditForm( e ) } }/>
            </Form>
        )}
       </div>
    }
}

