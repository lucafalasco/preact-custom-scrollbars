preact-custom-scrollbars
=========================

This is a port of malte-wessel's  [react-custom-scrollbars](https://github.com/malte-wessel/react-custom-scrollbars) for [Preact](https://github.com/developit/preact)


[![npm](https://img.shields.io/badge/npm-preact--custom--scrollbars-brightgreen.svg?style=flat-square)](https://www.npmjs.com/package/preact-custom-scrollbars)
[![npm version](https://img.shields.io/npm/v/preact-custom-scrollbars.svg?style=flat-square)](https://www.npmjs.com/package/preact-custom-scrollbars)
[![npm downloads](https://img.shields.io/npm/dm/preact-custom-scrollbars.svg?style=flat-square)](https://www.npmjs.com/package/preact-custom-scrollbars)

* frictionless native browser scrolling
* native scrollbars for mobile devices
* [fully customizable](https://github.com/lucafalasco/preact-custom-scrollbars/blob/master/docs/customization.md)
* [auto hide](https://github.com/lucafalasco/preact-custom-scrollbars/blob/master/docs/usage.md#auto-hide)
* [auto height](https://github.com/lucafalasco/preact-custom-scrollbars/blob/master/docs/usage.md#auto-height)
* [universal](https://github.com/lucafalasco/preact-custom-scrollbars/blob/master/docs/usage.md#universal-rendering) (runs on client & server)
* `requestAnimationFrame` for 60fps
* no extra stylesheets
* well tested, 100% code coverage

**[Documentation](https://github.com/lucafalasco/preact-custom-scrollbars/tree/master/docs)**

## Installation
```bash
npm install preact-custom-scrollbars --save
```
or
```bash
yarn add preact-custom-scrollbars
```

This assumes that you’re using [npm](http://npmjs.com/) or [yarn](https://yarnpkg.com/lang/en/) package manager with a module bundler like [Webpack](http://webpack.github.io) or [Browserify](http://browserify.org/) to consume [CommonJS modules](http://webpack.github.io/docs/commonjs.html).

If you don’t yet use [npm](http://npmjs.com/) or a modern module bundler, and would rather prefer a single-file [UMD](https://github.com/umdjs/umd) build that makes `PreactCustomScrollbars` available as a global object, you can grab a pre-built version from [unpkg](https://unpkg.com/preact-custom-scrollbars/dist/preact-custom-scrollbars.js). We *don’t* recommend this approach for any serious application, as most of the libraries complementary to `preact-custom-scrollbars` are only available on [npm](http://npmjs.com/).

## Usage

This is the minimal configuration. [Check out the Documentation for advanced usage](https://github.com/lucafalasco/preact-custom-scrollbars/tree/master/docs).

```javascript
import { Scrollbars } from 'preact-custom-scrollbars';

class App extends Component {
  render() {
    return (
      <Scrollbars style={{ width: 500, height: 300 }}>
        <p>Some great content...</p>
      </Scrollbars>
    );
  }
}
```

The `<Scrollbars>` component is completely customizable. Check out the following code:

```javascript
import { Scrollbars } from 'preact-custom-scrollbars';

class CustomScrollbars extends Component {
  render() {
    return (
      <Scrollbars
        onScroll={this.handleScroll}
        onScrollFrame={this.handleScrollFrame}
        onScrollStart={this.handleScrollStart}
        onScrollStop={this.handleScrollStop}
        onUpdate={this.handleUpdate}
        renderView={this.renderView}
        renderTrackHorizontal={this.renderTrackHorizontal}
        renderTrackVertical={this.renderTrackVertical}
        renderThumbHorizontal={this.renderThumbHorizontal}
        renderThumbVertical={this.renderThumbVertical}
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        autoHeight
        autoHeightMin={0}
        autoHeightMax={200}
        thumbMinSize={30}
        universal={true}
        {...this.props}>
    );
  }
}
```

All properties are documented in the [API docs](https://github.com/lucafalasco/preact-custom-scrollbars/blob/master/docs/API.md)

## Tests
```bash
# Make sure that you've installed the dependencies
npm install
# Run tests
npm test
```

### Code Coverage
```bash
# Run code coverage. Results can be found in `./coverage`
npm run test:cov
```


## License

MIT
