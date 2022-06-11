# Kate Template Documentation

## Getting started
This guid target at people who have at least basic knowledge of html markup language. Furthermore css and javascript knowledge is advised. If you do not feel yourself well with understanding these technologies you should consider finding someone to assist you.

The template built using Sass, so you need use any SASS compiler to customize the template for you. In this documentation we will use `gulp-sass` plugin for Gulp.

## Installation
First of all I recommend to install this template on your local machine to make some customization. To do that just put downloaded files to any directory.

After that you need to install these additional softwares:
- [Node.js](https://nodejs.org/en/) (to use Gulp)
- Your favorite HTML editor

Now you need to install each dependencies of the project. To do that go to the directory of the project and run the command:
```
npm install
```

That's all!

## Files structure
Before start to customize let's get acquainted with files structure.
- `css/` - Contains compiled **css** files
- `fonts/` - Contains font files
- `img/` - Contains image files
- `js/` - Contains compiled **javascript** files
- `src/css` - Contains souce **css** files
- `src/js` - Contains souce **javascript** files
- `src/sass` - Contains souce **sass** files

## Color Schemes
The template provides 3 default color schemes. Copy content of folder `color_schemes/blue`, `color_schemes/green` or `color_schemes/red` into `main` folder to set one of them. See [here](#sass-customization) if you want your own color scheme

## HTML customization
### Overview
Main `html` files are contained in the main directory.

The HTML files have following similar markup:
```html
<!DOCTYPE html>
<html lang="en">
<head>

  ...

</head>
<body>

  ...

  <!-- #00 SECTION: NAME OF THE SECTION -->
  <div id="..." class="py4">
    <div class="container mx-auto px3">

      <!-- SECTION'S HEADING -->
      <div class="mb4 text-center">
        <h1 class="h1 my0">Headings</h1>
        <h2 class="h5 my1 text-muted">Subheadings</h2>
      </div>

      ...

    </div>
  </div>

  ...

</body>
</html>
```

The markup built with using sections, so to create a new section copy the example's section and paste it after any section in the html file.

### Classes
The following classes will give you help to customize html.

**NOTE**: There's no full list of classes. See *SASS* source for additional classes.

#### Type scale

| Class            | Description                                                             |
| :--------------- | :---------------------------------------------------------------------- |
| `.h1` to `.h6` | Set `font-size` like `h1` - `h6` has. |

#### Grid

| Class            | Description                                                             |
| :--------------- | :---------------------------------------------------------------------- |
| `.col` | Create a new column without any size. |
| `.clearfix` | Create a wrapper of the columns. Also can be used in some different ways |
| `.col-1` to `.col-12` | Set size to the column. Affects all device widths |
| `.sm-col-1` to `.sm-col-12` | Set size to the column. Affects device widths of *480px* and higher |
| `.md-col-1` to `.md-col-12` | Set size to the column. Affects device widths of *768px* and higher |
| `.lg-col-1` to `.lg-col-12` | Set size to the column. Affects device widths of *960px* and higher |

#### Margin and Paddings

| Class            | Description                                                             |
| :--------------- | :---------------------------------------------------------------------- |
| `.m0` or `p0` | Reset `margin`/`padding` |
| `.mt0` or `pt0` | Reset `margin-top`/`padding-top` |
| `.ml0` or `pl0` | Reset `margin-left`/`padding-right` |

#### Color and Background

| Class            | Description                                                             |
| :--------------- | :---------------------------------------------------------------------- |
| `.color-default` | Set default `color`. |
| `.color-primary` | Set primary `color`. |
| `.color-contrast` | Set contrast `color`. |
| `.color-muted` | Set muted `color`. |
| `.bg-default` | Set default `background-color`. |
| `.bg-primary` | Set primary `background-color`. |
| `.bg-contrast` | Set contrast `background-color`. |

#### Button and Forms

| Class            | Description                                                             |
| :--------------- | :---------------------------------------------------------------------- |
| `.btn` | Create a new buttom |
| `.textbox` | Create a new textbox |

#### Utility

| Class            | Description                                                             |
| :--------------- | :---------------------------------------------------------------------- |
| `.container` | Create a container |
| `.height-viewport` | Set `height` to full height of client screen |

## SASS customization

SASS files are contained in `src/sass` directory. Its files structure:
- `modules/` - Contains modules (button, colors, etc.)
- `modules/core` - Contains core modules (typography, grid, etc.)
- `vendor/` - Contains sass files from others open-source projects (plugins for example)
- `main.scss` - The main SASS file. Only for `import` others SASS files.
- `variables.scss` - The global SASS variable.
- `misc.scss` - Other code which can't be a separate module.

### Overview

The most thing you probably want to change is colors. To do that just open `variables.scss` and change value of variables in `COLOR` and `BACKGROUND` code sections. It automatically change colors to a bunch of elements.

To do more explore SASS files and try to create your own module or just put your code into `misc.scss`.

### Compile SASS files

After your customization you need to compile your SASS files. To do that run this command in the main project directory: `gulp sass`. If you would like to compile SASS files automatically after any edit run this command: `gulp watch`


## Javascript customization

Javascript files are contained in `src/js` directory. There are `vendor` folder which contains jQuery and JS plugins; and `custom.init.js` file which initialize those plugins. And again after any customization you need to compile JS files running this command: `gulp javascript`

## Conclusion

I tryed to describe all of things you need to know, but if you have any questions after reading don't be shy to ask me.

My email address: genettdesign@gmail.com

# Changelog

```
v1.0.0:

- Initial commit.
```

# Credits
Thanks to the authors for their free JS plugins:
```
- jQuery (https://jquery.com/)
- Modernizr (https://modernizr.com/)
- jQuery Easing Plugin (http://gsgd.co.uk/sandbox/jquery/easing/)
- jQuery Inview Plugin (https://github.com/protonet/jquery.inview)
- Magnific Popup (http://dimsemenov.com/plugins/magnific-popup/)
- Maplace.Js (http://maplacejs.com/)
- Owl Carousel (http://www.owlcarousel.owlgraphic.com/)
- Parallax.js (http://pixelcog.github.io/parallax.js/)
- jQuery Detect Element resize plugin (https://github.com/sdecima/javascript-detect-element-resize)
- Shuffle.js (https://vestride.github.io/Shuffle/)
- Smooth Scroll Plugin (https://github.com/kswedberg/jquery-smooth-scroll)
- Typed.js (http://www.mattboldt.com/demos/typed-js/)
```