# @lightscript/preset

The best way to get up and running with [LightScript](http://wcjohnson.github.io/lightscript)

## Usage

```
$ npm install --save-dev @lightscript/preset
```

```js
// .babelrc
{
  "presets": [
    [
      "@lightscript/preset",
      {
        "env": { "targets": { "ie": 10 } }
      }
    ]
  ]
}
```
> `@lightscript/preset` includes `@babel/env` and options can be
> passed in the `env` key!
