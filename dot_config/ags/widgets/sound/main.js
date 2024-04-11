import PopupWindow from '../popupwindow.js'
import VolumeSlider from './volume-slider.js'
import SinkSelector from './sink-selector.js'

const SoundSettings = Widget.Box({
    spacing: 16,
    className: 'popup-content sound',
    vertical: true,
    css: "min-width: 350px; margin-right: 50px;",
    children: [
        Widget.Label({ label: "Sound", hpack: 'start', className: 'window-title'}),
        VolumeSlider(),
        SinkSelector(),
    ]
})

export default () => PopupWindow({
    name: "sound",
    anchor: ['top', 'right'],
    child: SoundSettings,
})
