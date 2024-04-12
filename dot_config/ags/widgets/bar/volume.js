import PanelButton from './panel-button.js';

const audio = await Service.import('audio');

const icon = Widget.Icon().hook(audio.speaker, self => {
    const vol = audio.speaker.volume * 100;
    const icon = [
        [101, 'overamplified'],
        [67, 'high'],
        [34, 'medium'],
        [1, 'low'],
        [0, 'muted'],
    ].find(([threshold]) => Number(threshold) <= vol)?.[1];

    self.icon = `audio-volume-${icon}-symbolic`;
});

const label = Widget.Label().hook(audio.speaker, self => {
    self.label = `${Math.round(audio.speaker.volume * 100)}%`;
});

export default () => PanelButton({
    window: 'sound',
    children: [
        icon,
        label,
    ],
    on_secondary_click: () => audio.speaker.is_muted = !audio.speaker.is_muted,
});

// export default () => Widget.Button({
//     className: 'volume',
//     on_clicked: () => App.toggleWindow('sound'),
//     // on_primary_click: () => App.toggleWindow('sound'),
//     on_secondary_click: () => audio.speaker.is_muted = !audio.speaker.is_muted,
//     child: Widget.Box({
//         spacing: 4,
//         children: [icon, label],
//     }),
// })