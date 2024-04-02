const { GLib } = imports.gi

const format = "%Y/%m/%d   %H:%M"

const clock = Variable(GLib.DateTime.new_now_local(), {
    poll: [1000, () => GLib.DateTime.new_now_local()],
})

const time = Utils.derive([clock], (clock) => clock.format(format) || "")

export default () => Widget.Label({
    class_name: "clock",
    label: time.bind(),
})
