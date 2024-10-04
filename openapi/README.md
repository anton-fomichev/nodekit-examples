# openapi-extension

This example demonstrates how to integrate openapi-extension with [@gravity-ui/expresskit](https://github.com/gravity-ui/expresskit) to build an express application and generate OpenAPI documentation site.

## Setup

1. Install dependencies

    ```bash
    npm install
    ```

2. Install [@diplodoc/cli](https://www.npmjs.com/package/@diplodoc/cli) globally for building the documentation site

    ```bash
    npm install -g @diplodoc/cli
    ```

## Usage

- Run the Application:
    To start the ExpressKit application, use:

    ```bash
    npm run dev
    ```

- Generate and Build Documentation:
    To generate the OpenAPI documentation and build the static site in one step, use:

    ```bash
    npm run build:docs
    ```

    A local server will start, allowing you to view the documentation site in your web browser. By default, it will be available at <http://localhost:8080>.
