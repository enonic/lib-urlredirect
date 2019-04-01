# Url Redirect Library

This library contains a URL content type, with an icon, and a controller that handles the redirect to a given URL.

Versions *1.x* of this library is not compatible with versions *2.x*.

## Upgrading from 1.x to 2.x or 3.x

With *2.x* of this library we improved the usability, but this also meant we had to break something.

To upgrade, just make sure you **first** delete any URL template in Content Studio you have set up for *1.x*. The page controller it used is removed from the library in *2.x* and will break.

After this, you can add the new library to your `build.gradle` and build the app again.

To get rendering to work, see under "Configuration".

## Configuration

From *2.x*, you must add the following [Controller Mapping](http://xp.readthedocs.io/en/6.12/developer/site/mappings/index.html) to your main app's `site.xml` file.

This is the code, add it after the closing of the `<config>`-node, within a `<mappings>`-node (create one or use an existing one):

```
<mapping controller="/lib/urlredirect.js">
  <match>type:'[my.app.name]:url'</match>
</mapping>
```

Make sure you change `[my.app.name]` into the name of your app!

## How to use

Just start creating contents of the type "URL" and visit it to be redirected to the defined URL. From inside Content Studio, redirects are disabled, but they can be tested via a link that will be displayed.

### Gradle 3+

```
plugins {
    id 'com.enonic.lib:urlredirect' version '3.0.0'
}
```

**Important note:** Enonic Gradle-plugin `com.enonic.xp.app` need to be version 1.0.15, at least.
```
id 'com.enonic.xp.app' version '1.0.15'
```

### Gradle - old

```
dependencies {
    include "com.enonic.lib:urlredirect:3.0.0"
}

repositories {
    maven {
        url 'http://repo.enonic.com/public'
    }
}
```

## Compatibility

| Lib version        | XP version |
| ------------- | ------------- |
| 3.0.0 | 7.0.0 |
| 2.0.0 | 6.12.0 |
| 1.0.0 | 6.2.0 |

The compatibility matrix shows official (tested) version support.
