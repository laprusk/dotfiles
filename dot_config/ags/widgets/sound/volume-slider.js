const audio = await Service.import('audio')

const VolumeIndicator = (type = "speaker") => Widget.Button({
    vpack: 'center',
    className: 'volume-slider-indicator',
    on_clicked: () => audio[type].is_muted = !audio[type].is_muted,
    child: Widget.Icon().hook(audio.speaker, self => {
        const vol = audio.speaker.volume * 100;
        const icon = [
            [101, 'overamplified'],
            [67, 'high'],
            [34, 'medium'],
            [1, 'low'],
            [0, 'muted'],
        ].find(([threshold]) => Number(threshold) <= vol)?.[1];
    
        self.icon = `audio-volume-${icon}-symbolic`;
    }),
})

const VolumeSlider = (type = "speaker") => Widget.Slider({
    hexpand: true,
    draw_value: false,
    className: 'volume-slider',
    on_change: ({ value, dragging }) => {
        if (dragging) {
            audio[type].volume = value
            audio[type].is_muted = false
        }
    },
    value: audio[type].bind('volume'),
})

export default () => Widget.Box({
    className: 'volume-slider-box',
    spacing: 8,
    children: [
        VolumeIndicator(),
        VolumeSlider(),
    ],
})