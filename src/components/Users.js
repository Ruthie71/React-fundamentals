import { useEffect, useState, useCallback } from "react";

const Users = () => {
    const [users, setUsers] = useState(0);
    const [counter, setCounter] = useState(0);

    const getUsers = useCallback(() => {
        fetch(`https://randomuser.me/api/?results=${counter}`)
            .then((response) => response.json())
            .then((data) => setUsers(data.results));
    }, [counter]);

    //no array of dependencies -> Every render
    useEffect(() => {
        console.log("Every render");
    });

    //Empty array of dependencies -> first render (mount)
    useEffect(() => {
        getUsers();
        const interval = setInterval(() => getUsers(), 15000);
        // console.log("On mount (first time)");
        // //Return from callback -> On dependency update
        // return () => console.log("Unmount");
        return () => clearInterval(interval);
    }, [getUsers]);

    //Populated array of dependencies -> On dependency update
    useEffect(() => {
        console.log("counter: ", users);
    }, [users]);

    return (
        <div>
            <button onClick={() => setCounter((prev) => prev + 1)}>
                Number of users: {counter}
            </button>
            <ul>
                {users.map((user) => (
                    <li>{user.name.first}</li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
