# browser-stacks

sample errors from browsers

## stack files

See the `stacks` directory for all the error files. Each file is `<browser>_<version>.json` and contains the error object. Each error object has the enumerable fields and specific access on the stack field.

## regenerate

You need a saucelabs account

```shell
$ DEBUG=browser-stacks ./run <sauce username> <sauce key>
```
