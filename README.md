# FormlyPoc

This is a proof of concept for using v5 [Angular Formly](https://v5.formly.dev/)
in a responsive grid layout.

This is meant to be a starting point for a more complex form, but showcases how
a JSON form object can be broken into smaller grid sections. Each section can
have a different number of columns, and the form fields can be placed in a way that can re-flow as the screen size changes.

the bulk of the POC is creating css utility classes that can be used to place
the form fields in the grid. Comments in the code explain the approach.

## Running the project

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.
