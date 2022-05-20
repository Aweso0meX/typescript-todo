import React , { FC } from 'react'
import styles from './MyModal.module.scss'


interface MyModalProps {
    isOpen : boolean
    setIsOpen : ( e : boolean ) => void
    children : React.ReactNode
}

export const MyModal : FC<MyModalProps> = ( {
                                                isOpen ,
                                                setIsOpen ,
                                                children
                                            } ) => {
    const closeModal : React.MouseEventHandler<HTMLDivElement> = () => {
        setIsOpen ( false )
    }
    const stopPropModal : React.MouseEventHandler<HTMLDivElement> = ( e ) => {
        e.stopPropagation ()
    }

    return (
        <div onClick={ closeModal }
             className={ isOpen ? `${ styles.myModal } ${ styles.active }` : styles.myModal }>
            <div onClick={ stopPropModal } className={ styles.myModalContent }>
                { children }
            </div>
        </div>
    )
}


