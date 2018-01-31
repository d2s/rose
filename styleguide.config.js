module.exports = {
  ignore: [
    '**/*.spec.js',
    '**/*.test.js'
  ],
  sections: [
    {
      name: 'Introduction',
      content: 'documentation/introduction.md'
    },
    {
      name: 'Documentation',
      sections: [
        {
          name: 'Installation',
          content: 'documentation/installation.md',
          description: 'The description for the installation section'
        },
        {
          name: 'Configuration',
          content: 'documentation/configuration.md'
        }
      ]
    },
    {
      name: 'UI Components',
      content: 'documentation/ui.md',
      components: 'src/components/**/*.js'
    }
  ]
}
