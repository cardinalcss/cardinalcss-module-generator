# cardinalcss-module-generator

A [Node.js](https://nodejs.org/en/) script that automatically generates the baseline folder and file structure for a new [Cardinal CSS](http://cardinalcss.com) module.

## Usage

1. Clone this repository to your local machine.

    ```sh
    git clone git@github.com:cardinalcss/cardinalcss-module-generator.git
    ```

2. Execute the included wizard script from the root directory of this project, and answer the prompts with the appropriate information.

    ```sh
    node ./cardinalcss-module-generator/start
    ```

3. After you’ve answered the prompts and the script has finished running, you can remove the generator project if you wish and continue working in the new directory that was created.

    ```sh
    rm -rf ./cardinalcss-module-generator
    cd ./cardinalcss-MODULE_NAME
    ```

## Credits

This fork is essentially a carbon copy of the awesome [postcss-plugin-boilerplate](https://github.com/postcss/postcss-plugin-boilerplate) project by [@ai](https://github.com/ai). It’s been slightly adapted to generate Cardinal CSS modules instead of PostCSS plugins.

Many thanks for your great work!
