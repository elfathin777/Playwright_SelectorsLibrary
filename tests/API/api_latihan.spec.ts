import { test, expect } from '@playwright/test';
import { title } from 'node:process';

test.describe('API Testing Basics', () => {
    test('Validasi Status Code (GET)', async ({ request }) => {
        const response = await request.get('https://the-internet.herokuapp.com/status_codes/200');

        expect(response.status()).toBe(200);
        
    })

    test('Validasi Response Body (JSON)', async ({ request }) => {
        const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
        const body = await response.json();

        expect(body.id).toBe(1);
        expect(body.title).toBeDefined();
        console.log('The Title is ', body.title);
    })

    test('Check key exist', async ({ request }) => {
        const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
        const body = await response.json();

        expect(body).toHaveProperty('id');
        expect(body).toHaveProperty('title')

        expect(body.id).toBe(1);
        expect(body.title).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
    })
    
    test('POST method', async ({ request }) => {
        const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
            data: {
                userId: 1,
                title: 'API Automation',
                body: 'firstday learning API automation test using playwright'
            }
        });

        expect(response.status()).toBe(201);

        const responseBody = await response.json();
        console.log('Response POST', responseBody);

        expect(responseBody.title).toBe('API Automation');
        expect(responseBody).toHaveProperty('id');
    })

    test('DELETE Method', async ({ request }) => {
        const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1')
        
        expect(response.status()).toBe(200)
    })
    

});