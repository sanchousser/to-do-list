import css from './TaskList.module.css'

export const TaskList = ({ todos, onDeleteToDo}) => (
    <ul>
        {todos.map(({ id, text }) => {
            return (<li className={css.item} key={id}>
                <p>{text}</p>
                <button onClick={() => onDeleteToDo(id)}>Completed</button>
            </li>)
        })
        }
    </ul>


)