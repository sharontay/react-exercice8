import React, { useRef } from 'react'
import PropTypes from 'prop-types'

const TodoForm = ({ submit }) => {

    const textInput = useRef()

    return (
        <div>
            <form
                onSubmit={
                    e => {
                        e.preventDefault()
                        submit(textInput.current.value)
                        textInput.current.value = ''
                    }
                }
            >
                <input 
                    ref={ textInput }
                    type='text'
                />
                <button type='submit'>
                    Create TODO
                </button>
            </form>
        </div>
    )
}

TodoForm.propTypes = {
    submit: PropTypes.func.isRequired
}

export default TodoForm
