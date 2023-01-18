import { connect, useSelector } from 'react-redux';
import TodoList from '../components/TodoList';

// const mapStateToProps = (state) => {
//     return { todos: state.todos };
// };
// const mapDispatchToProps = (dispatch) => {
//     return {};
// };

// const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default function TodoListContainer() {
    const todos = useSelector((state) => state.todos);
    return <TodoList todos={todos} />;
}
