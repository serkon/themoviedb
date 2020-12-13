import React, { useEffect } from "react";
import { myObserver } from "~/utils/resize-observe";

export default class Detail extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const someEl = document.querySelector('body');
        myObserver((entry) => console.log("resize:", entry)).observe(someEl);
    }
    render() {
        return (
            <h1>deneme</h1>
        );
    }
}
