import { observer } from 'mobx-react';
import React from 'react';
import Button from 'react-bootstrap/Button'

export const MyButton = observer( props => ( <Button variant="primary" onClick = { props.onClick }>{ props.title }</Button>));
export const CreateButton = observer( props => ( <Button variant = "success" onClick = { props.onClick }>{ props.title }</Button>));
export const DeleteButton = observer( props => ( <Button variant = "danger" onClick = { props.onClick }>{ props.title }</Button>));
export const LanguageButton = observer( props => ( <Button variant = "warning" className = { props.className } onClick = { props.onClick }>{ props.title }</Button>));