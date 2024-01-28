function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    // Remove the following screen breakpoint or add other breakpoints
    // if one breakpoint is not enough for you
    screens: {
      sm: "640px",
      md: "860px",
    },

    extend: {
      textColor: {
        skin: {
          base: withOpacity("--color-text-base"),
          accent: withOpacity("--color-accent"),
          inverted: withOpacity("--color-fill"),
        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity("--color-fill"),
          accent: withOpacity("--color-accent"),
          inverted: withOpacity("--color-text-base"),
          card: withOpacity("--color-card"),
          "card-muted": withOpacity("--color-card-muted"),
        },
      },
      outlineColor: {
        skin: {
          fill: withOpacity("--color-accent"),
        },
      },
      borderColor: {
        skin: {
          line: withOpacity("--color-border"),
          fill: withOpacity("--color-text-base"),
          accent: withOpacity("--color-accent"),
        },
      },
      fill: {
        skin: {
          base: withOpacity("--color-text-base"),
          accent: withOpacity("--color-accent"),
        },
        transparent: "transparent",
      },
      fontFamily: {
        mono: ["IBM Plex Mono", "monospace"],
      },

      extend: {
        textColor: {
          skin: {
            base: withOpacity("--color-text-base"),
            muted: withOpacity("--color-text-muted"),
            card: withOpacity("--color-card"),
            accent: withOpacity("--color-accent"),
            inverted: withOpacity("--color-fill"),
          },
        },
        backgroundColor: {
          skin: {
            fill: withOpacity("--color-fill"),
            accent: withOpacity("--color-accent"),
            inverted: withOpacity("--color-text-base"),
            card: withOpacity("--color-card"),
            "card-muted": withOpacity("--color-card-muted"),
            muted: withOpacity("--color-text-muted"),
            bright: withOpacity("--color-bg-bright"),
            code: withOpacity("--color-bg-code"),
          },
        },
        outlineColor: {
          skin: {
            fill: withOpacity("--color-accent"),
          },
        },
        borderColor: {
          skin: {
            line: withOpacity("--color-border"),
            fill: withOpacity("--color-text-base"),
            accent: withOpacity("--color-accent"),
          },
        },
        fill: {
          skin: {
            base: withOpacity("--color-text-base"),
            accent: withOpacity("--color-accent"),
          },
          transparent: "transparent",
        },
        fontFamily: {
          serif: ["Vollkorn", 'Iowan Old Style', 'Palatino Linotype', 'URW Palladio L', "serif"],
          mono: ["Fira Code", "IBM Plex Mono", "Menlo", "monospace"],
          sans: ["Inter", "IBM Plex", "Helvetica", "Arial", "sans-serif"],
        },
        fontSize: {
          xs: "0.6rem",
          sm: "0.8rem",
          base: "1rem",
          lg: "1.4rem",
          xl: "1.5rem",
          "2xl": "1.8rem",
          "3xl": "2rem",
          "4xl": "2.4rem",
          "5xl": "3.2rem",
          "6xl": "4.4rem",
        },
        letterSpacing: {
          wide: "0.1rem",
        },
        gridTemplateColumns: {
          main: "10rem 32rem"
        },
        borderRadius: {
          xl: "1.4rem",
          xxl: "1.8rem",
        },
        transitionTimingFunction: {
          'spring': 'cubic-bezier(.59,.3,0,2.19)',
        },
        typography: (theme) => ({
          DEFAULT: {
            css: {
              'img': {
                'borderStyle': 'none', // Disable border on images
              },
              'p, li, blockquote': {
                color: `${theme('textColor.skin.muted')} !important`, // Use custom color for paragraph text
              },
            }
          }
        }),
      },
    },
    plugins: [require("@tailwindcss/typography")],
  }
};
