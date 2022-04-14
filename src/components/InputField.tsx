import React from 'react'
import './styles.css'


interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({todo, setTodo}: Props) => {
  return (
    <form className='input'>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type='input'
        placeholder='Enter a task'
        className="input__box" />
      <button type='submit' className="input_submit">GO</button>
    </form>
  )
}

export default InputField
