const hyprland = await Service.import('hyprland')

const dispatch = ws => hyprland.messageAsync(`dispatch workspace ${ws}`);

const toRoman = num => {
    const roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
    return roman[num - 1] || num;
}

const visibleWorkspaces = 5;

const workspaceButtons = Widget.Box({
    children: Array.from({ length: 10 }, (_, i) => i + 1).map(i => Widget.Button({
        className: 'workspace',
        attribute: i,
        label: `${i}`,
        onClicked: () => dispatch(i),
        setup: self => self.hook(hyprland, () => {
            self.toggleClassName('active', hyprland.active.workspace.id === i);
            self.toggleClassName("occupied", (hyprland.getWorkspace(i)?.windows || 0) > 0)
        })
    })),

    // Only 5 buttons will be visible, the rest will be hidden
    setup: self => self.hook(hyprland, () => self.children.forEach(btn => {
        btn.visible = btn.attribute <= visibleWorkspaces
            || hyprland.workspaces.some(ws => ws.id === btn.attribute);
    })),

    // remove this setup hook if you want fixed number of buttons
    // setup: self => self.hook(hyprland, () => self.children.forEach(btn => {
    //     btn.visible = hyprland.workspaces.some(ws => ws.id === btn.attribute);
    // })),
})

export default () => Widget.EventBox({
    className: 'workspaces',
    onScrollUp: () => dispatch('-1'),
    onScrollDown: () => dispatch('+1'),
    child: workspaceButtons,
})