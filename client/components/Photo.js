import React from 'react';
import { Link } from 'react-router';

const Photo = React.createClass({
    render() {
        const { post, i, comments } = this.props;
        return(
            <figure className="grid-figure">
                <Link to={`/view/${post.code}`}>
                    <img src={post.display_src} alt={post.caption} className="grid-photo" />
                    {post.caption}
                </Link>
            </figure>
        )
    }
})

export default Photo;