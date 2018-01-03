# Url Redirect Library

This library contains a URL content type, with an icon, and a controller mapping for all contents of this type, the controller handles the redirect to a given URL.

## Compatibility

| Lib version        | XP version |
| ------------- | ------------- |
| 2.0.0 | 6.9.0 |
| 1.0.0 | 6.2.0 |

The compatibility matrix shows official (tested) version support.

## Upgrading from 1.x to 2.x

With 2.x of this library we improved the usability of the library, but this also meant we had to break something.

To upgrade, just make sure you delete any URL template you have set up for 1.x **first**, the page controller it uses is removed from the library in 2.x and it uses a controller mapping instead to handle traffic routing.

After this, you can add the new library to your `build.gradle` and build the app again. Existing URLs added from 1.x should work as before, just without the need of a template.

## Configuration and Usage

Just start creating contents of the type "URL" and visit it to be redirected to the defined URL.

### Gradle 3+

```
plugins {
	id 'com.enonic.xp.app' version '1.0.13'
    id 'com.enonic.lib:urlredirect' version '2.0.0'
}
```

### Gradle - old

```
dependencies {
    include "com.enonic.lib:urlredirect:2.0.0"
}

repositories {
    maven {
        url 'http://repo.enonic.com/public'
    }
}
```
