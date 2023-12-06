import type { Config } from "tailwindcss"
import { withUt } from "uploadthing/tw"

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#282e3f",
                secondary: "#333a4d",
                accent: "#c18f59",
                "input-color": "#334155",
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/theming/themes")["light"],
                    primary: "#282e3f",
                    secondary: "#333a4d",
                    accent: "#c18f59",
                    neutral: "#3d4451",
                    "base-100": "#ffffff",
                    info: "#778ad4",
                    success: "#23b893",
                    warning: "#f79926",
                    error: "#ea535a",
                    body: {
                        "background-color": "white",
                    },
                },
            },
            "dark",
        ],
    },
}

export default withUt(config)
