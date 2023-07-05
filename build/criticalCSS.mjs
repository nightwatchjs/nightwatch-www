import {generate} from 'critical';

generate({
  inline: true,
  base: 'out/',
  src: 'index.html',
  target: {
    html: 'index.html',
    uncritical: 'css/landing/style.css'
  },
  dimensions: [
    {
      height: 200,
      width: 500
    },
    {
      height: 900,
      width: 1400
    }
  ],
  // ignore CSS rules
  ignoreInlinedStyles: true
});
