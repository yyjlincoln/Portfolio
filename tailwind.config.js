// tailwind.config.js
module.exports = {
  // ...
  variants: {
    extend: {
      backgroundColor: ['active'],
    }
  },
  theme: {
    extend: {
      screens: {
        'print': {'raw': 'print'},
      }
    }
  }
}

