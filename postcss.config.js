const purgecss = require('@fullhuman/postcss-purgecss')({

    // Specify the paths to all of the template files in your project
    content: [
    //   './src/**/*.html',
      './src/**/*.vue',
      // etc....
    ],
  
    // This is the function used to extract class names from your templates
    defaultExtractor: content => {
      // Capture as liberally as possible, including things like `h-(screen-1.5)`
      const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
  
      // Capture classes within other delimiters like .block(class="w-1/2") in Pug
      const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
  
      return broadMatches.concat(innerMatches)
    }
  })

module.exports = {
    plugins: [
        // use @import in css , when you use @import in css , it must come first.
        // and you can use @import instead of @tailwind , just like
        // @tailwindcss utilities -> @import "tailwindcss/utilities"
        // require('postcss-import'),

        // use tailwindcss
        require('tailwindcss'),
        

        // write like sass nesting syntax
        // require('postcss-nested'),


         // PurgeCss  壓縮 css
        //  ...process.argv[2].includes('production')
        //    ? [purgecss]
        //    : []
        
    ]
  }
