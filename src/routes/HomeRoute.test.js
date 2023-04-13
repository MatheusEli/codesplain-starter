import { render, screen } from "@testing-library/react";
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { MemoryRouter } from "react-router";
import HomeRoute from "./HomeRoute";

const handlers = [
    rest.get('/api/repositories', (req, res, ctx) => {
        const query = req.url.searchParams.get('q');
        console.log(query);

        return res(ctx.json(
            {
                items: [
                    { id: 1, full_name: 'full name!!! '},
                    { id: 2, full_name: 'full name!!! '},
                    { id: 3, full_name: 'full name!!! '},
                ]
            }
        ));
    })
];
const server = setupServer(...handlers);

beforeAll(() => {
    server.listen();
});

afterEach(() => {
    server.resetHandlers();
});

afterAll(() => {
 server.close();
});

test('', () => {

});