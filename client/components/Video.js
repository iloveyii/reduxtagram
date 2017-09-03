import React from 'react';
import { Link } from 'react-router';
import ReactPlayer from 'react-player';

const Video = React.createClass({
    render() {
        const { url, i } = this.props;
        const fileName = /[^/]*$/.exec(url)[0];

        return(
            <figure className="grid-figure">
                <div className="grid-photo-wrap">
                    <Link to={`/video/${fileName}`}>
                        <ReactPlayer width="100%" height="100%" url={url} key={i} controls={true} style={{width:'100%', height:'100%'}}/>
                    </Link>
                </div>

            </figure>
        )
    }
})

export default Video;