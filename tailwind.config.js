module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        body: '#F4F4F9',
        waiting_list: "#07C8F9",
        header_description: "#01295F",
        header_background: "#F4F4F9",
        brand_secondary: "#01295F",
        area: "#ECEBF3",
        header_text: "#344A53"
      },
      flex: {
        0.4: '0.6'
      },
    fontFamily: {
      // "inter": ["inter Light"]
    },
    width: {
      100: "600px",

    },
    screens: {
        "me": "400px"
    },
    backgroundImage: {
      'group1': "url('Assets/Group1.png')",
      'group2': "url('Assets/Quotebg.svg')",
    },
    }
  },
  plugins: [],
}
