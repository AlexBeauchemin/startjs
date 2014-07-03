startjs
=======

StartJS is a small, clean, structured and optimized javascript flow using Grunt, Requirejs, Ring.js and R.js

First of all, let requirejs handle all your javascript includes. The only javascript file you should include (exceptions may occur) is this one with a little bit of javascript to start your app.

In development :
```html
<script>
    var require = {
        baseUrl: '/js/src'
    };
</script>

<script data-main="common" src="/js/src/libs/require.js"></script>
<script>
    requirejs(['App'], function() { });
</script>
```

In production :
```html
<script>
    var require = {
        baseUrl: '/js/dest'
    };
</script>

<script src="/js/dest/common.js"></script>
```

App.js parse the page and search for the data-view attribute of the body tag, the body of your page being the default container for your application.
If you want to change the default container for some other element, change the selector at the end of App.js

For example, if you want your container to be the div with the class "content", change this :

```javascript
//App.js (end of the file)
var App;

$(function () {
  App = new $[className]($('.content'));
});
```

```html
<body>
  <div class="content" data-view="Home">
    ...
  </div>
</body>
```

Every javascript dependencies are in the top of your javascript files. Files that are used in every pages should be referenced at the top of App.js or View.js. Libraries that depends on other libraries (like ring.js need underscore to work properly), needs to be defined in the shim section of common.js

Require will automatically load the javascript file with the same name you declared in the data-view attribute of the current page. For example, if you create a contact page, add data-view="Contact" on your page's container and create a file named ViewContact.js in src/views (copy/paste ViewHome.js and rename it).
Add your dependencies at the top of the file and change the className for "ViewContact".

Every views extends View.js, so if you want to have code accessible/executed in every page, add it there.
You can use the view's container to access dom element in your page, so instead of using $('.myitem') , you should use _this.$el.find('.myitem')

By default, StartJs is presented as a static "view" manager. But it can easily be modified to be used as a module or model manager or even for ajax injection of templates/modules/etc.

For more information, see [requirejs](http://requirejs.org/), [ring.js](http://ringjs.neoname.eu/) and [grunt](http://gruntjs.com/) 

Once you are ready to go in production, swap the code at the bottom of your HTML (see top of the help) and publish with grunt to generate the optimized javascript files (dest folder) using the command:
```
grunt publish
```

You can see what is being built in the file /js/dest/build.txt
Basically, your app will now load only two files : common.js and the view for the current page you are in (ViewHome.js for example). Everything is bundled and minified in these files, in the proper order.






