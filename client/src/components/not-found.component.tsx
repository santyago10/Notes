import * as React from "react";
import { Link } from "react-router-dom";

class NotFound extends React.Component{
    render(){
        return <h3>This page does not exist, go to <Link to = "/">main</Link> page</h3>
    }
}

export default NotFound;