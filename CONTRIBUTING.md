Contributing
============

Welcome, so you are thinking about contributing ?
Awesome, this a great place to start.

Setup
-----

```bash
git clone git@github.com:williambelle/williambelle.github.io.git
cd williambelle.github.io
npm i
```

Test
----

```bash
npm t
```

Run
---

```bash
npm run serve
```

This will start a web server on http://localhost:8300

Deploy
------

```bash
npm run deploy
```

This will automatically deploy the `www` folder on GitHub pages.
See [https://williambelle.github.io/](https://williambelle.github.io/).

Release
-------

  1. Bump the correct version (`npm version [<newversion> | major | minor | patch]`)
  2. Update the file [CHANGELOG.md](CHANGELOG.md)
  3. Create the tag (`git tag -a v<version> -m "Tagging the v<version> release"`)

License
-------

The MIT License (MIT)

See the [LICENSE](LICENSE) file for more details.
