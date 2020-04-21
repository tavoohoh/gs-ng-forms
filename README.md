# gs-forms-core

You are welcome to collaborate!

TODO: update documentation

For library implementation please go to [gs-form readme](https://bitbucket.org/rappinc/rpp-ngforms-lib/src/master/README.md).

## Install:
```sh
npm install
```

## Serve:
```sh
ng serve
```

## Release:
- You will need Rappi PROD VPN connected. If you do not have this VPN configured,
request one at https://rappidev.atlassian.net/servicedesk/customer/portal/26/group/84

- Login into rappipay registry, you only need to do this once:
```sh
npm login --registry=http://repo.ops.rappi.com/repository/npm-hosted/
```

- Publish the new changes.
Make sure to update the library version before doing this, otherwise npm will reject the changes:
```sh
ng-packagr -p projects/gs-forms/ng-package.json
cd ./dist/gs-forms && npm publish --registry http://repo.ops.rappi.com/repository/npm-hosted/
```

# Publish the new package version to Nexus
npm publish
```

And navigate to [http://localhost:4200/](http://localhost:4200/)

## Questions and issues:
gustavo.santamaria@rappi.com or jhon.castillo@rappi.com
