---
layout: post
title: "Add Gaps to Your Linux Workspace"
date: 2023-01-18 13:42:10
images:
- linux-workspace-gaps.png
---

First of all, let's answer the most important question, "Why"?.. It's for aesthetic purposes. I find it nice to have the wallpaper -partially- visible on my workspace. Here's my current desktop with workspace gaps on the top, right and the bottom of the screen.

![Linux Workspace Gaps](/linux-workspace-gaps.png)

### Known Solutions

There are extensions that trying to provide this feature. For example, there is [Useless Gaps](https://extensions.gnome.org/extension/4684/useless-gaps/) for GNOME Shell and [Maximized Window Gap](https://store.kde.org/p/1695214/) for KDE Plasma which is I'm currently maintaining that. 

However, from what I've seen, dealing with Window Managers brings with it some issues, such as.

- Affects WM's performance
- Sometimes not work as intended
- Customizations limited by extensions' features

So, I needed a desktop-agnostic, more lightweight solution. This is where `tint2` comes into play.

### Using "tint2" as a Workspace Spacer

[tint2](https://wiki.archlinux.org/title/tint2) is a simple, light panel for GNU/Linux desktop. Apart from its purpose, it's suitable for adding gaps to a workspace.

Let's start to install and configure it.

- Install `tint2` via your package manager.
- Clone the GitHub [repository](https://github.com/murat-cileli/tint2-workspace-gaps) that contains configuration files
- Copy `.tint2rc` files into your `~/.config/tint2/`
- Launch panels with custom configuration files

```
$ tint2 -c ~/.config/tint2/tint2rc-gap-vertical-left.tint2rc
$ tint2 -c ~/.config/tint2/tint2rc-gap-vertical-right.tint2rc
$ tint2 -c ~/.config/tint2/tint2rc-gap-horizontal-top.tint2rc
$ tint2 -c ~/.config/tint2/tint2rc-gap-horizontal-bottom.tint2rc
```

I'm using a simple BASH script to launch `tint2` panels when I logged in my desktop environment.

### Tweaks & Quirks

- Gap width/height can be changed with `panel_size` property.
- Panels may not visible if `panel_shrink` set to 1 or 0 depending on your desktop environment.
- If you are not using a compositing Window Manager, try to change `1` to `0` of `panel_size` property or else there will be 1px lines around the screen edges.


To keep up to date with my latest posts, you can follow me on [LinkedIn](https://www.linkedin.com/in/murat-cileli/).