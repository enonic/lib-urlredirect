# Url Redirect Library

This library contains a URL content type, with an icon, and a controller that handles the redirect to a given URL.

## Configuration

1. Add a dependency to your app's `build.gradle` file in the `dependencies` section.

    ```groovy
    dependencies {
       include 'com.enonic.lib:lib-urlredirect:4.0.0'
    }
    ```

2. Add a [Controller Mapping](https://developer.enonic.com/docs/xp/stable/framework/mappings) to your app's `site.xml` file.

    ```xml
    <mapping controller="/lib/urlredirect.js">
      <match>type:'[my.app.name]:url'</match>
    </mapping>
    ```

Make sure you change `[my.app.name]` into the name of your app!

## How to use

Just start creating contents of the type "URL" and visit it to be redirected to the defined URL. 
From inside Content Studio, redirects are disabled, but they can be tested via a link that will be displayed.
