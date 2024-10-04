import {Schema} from 'openapi-extension/dist/types';
import {handler} from './handlers';

export const openAPISpec: Schema = {
    openapi: '3.0.1',
    info: {
        title: 'Simple API',
        description: 'A simple API example with GET, POST, and DELETE endpoints.',
        version: '1.0.0',
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Local server',
        },
    ],
    paths: {
        '/items': {
            get: {
                summary: 'Get a list of items',
                responses: {
                    200: {
                        $ref: '#/components/responses/ItemList',
                    },
                    500: {
                        $ref: '#/components/responses/InternalError',
                    },
                },
                routeDescription: {
                    handler: (req, res) => handler(req, res),
                    authPolicy: 'redirect',
                },
            },
            post: {
                summary: 'Create a new item',
                requestBody: {
                    $ref: '#/components/requestBodies/NewItem',
                },
                responses: {
                    201: {
                        $ref: '#/components/responses/ItemCreated',
                    },
                    400: {
                        $ref: '#/components/responses/BadRequest',
                    },
                    500: {
                        $ref: '#/components/responses/InternalError',
                    },
                },
                routeDescription: {
                    handler: (req, res) => handler(req, res),
                    authPolicy: 'redirect',
                },
            },
        },
        '/items/{id}': {
            delete: {
                summary: 'Delete an item by ID',
                parameters: [
                    {
                        $ref: '#/components/parameters/ItemId',
                    },
                ],
                responses: {
                    204: {
                        $ref: '#/components/responses/NoContent',
                    },
                    404: {
                        $ref: '#/components/responses/NotFound',
                    },
                    500: {
                        $ref: '#/components/responses/InternalError',
                    },
                },
                routeDescription: {
                    handler: (req, res) => handler(req, res),
                    authPolicy: 'redirect',
                },
            },
        },
    },
    components: {
        parameters: {
            ItemId: {
                name: 'id',
                in: 'path',
                required: true,
                schema: {
                    type: 'string',
                },
                description: 'The ID of the item',
            },
        },
        requestBodies: {
            NewItem: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/NewItem',
                        },
                    },
                },
            },
        },
        responses: {
            ItemList: {
                description: 'A list of items',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: {
                                $ref: '#/components/schemas/Item',
                            },
                        },
                    },
                },
            },
            ItemCreated: {
                description: 'Item created',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Item',
                        },
                    },
                },
            },
            NoContent: {
                description: 'No content',
            },
            NotFound: {
                description: 'Item not found',
            },
            BadRequest: {
                description: 'Bad request',
            },
            InternalError: {
                description: 'Internal server error',
            },
        },
        schemas: {
            Item: {
                type: 'object',
                properties: {
                    id: {
                        type: 'string',
                        example: '123',
                    },
                    name: {
                        type: 'string',
                        example: 'Sample Item',
                    },
                    price: {
                        type: 'number',
                        format: 'float',
                        example: '19.99',
                    },
                },
            },
            NewItem: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string',
                        example: 'Sample Item',
                    },
                    price: {
                        type: 'number',
                        format: 'float',
                        example: 19.99,
                    },
                },
                required: ['name', 'price'],
            },
        },
    },
};
