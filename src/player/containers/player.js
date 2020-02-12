import React, {Component} from 'react'
import {
    StyleSheet,
    ActivityIndicator, // Indicador de cargando
    Text
} from 'react-native'
import Video from 'react-native-video'
import Layout from '../components/layout'
import ControlLayout from '../components/control-layout'
import PlayPause from '../components/play-pause'

class Player extends Component {
    state = {
        loading: true
    }
    // Metodo para controlar si el video está cargando o no
    onBuffer = ({isBuffering}) => {
        this.setState({
            loading: isBuffering,
            paused: false
        })
    }
    // Cuando carga pone el loading a false (necesario para que funcione bien en Android)
    onLoad = () => {
        this.setState({
            loading: false
        })
    }
    // Se va a utilizar para controlar el funcionamiento del botón de Play/Pausa
    playPause = () => {
        this.setState({paused: !this.state.paused})
    }
    render() {
        return(
            <Layout
            loading={this.state.loading}
            video={
                <Video source={{/* uri: 'https://rawgit.com/uit2712/Mp3Container/master/tom_and_jerry_31.mp4' */}}
                    ref={(ref) => {
                        this.player = ref
                    }}                                      // Store reference
                    onBuffer={this.onBuffer}                // Callback when remote video is buffering
                    onError={this.videoError}               // Callback when video cannot be loaded
                    onLoad={this.onLoad}
                    style={styles.video}
                    paused={this.state.paused}
                    resizeMode="container">
                </Video>
            }
            loader={
                <ActivityIndicator color="red"/>
            }
            controls={
                <ControlLayout>
                    <PlayPause onPress={this.playPause} paused={this.state.paused}/>
                    <Text>progress bar</Text>
                    <Text>time left</Text>
                    <Text>fullscreen</Text>
                </ControlLayout>
            }
            />
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