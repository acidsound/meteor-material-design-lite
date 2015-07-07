Package.describe({
  name: 'spectrum:material-design-lite',
  version: '0.0.1',
  summary: 'material-design-lite for meteor',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.addFiles(['MaterialIcons-Regular.woff2', 'material-icons.css', 'material.js', 'material.css'], 'client');
});