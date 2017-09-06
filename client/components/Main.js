import React from 'react';
import { Link } from 'react-router';

const categories = [
    { label: 'Photos', to: '/'},
    { label: 'Videos', to: '/video'},
    { label: 'Action', to: '/'},
    { label: 'Adventure', to: '/video'},
    { label: 'War', to: '/'},
    { label: 'Comedy', to: '/video'},
];

const Main = React.createClass({

    renderButtons(link, i) {
        return (
            <Link key={i} className="button" to={link.to}>
                <span className="comment-count">
                    <span className="speech-bubble"> </span> {link.label}
                </span>
            </Link>
        );
    },

    render() {
        return(
            <div>
                <h1>
                    <Link to="/">Reduxstagram</Link>
                </h1>

                <div className="menu-grid">
                    <div className="control-buttons">
                        { categories.map(this.renderButtons) }
                    </div>
                </div>
                <br />
                { React.cloneElement(this.props.children, this.props) }
                <br />
            </div>
        )
    }
})

export default Main;