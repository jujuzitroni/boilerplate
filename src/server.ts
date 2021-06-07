import express from 'express';

const app = express();

// Serve app production bundle
app.use(express.static('dist/app'));

// Serve storybook production bundle
app.use('/storybook', express.static('dist/storybook'));
