import Application from '@waline/vercel';

export 默认 Application({
  plugins: [],
  async postSave(comment) {
    // do what ever you want after comment saved
  },
});
