import { useState } from "react";
import "./SearchForm.css"

export default function ProfileSearchForm({ search }) {
    const [term, setTerm] = useState("");

    function handleChange(e) {
        setTerm(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        search(term);
        setTerm("");
    }

    return (
        <form onSubmit={handleSubmit} className="SearchForm">
            <input
                type="text"
                placeholder="Find a github user..."
                value={term}
                onChange={handleChange}
            />
            <button>Search</button>
        </form>
    );
}