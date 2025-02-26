import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { Box } from '@mui/material';

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("todos"));
    if (!data) return [];
    return data;
}

export default function TodoList() {
    const [todos, setTodos] = useState(getInitialData);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const removeTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.id !== id);
        });
    }

    const toggleTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                } else {
                    return todo;
                }
            });
        });
    }

    const addTodo = (text) => {
        setTodos((prevTodos) => {
            if (text) return [...prevTodos, { text: text, id: crypto.randomUUID(), completed: false }];
            return [...prevTodos];
        });
    }

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                width: "fit-content",
                mx: "auto",
                my: 10,
                px: 2,
                py: 3,
                backgroundColor: "white",
                borderRadius: 3,
                boxShadow: 3
            }}
        >

            <TodoForm addTodo={addTodo} />

            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map(todo => (
                    <TodoItem
                        todo={todo}
                        key={todo.id}
                        remove={() => removeTodo(todo.id)}
                        toggle={() => toggleTodo(todo.id)}
                    />
                ))}
            </List>
        </Box>
    )
}