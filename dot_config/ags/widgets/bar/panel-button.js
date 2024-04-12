export default ({
    window = "",
    children,
    ...rest
}) => Widget.Button({
    child: Widget.Box({ children, spacing: 4 }),
    on_clicked: () => App.toggleWindow(window),
    setup: self => {
        let open = false

        self.toggleClassName('panel-button')
        self.toggleClassName(window)

        self.hook(App, (_, win, visible) => {
            if (win !== window)
                return

            if (open && !visible) {
                open = false
                self.toggleClassName("active", false)
            }

            if (visible) {
                open = true
                self.toggleClassName("active")
            }
        })
    },
    ...rest
})