import { useState } from "react";

const Form = () => {
    const [formstate, setformstate] = useState({
        name: "",
        password: "",
    });

    const handleChange = (event) => {
        setformstate((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formstate);
    };

    return (
        <>
            <div>
                {formstate.name} {formstate.password}
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formstate.name}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    value={formstate.password}
                    onChange={handleChange}
                />
                <input type="submit" />
            </form>
        </>
    );
};

export default Form;
