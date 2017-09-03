import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
    render() {
        return(
            <div>
                <h1>
                    <Link to="/">Reduxstagram</Link>
                </h1>

                <div className="container">
                    <div className="control-buttons">
                        <Link className="button" to={'/'}>
                                <span className="comment-count">
                                    <span className="speech-bubble"> </span> Photos
                                </span>
                        </Link>
                        <Link className="button" to={'/video'}>
                                <span className="comment-count">
                                    <span className="speech-bubble"> </span> Videos
                                </span>
                        </Link>
                    </div>
                </div>
                <br />
                { React.cloneElement(this.props.children, this.props) }
            </div>
        )
    }
})

export default Main;