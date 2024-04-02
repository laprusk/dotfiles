const { Gtk } = imports.gi;

const distroID = Utils.exec(`bash -c 'cat /etc/os-release | grep "^ID=" | cut -d "=" -f 2 | sed "s/\\"//g"'`).trim();

const getDistroIcon = () => `${distroID}-symbolic`;

Gtk.IconTheme.get_default().append_search_path(`${App.configDir}/assets/icons`);

export default () => Widget.Button({
    className: 'os',
    child: Widget.Icon({
        icon: getDistroIcon(),
    }),
})