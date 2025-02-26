import { IconButton, ListItem } from "@mui/material";
import { TextField } from "@mui/material";
import { Add } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import { useState } from "react";

export default function TodoForm({ addTodo }) {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText("");
    }

    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{
                        width: 300,
                        mb: 1,
                    }}
                    id="outlined-basic"
                    label="Add a new todo"
                    variant="outlined"
                    value={text}
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton aria-label="add todo" edge="end" type="submit">
                                    <Add />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </form>
        </ListItem>
    );
}