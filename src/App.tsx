import React , { useState } from 'react'
import { IToDo } from './Types/TypeToDo'
import { TaskItem } from './components/TaskItem/TaskItem'
import { CSSTransition , TransitionGroup } from 'react-transition-group'
import { TaskForm } from './components/TaskForm/TaskForm'
import { MyModal } from './CustomUI/MyModal/MyModal'
import { Button } from '@mui/material'


function App () {

    const [ toDos , setToDos ] = useState<IToDo[]> ( [] )
    const [ isOpen , setIsOpen ] = useState<boolean> ( true )
    const deleteTask = ( post : IToDo ) => {
        setToDos ( toDos.filter ( p => p.id !== post.id ) )
    }
    const openModal : React.MouseEventHandler<HTMLButtonElement> = ( e ) => {
        e.preventDefault ()
        setIsOpen ( true )
    }
    return (
        <div className={ 'App' }>
            <h1 className={ 'ToDo_Title' }>TODO LIST</h1>
            <Button onClick={ openModal } variant="contained">Добавить задачу</Button>
            <MyModal isOpen={ isOpen } setIsOpen={ setIsOpen }>
                <TaskForm setIsOpen={ setIsOpen } setToDos={ setToDos } toDos={ toDos }/>
            </MyModal>
            <div>
                <TransitionGroup>
                    { toDos.map ( ( toDo , index ) =>
                        <CSSTransition
                            key={ toDo.id }
                            timeout={ 500 }
                            classNames="item"
                        >
                            <TaskItem index={ index } deleteTask={ deleteTask } toDo={ toDo }/>
                        </CSSTransition>
                    ) }
                </TransitionGroup>
            </div>
        </div>
    )
}

export default App





