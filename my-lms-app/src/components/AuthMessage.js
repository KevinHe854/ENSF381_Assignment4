import { useContext } from "react";
import { DisplayContext } from "./LoginForm";
import DisplayStatus from "./DisplayStatus";

function AuthMessage () {
    var { type } = useContext(DisplayContext);
    var { message } = useContext(DisplayContext);
    console.log(type);
    return (
        <div>
            <DisplayStatus type={type} message={message}/>
        </div>
    );
}

export default AuthMessage;