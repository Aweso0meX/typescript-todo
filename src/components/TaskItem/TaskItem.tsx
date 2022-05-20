import React , { FC , useState } from 'react'
import { IToDo } from '../../Types/TypeToDo'
import styles from './TaskItem.module.scss'
import DeleteIcon from '@mui/icons-material/Delete'


interface TaskItemProps {
    toDo : IToDo
    deleteTask : ( post : IToDo ) => void
    index : number

}

export const TaskItem : FC<TaskItemProps> = ( {
                                                  toDo ,
                                                  deleteTask ,
                                                  index
                                              } ) => {
    const [ checkValue , setCheckValue ] = useState<boolean> ( false )
    const checkedChange : React.MouseEventHandler<HTMLInputElement> = () => setCheckValue ( !checkValue )

    return (
        <div className={ styles.itemWrapper }>

            <input type="checkbox"
                   onClick={ checkedChange }
                   checked={ checkValue }
                   className={ styles.check }/>
            <div>
                
                <div>{ index + 1 }. Задача : { toDo.title }</div>
                <div>Описание : { toDo.description }</div>


            </div>
            <DeleteIcon className={ styles.deleteIcon } onClick={ () => deleteTask ( toDo ) }/>
        </div>
    )
}


