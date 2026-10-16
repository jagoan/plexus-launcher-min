/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      grayscale: {
        50: '50%',
        75: '75%',
        100: '100%',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(23, 187, 214, 0.5) inset' },
          '50%': { boxShadow: '0 0 35px rgba(23, 187, 214, 1) inset' },
        },
        glowBorder: {
          '0%, 100%': { filter: 'drop-shadow(0 0 5px rgba(23, 187, 214, 0.5))' },
          '50%': { filter: 'drop-shadow(0 0 45px rgba(23, 187, 214, 1))' },
        }
        ,
        "fade-out-up": {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
            transform: "translate3d(0, -100%, 0)",
            top: "-100vh"
          },
        },
        bounce: {
          "0%": {
            transform: "translateY(0)"
          },
          "50%": {
            transform: "translateY(-15%)"
          }
        }
      },
      perspective: {
        '1500': '1500px',
        '800': '800px',
        '300': '300px',
      },
      animation: {
        glowBorder: 'glowBorder 2s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
        fadeinbouncedown: 'fade-in-bouncedown 1s ease-in-out 0.25s 1',
        fadeoutup: 'fade-out-up 2s ease-out forwards',
        bounce: 'bounce 4s infinite'
      },
      padding: {
        '9/16': '56.25%', // Aspect ratio 16:9
      },
      screens: {
        'xs': '375px',
        '3xl': '1920px', // Custom breakpoint for 1920px and above
      },
      colors: {
        'teal': '#089090',
        'purple': '#3B4175',
        'peach': '#DB6E6F',
        'green': '#739976',
        'bluesky': '#5088C5',
        'lightpurple': '#804D9A',
        'pink': '#CC2F74',
        'orange': '#E6B58C',
        'gold': '#A99442',
        'ips': '#F0B336',

      },
      backgroundImage: {
        'navbar-left': "url('/images/navbar/nav_left.webp')",
        'navbar-yellow-left': "url('/images/navbar/nav_yellow_left.webp')",
        'navbar-center': "url('/images/navbar/nav_center.webp')",
        'navbar-right': "url('/images/navbar/nav_right.webp')",
        'navbar-yellow-right': "url('/images/navbar/nav_yellow_right.webp')",
        'navbar-repeat': "url('/images/navbar/nav_repeat.webp')",
        'a1': "url('/images/body/A1.webp')",
        'a2': "url('/images/body/A2.webp')",
        'a3': "url('/images/body/A3.webp')",
        'b1': "url('/images/body/B1.webp')",
        'b2': "url('/images/body/B2.webp')",
        'b3': "url('/images/body/B3.webp')",
        'c1': "url('/images/body/C1.webp')",
        'c2': "url('/images/body/C2.webp')",
        'c3': "url('/images/body/C3.webp')",
        'c11': "url('/images/body/C11.webp')",
        'c12': "url('/images/body/C12.webp')",
        'c13': "url('/images/body/C13.webp')",
        'c41': "url('/images/body/C41.webp')",
        'c42': "url('/images/body/C42.webp')",
        'd1': "url('/images/body/D1.webp')",
        'd12': "url('/images/body/D1 - 2.webp')",
        'd13': "url('/images/body/D1 - 3.webp')",
        'd2': "url('/images/body/D2.webp')",
        'd3': "url('/images/body/D3.webp')",
        'd32': "url('/images/body/D3 - 2.webp')",
        'd33': "url('/images/body/D3 - 3.webp')",
        'e1': "url('/images/body/E1.webp')",
        'e2': "url('/images/body/E2.webp')",
        'e3': "url('/images/body/E3.webp')",
        'f1': "url('/images/body/F1.webp')",
        'f2': "url('/images/body/F2.webp')",
        'f3': "url('/images/body/F3.webp')",
        'g1': "url('/images/body/G1.webp')",
        'g2': "url('/images/body/G2.webp')",
        'g3': "url('/images/body/G3.webp')",
        'h1': "url('/images/body/H1 - 1.webp')",
        'h12': "url('/images/body/H1 - 2.webp')",
        'h13': "url('/images/body/H1 - 3.webp')",
        'h14': "url('/images/body/H1 - 4.webp')",
        'h2': "url('/images/body/H2 - 1.webp')",
        'h22': "url('/images/body/H2 - 2.webp')",
        'h23': "url('/images/body/H2 - 3.webp')",
        'h24': "url('/images/body/H2 - 4.webp')",
        'h3': "url('/images/body/H3 - 1.webp')",
        'h32': "url('/images/body/H3 - 2.webp')",
        'h33': "url('/images/body/H3 - 3.webp')",
        'h34': "url('/images/body/H3 - 4.webp')",
        'title-left': "url('/images/content/title_left.webp')",
        'title-center': "url('/images/content/title_center.webp')",
        'title-right': "url('/images/content/title_right.webp')",
        'cards-ip': "url('/images/content/catridge_IP.webp')",
        'cards-ip-empty': "url('/images/content/catridge_IP_empty.webp')",
        'cards-categories': "url('/images/content/catridge_categories.webp')",
        'cards-disabled': "url('/images/content/catridge_disabled.webp')",
        'cards-categories-empty': "url('/images/content/catridge_categories_empty.webp')",
        'prevBtnHov': "url('/images/content/carousel_button_prev_hover.webp')",
        'prevBtn': "url('/images/content/carousel_button_prev.webp')",
        'nextBtnHov': "url('/images/content/carousel_button_next_hover.webp')",
        'nextBtn': "url('/images/content/carousel_button_next.webp')",
        'videos': "url('/images/content/catridge_detail_normal.webp')",
        'videos-hover': "url('/images/content/catridge_detail_hover.webp')",
        'tab_button_active_left': "url('/images/content/tab_button_active_left.webp')",
        'tab_button_active_center': "url('/images/content/tab_button_active_center.webp')",
        'tab_button_active_right': "url('/images/content/tab_button_active_right.webp')",
        'tab_button_inactive_left': "url('/images/content/tab_button_inactive_left.webp')",
        'tab_button_inactive_center': "url('/images/content/tab_button_inactive_center.webp')",
        'tab_button_inactive_right': "url('/images/content/tab_button_inactive_right.webp')",
        'ab1': "url('/images/about/emboss bg 1.webp')",
        'ab2': "url('/images/about/emboss bg 2.webp')",
        'ab3': "url('/images/about/emboss bg 3.webp')",
        'ab4': "url('/images/about/emboss bg 4.webp')",
        'ab5': "url('/images/about/emboss bg 5.webp')",
        'ab6': "url('/images/about/emboss bg 6.webp')",
        'ab7': "url('/images/about/emboss bg 7.webp')",
        'ab8': "url('/images/about/emboss bg 8.webp')",
        'ab9': "url('/images/about/emboss bg 9.webp')",
        'so-white': "url('/images/content/so-white.webp')",
        'btn-nav-left': "url('/images/content/tab_bg_left.webp')",
        'btn-nav-center': "url('/images/content/tab_bg_center.webp')",
        'btn-nav-right': "url('/images/content/tab_bg_right.webp')",
        'title_ip_pill_left': "url('/images/content/title_ip_pill_left.webp')",
        'title_ip_pill_center': "url('/images/content/title_ip_pill_center.webp')",
        'title_ip_pill_right': "url('/images/content/title_ip_pill_right.webp')",
        'title_pill_left': "url('/images/content/title_pill_left.webp')",
        'title_pill_center': "url('/images/content/title_pill_center.webp')",
        'title_pill_right': "url('/images/content/title_pill_right.webp')",
        'tab_bg_b_left': "url('/images/content/tab_bg_b_left.webp')",
        'tab_bg_b_right': "url('/images/content/tab_bg_b_right.webp')"
      },
      boxShadow: {
        'pilmenu': '0 2px rgba(0, 0, 0, 0.17)',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.perspective-1500': {
          perspective: '1500px',
        },
        '.perspective-800': {
          perspective: '800px',
        },
        '.perspective-300': {
          perspective: '300px',
        },
      })
    }
  ],
}

