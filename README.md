# Url Redirect Library

This library contains a URL content type, with an icon, and a controller mapping for all contents of this type, the controller handles the redirect to a given URL.

## Compatibility

| Lib version        | XP version |
| ------------- | ------------- |
| 2.0.0 | 6.9.0 |
| 1.0.0 | 6.2.0 |

The compatibility matrix shows official (tested) version support. The library might work with other (earlier) versions of Enonic XP, but this is not tested.

## Configuration

Just start creating contents of the type "URL" and visit it to be redirected to the defined URL.

### Gradle 3+

```
plugins {
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
