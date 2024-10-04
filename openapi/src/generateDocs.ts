/* eslint-disable no-console */
import {OpenAPI} from 'openapi-extension';
import {openAPISpec} from './openapi';
import path from 'path';

const openapi = new OpenAPI(openAPISpec);

async function generateDocs() {
    await openapi.save(path.join(__dirname, '../docs/openapi.yaml'));
    console.log('OpenAPI documentation generated successfully.');
}

generateDocs();
