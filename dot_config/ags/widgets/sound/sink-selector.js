const audio = await Service.import('audio')

const SinkItem = (stream) => Widget.Button({
    hexpand: true,
    className: 'sink-item',
    on_clicked: () => audio.speaker = stream,
    child: Widget.Box({
        children: [
            Widget.Label({
                className: "active-label",
                // visible: audio.speaker.bind("stream").as(s => s === stream.stream),
            }),
            // Widget.Icon({ icon: 'audio-card-symbolic' }),
            Widget.Label({ label: stream.description, className: 'sink-description'}),
            // Widget.Icon({
            //     icon: 'object-select-symbolic',
            //     hexpand: true,
            //     hpack: "end",
            //     visible: audio.speaker.bind("stream").as(s => s === stream.stream),
            // }),
        ],
    }),
    setup: self => self.hook(audio.speaker, self => {
        self.toggleClassName('active', audio.speaker.stream === stream.stream)
    }),
})

export default () => Widget.Box({
    className: 'sink-selector',
    vertical: true,
    spacing: 12,
    children: [
        Widget.Label({ label: "Output", hpack: 'start', className: "section-title"}),
        Widget.Box({
            vertical: true,
            children: audio.bind("speakers").as(a => a.map(SinkItem)),
        }),
    ]
})

// export default () => Widget.Box({
//     vertical: true,
//     children: audio.bind("speakers").as(a => a.map(SinkItem)),
// })