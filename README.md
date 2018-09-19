# @lightscript/babel-preset

The best way to get up and running with [LightScript](http://wcjohnson.github.io/lightscript)

## Usage

```
$ npm install --save-dev @lightscript/babel-preset
```

```js
// .babelrc
{
  "presets": [
    [
      "@lightscript",
      {
        "env": { "targets": { "ie": 10 } }
      }
    ]
  ]
}
```
> `@lightscript/babel-preset` includes `@babel/env` and options can be
> passed in the `env` key!

## Contributing

Issues: https://github.com/wcjohnson/lightscript/issues
