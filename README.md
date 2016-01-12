# cardinalcss-module-boilerplate

A [Node.js](https://nodejs.org/en/) script that automatically generates the baseline folder and file structure for a new [Cardinal CSS](http://cardinalcss.com) module.

## Usage

1. Clone this repository to your local machine.

    ```sh
    git clone [git-url]
    ```

2. Execute the included wizard script from the root directory of this project, answer the prompts with the appropriate information.

    ```sh
    node ./cardinalcss-module-boilerplate/start

    Your Name:
    Your Email:
    Your GitHub Username:
    Module Name: cardinalcss-

    Module Description (complete the following sentence):
    A Cardinal CSS module

    Module Keywords (add keywords to the following list, separated by commas):
    cardinal, cardinalcss, css, oocss, postcss,
    ```

3. Wait for the script to complete, then continue working in the new directory that was created for your new module.

    ```sh
    Installing npm packages...
    Done. Remove this directory if you wish, and continue working in ../cardinalcss-[MODULE_NAME]/

    cd ./cardinalcss-[MODULE_NAME]
    ```

## Credits

This fork is essentially a carbon copy of the awesome [postcss-plugin-boilerplate](https://github.com/postcss/postcss-plugin-boilerplate) project by [@ai](https://github.com/ai). It’s been slightly adapted to generate Cardinal CSS modules instead of PostCSS plugins.

Many thanks for your great work!
