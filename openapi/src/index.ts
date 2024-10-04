import {ExpressKit} from '@gravity-ui/expresskit';
import {NodeKit} from '@gravity-ui/nodekit';
import {OpenAPI} from 'openapi-extension';
import {openAPISpec} from './openapi';

declare module '@gravity-ui/nodekit' {
    interface AppConfig {}
    interface AppContextParams {}
}

const nodekit = new NodeKit();
const openapi = new OpenAPI(openAPISpec);

async function main() {
    const app = new ExpressKit(nodekit, openapi.routes);
    app.run();
}

main();
