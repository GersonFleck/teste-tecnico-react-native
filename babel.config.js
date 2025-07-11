module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'], 
        alias: {
          '@services': './src/services',
          '@screens': './src/screens',
        },
      },
    ],
  ],
};