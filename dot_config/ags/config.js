import Bar from './widgets/bar/main.js'
import Sound from './widgets/sound/main.js'

App.config({
    style: './style.css',
    windows: [
        Bar(),
        Sound(),
    ],
    closeWindowDelay: {
        "sound": 200,
    }
})