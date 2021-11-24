import Form from "./components/Form";
import Users from "./components/Users";
import { Routes, Route, Link } from "react-router-dom";
const App = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">Form</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<Form />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </>
    );
};

export default App;
