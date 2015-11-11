# Craft
Basic setup for new projects using Craft CMS


## Definitions / Terminology

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
