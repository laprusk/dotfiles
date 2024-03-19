#!/bin/sh

# Install packages for Arch-based systems
{{ if eq .chezmoi.os "linux" }}
{{   if (or (eq .chezmoi.osRelease.id "arch") (eq .chezmoi.osRelease.idLike "arch" )) }}

function install_yay {
    if ! command -v yay &> /dev/null; then
        git clone https://aur.archlinux.org/yay.git /tmp/yay
        cd /tmp/yay
        makepkg -si --noconfirm
    fi
}

function setup_desktop {
    sudo pacman -S --needed --noconfirm \
        fcitx5-im \
        fcitx5-mozc \
        firefox \
        kitty \
        lxappearance \
        pavucontrol \
        pipewire \
        pipewire-pulse \
        pipewire-alsa \
        pipewire-jack \
        qt5ct \
        qt6ct \
        thunar \
        wireplumber

    yay -S --needed --noconfirm \
        visual-studio-code-bin

    install_hyprland
}

function install_hyprland {
    sudo pacman -S --needed --noconfirm \
        dunst \
        hyprland \
        hyprpaper \
        polkit-kde-agent \
        qt5-wayland \
        qt6-wayland \
        sddm \
        waybar \
        wlogout \
        wofi \
        xdg-desktop-portal-hyprland
    
    sudo systemctl enable sddm.service
}

sudo -v

sudo pacman -Syyu --noconfirm
sudo pacman -S --needed --noconfirm \
    curl \
    docker \
    docker-compose \
    git \
    sheldon \
    starship \
    zsh

# yay
echo "Installing yay..."
install_yay

# Desktop
{{ if .desktop }}
setup_desktop
{{ end }}

{{   end }}
{{ end }}