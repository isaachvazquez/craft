# Craft
Basic setup for new projects using Craft CMS


## Dev Setup
1. To get Craft, run: `git clone https://github.com/isaachvazquez/craft`
2. To install Gulp, run: `npm install --save-dev gulp`
3. To install Gulp plugins, run: `npm install --save-dev gulp-sass gulp-concat gulp-uglify gulp-cssnano`


## Usage

### Development Commands
`gulp watch` - Compiles/concatenates all scss/js files on save.

### Production Commands
`gulp build` - Builds all assets for production environment.



## Craft Definitions / Terminology

* Theme - Template for specific page layouts.
	* DTO initialization snippet (twig).

		`{% set dto = entry.type %}`   
		`{% include "_dto/dto-" ~ dto %}`

* DTO - Dynamic Template Output
	* Logic that includes the desired Content Area based on the Entry Type chosen in the Craft admin area.
* CA - Content Area
	* Output of a specified matrix.
* Component
	* An item within a matrix.
