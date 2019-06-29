import React, {Component} from 'react';

class Gif extends Component {
    
    // when our video has loaded we add a loaded classname
    // otherwise the video stays hidden

    constructor(props) {
        super(props)
        this.state = {
            loaded: false
        }
    }
    
    render() {
        const {loaded} = this.state
        const {images} = this.props
        return (
            <video 
            // when we have loaded the video, we add a "loaded" class
            className={`grid-item video ${loaded && 'loaded'}`} 
            autoPlay 
            loop 
            src={images.original.mp4} 
            // when the video is laoded, set the loaded state to true
            onLoadedData={() => this.setState({loaded: true})} />
        )
    }
}

export default Gif;