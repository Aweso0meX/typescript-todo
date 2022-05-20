import React , { FC , useState } from 'react'
import { Button , TextField } from '@mui/material'
import { IToDo } from '../../Types/TypeToDo'


interface TaskFormProps {
    setToDos : ( p : (IToDo | { description : string; id : number; completed : boolean; title : string })[] ) => void
    toDos : IToDo[]
    setIsOpen : ( e : boolean ) => void
}

export const TaskForm : FC<TaskFormProps> = ( { setToDos , toDos , setIsOpen } ) => {
    const [ taskValue , setTaskValue ] = useState<string> ( '' )
    const [ decription , setDecription ] = useState<string> ( '' )

    const changeTaskText = ( e : React.ChangeEvent<HTMLInputElement> ) => {
        setTaskValue ( e.target.value )
    }
    const changeDesrText = ( e : React.ChangeEvent<HTMLInputElement> ) => {
        setDecription ( e.target.value )
    }

    const pushTask = ( e : React.MouseEvent<HTMLButtonElement> ) => {
        e.preventDefault ()
        const newTask = {
            id : Date.now () ,
            title : taskValue ,
            description : decription ,
            completed : false

        }
        if ( taskValue.length > 0 ) {
            setToDos ( [ ... toDos , newTask ] )
            setIsOpen ( false )
            setTaskValue ( '' )
            setDecription ( '' )
        }
    }

    return (
        <div className={ 'inputs' }>
            <TextField
                value={ taskValue }
                onChange={ changeTaskText }
                id="filled-basic"
                label="Задача"
                variant="filled"/>
            <TextField
                value={ decription }
                onChange={ changeDesrText }
                id="filled-basic"
                label="Описание"
                variant="filled"/>
            <Button onClick={ pushTask } variant="contained">Добавить задачу</Button>
        </div>
    )
}


