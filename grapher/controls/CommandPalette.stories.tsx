import * as React from "react"
import { CommandPalette, Command } from "../controls/CommandPalette"

export default {
    title: "CommandPalette",
    component: CommandPalette,
}

export const WithCommands = () => {
    const demoCommands: Command[] = [
        {
            combo: "ctrl+o",
            fn: () => {},
            title: "Open",
            category: "File",
        },
        {
            combo: "ctrl+s",
            fn: () => {},
            title: "Save",
            category: "File",
        },
        {
            combo: "ctrl+c",
            fn: () => {},
            title: "Copy",
            category: "Edit",
        },
    ]
    return <CommandPalette commands={demoCommands} display="block" />
}
