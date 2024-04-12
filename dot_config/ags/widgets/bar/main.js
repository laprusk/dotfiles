import Clock from './clock.js'
import Os from './os.js'
import Workspaces from './workspaces.js'
import Title from './title.js'
import Volume from './volume.js'

const Left = () => Widget.Box({
    spacing: 8,
    children: [
        Title(),
    ]
})

const Center = () => Widget.Box({
    spacing: 4,
    children: [
        Os(),
        Workspaces(),
    ]
})

const Right = () => Widget.Box({
    hpack: "end",
    spacing: 16,
    children: [
        Volume(),
        Clock(),
    ]
})

export default (monitor = 0) => Widget.Window({
    monitor,
    className: 'bar',
    name: `bar-${monitor}`,
    anchor: ['top', 'left', 'right'],
    exclusivity: 'exclusive',
    child: Widget.CenterBox({
        className: 'bar-content',
        start_widget: Left(),
        center_widget: Center(),
        end_widget: Right(),
    }),
})