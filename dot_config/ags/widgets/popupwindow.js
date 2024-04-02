const Revealer = ({
    name,
    child,
    transition = 'slide_down',
}) => Widget.Box(
    { css: "padding: 1px;" },
    Widget.Revealer({
        // @ts-ignore
        transition,
        child,
        // child: Widget.Box({
        //     class_name: "window-content",
        //     child,
        // }),
        transition_duration: 200,
        // @ts-ignore
        setup: self => self.hook(App, (_, wname, visible) => {
            if (wname === name)
                self.reveal_child = visible
        }),
    }
))

export default ({
    name,
    child,
    anchor,
    ...props
}) => Widget.Window({
    name,
    className: 'popup-window',
    anchor,
    exclusivity: 'exclusive',
    layer: 'top',
    visible: false,
    keymode: 'on-demand',
    child: Revealer({ name, child }),
    setup: w => w.keybind("Escape", () => App.closeWindow(name)),
    ...props
})
