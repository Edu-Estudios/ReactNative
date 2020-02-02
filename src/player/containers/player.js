import React, {Component} from 'react'
import {
    StyleSheet
} from 'react-native'
import Video from 'react-native-video'
import Layout from '../components/layout'

class Player extends Component {
    render() {
        return(
            <Layout 
            video={
                <Video source={{uri: 'https://rawgit.com/uit2712/Mp3Container/master/tom_and_jerry_31.mp4'}}
                    ref={(ref) => {
                        this.player = ref
                    }}                                      // Store reference
                    onBuffer={this.onBuffer}                // Callback when remote video is buffering
                    onError={this.videoError}               // Callback when video cannot be loaded
                    style={styles.video}
                    resizeMode="container">
                </Video>
            }></Layout>
        )
    }
}

const styles = StyleSheet.create({
    video: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0
    }
})

export default Player