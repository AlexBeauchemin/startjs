startjs
=======

StartJS is a small, clean and structured javascript flow using Requirejs and Mootools Classes.

First of all, let requirejs handle all your javascript includes. The only javascript file you should include (exceptions may occur) is this one
```html
<script data-main="boot.js" src="/lib/require.js"></script>
```

Boot.js handle your dependencies via requirejs and create your app. Then, app.js parse the page and search for the data-view attribute on the body, the body of your page being the default container for your application.
If you want to change the default container for some other element, change the selector in boot.js

For example, if you want your container to be the div with the class "content", change this :

```javascript
//boot.js (end of the file)
$(function () {
  App = new $.App($('.content'));
});
```

```html
<body>
  <div class="content" data-view="home">
    ...
  </div>
</body>
```

Every javascript dependencies are in the top of your javascript files. Files that are used in every pages should be referenced at the top of App.js or View.js
Require will automatically load the javascript file with the same name you declared in the data-view attribute. For example, if you create a contact page, add data-view="contact" on your page's container and create a file named ViewContact.js in src/views (copy/paste ViewHome.js and rename it).
Add your dependencies at the top of the file and change the className for "ViewContact".

Every views extends View.js, so if you want to have code accessible/executed in every page, add it there.
You can use the view's container to access dom element in your page, so instead of using $('.myitem') , you should use self.el.find('.myitem')

By default, StartJs is presented as a static "view" manager. But it can easily be modified to be used as a module or model manager or even for ajax injection of templates/modules/etc.

For more information, see [requirejs](http://requirejs.org/) and [Mootools Classes](http://mootools.net/docs/core/Class/Class)


More doc to come : Options, Variables...





