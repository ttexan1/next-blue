// referrence https://github.com/welldone-software/why-did-you-render
import React from 'react';

if (process.env.NODE_ENV === 'development') {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line
    const whyDidYouRender = require('@welldone-software/why-did-you-render');
    whyDidYouRender(React, { trackAllPureComponents: true });
  }
}
