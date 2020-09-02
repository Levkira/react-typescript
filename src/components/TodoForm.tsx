import React, { useState } from 'react'
interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
    const [title, setTitle] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    };

    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' && title.trim()) {
            props.onAdd(title)
            setTitle('')
        }
    }
    return (
        <div className='input-field mt2'>
            <input
                value={title}
                onChange={handleChange}
                type='text' id='title'
                placeholder='Введите название дела'
                onKeyPress={handleKeyPress}
            />
            <label htmlFor='title' className='active'>
                Введите название дела
            </label>
        </div>
    )
}