import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { createServer } from '../../test/server';
import AuthButtons from './AuthButtons';

// createServer() ---> GET 'api/user' ---> { user: null }
test('when user is not signed in, sign in and sign up are visible', async () => {});
test('when user is not signed in, sign out is not visible', async () => {});

// createServer() ----> GET 'api/user' ---> {user: {id: 3, email: 'asaaghsa@hsgd.com'}}
test('when user is signed in, sign in and sign up are not visible', async () => {});
test('when user is signed in, sign out is visible', async () => {});
