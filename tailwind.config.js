module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        body: '#F4F4F9',
        waiting_list: "#07C8F9",
        header_description: "#01295F",
        header_background: "#F4F4F9"
      },
    fontFamily: {
      // "inter": ["inter Light"]
    },
    width: {
      100: "600px"
    },
    backgroundImage: {
      'group1': "url('Assets/Group1.png')",
      'group2': "url('Assets/Group2.png')",
    },
    }
  },
  plugins: [],
}
