import { useState, useEffect } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import "./ViewWithSearch.css"

const BASE_URL = "https://api.github.com/users";

// Github Profile Component -- Shows info from Github API

export default function ProfileViewWithSearch() {
    const [username, setUsername] = useState("ashish0kumar");
    const [profile, setProfile] = useState({ data: null, isLoading: true });

    useEffect(
        function fetchUserOnUsernameChange() {
            async function fetchUser() {
                const userResult = await axios.get(`${BASE_URL}/${username}`);
                setProfile({ data: userResult.data, isLoading: false });
            }
            fetchUser();
        },
        [username]
    );

    function search(username) {
        setProfile({ data: null, isLoading: true });
        setUsername(username);
    }

    if (profile.isLoading) return <i>Loading...</i>

    return (
        <div className="ViewWithSearch">
            <h1>DevFinder 👨🏻‍💻</h1>
            <SearchForm search={search} />
            <img src={profile.data.avatar_url} alt="" />
            <b>{profile.data.name}</b>
            <p>{profile.data.login}</p>
        </div>
    );
}