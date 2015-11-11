# lib-url

This library contains a URL content type and a page template (controller) for redirecting to this URL.

## Compatibility

| Lib version        | XP version |
| ------------- | ------------- |
| 1.0.0 | 6.2.0 |

The compatibility matrix shows official (tested) version support. The library might work with other (earlier) versions of Enonic XP, but this is not tested.

## Configuration

Set up a simple page template for showing content based on the URL content type. The page template should use the "URL redirect" template and should support the "URL" content type.

### Gradle build dependency

```
dependencies {
    include "com.enonic.lib:url:1.0.0"
}

repositories {
    maven {
        url 'http://repo.enonic.com/public'
    }
}
```