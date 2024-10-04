# nodekit-examples

Set of examples for [NodeKit](https://github.com/gravity-ui/nodekit) and [ExpressKit](https://github.com/gravity-ui/expresskit) projects.

Development usage:

```bash
mkdir nodekit-dev && cd nodekit-dev

# Cloning and linking base libraries
(git clone git@github.com:gravity-ui/nodekit && cd nodekit && npm ci && npm run build && npm link)
(git clone git@github.com:gravity-ui/expresskit && cd expresskit && npm ci && npm run build && npm link)
(git clone git@github.com:anton-fomichev/openapi-extension.git && cd openapi-extension && npm ci && npm run build && npm link)

# Cloning examples
git clone git@github.com:anton-fomichev/nodekit-examples.git
cd nodekit-examples/openapi

# Linking examples with base libraries
npm ci && npm link @gravity-ui/nodekit && npm link @gravity-ui/expresskit && npm link openapi-extension

# Running example app
npm run dev
```
