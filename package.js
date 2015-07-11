Package.describe({
  name: 'spectrum:material-design-lite',
  version: '0.0.4',
  summary: 'material-design-lite for meteor',
  git: 'https://github.com/acidsound/meteor-material-design-lite.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.addFiles(['MaterialIcons-Regular.ttf', 'MaterialIcons-Regular.woff', 'MaterialIcons-Regular.woff2', 'material-icons.css', 'material.js', 'material.css'], 'client');
});
