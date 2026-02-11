import { test, expect } from '@playwright/test';
import { request } from 'node:http';
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

    test('API Schema validation', async ({ request }) => {
        const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
        const responseBody = await response.json();

        expect(typeof responseBody.userId).toBe('number');
        expect(typeof responseBody.id).toBe('number');
        expect(typeof responseBody.title).toBe('string');
        expect(typeof responseBody.body).toBe('string');
    })

    test('API Patch Methode - Partial update', async ({ request }) => {
        const response = await request.patch('https://jsonplaceholder.typicode.com/posts/1',{
            data: {
                title: 'Title chaged by Haruna'
            }

        });
        const responseBody = await response.json();
        
        expect(response.status()).toBe(200);
        expect(responseBody.title).toBe('Title chaged by Haruna');

        console.log('Hasil Patch', responseBody);
    })

    test('API PUT Method - Partial update', async ({ request }) => {
        const response = await request.put('https://jsonplaceholder.typicode.com/posts/1',{
            data: {
                title: 'Title chaged by Haruna'
            }

        });
        const responseBody = await response.json();
        
        expect(response.status()).toBe(200);
        expect(responseBody.title).toBe('Title chaged by Haruna');

        console.log('Hasil Patch', responseBody);
    })
    
    test('API List Validation', async ({ request }) => {
        const response = await request.get('https://jsonplaceholder.typicode.com/posts');
        const body = await response.json();

        expect(Array.isArray(body)).toBeTruthy();
        expect(body.length).toBe(100);
    });

    test('API List & Array Validation', async ({ request }) => {
        const response = await request.get('https://jsonplaceholder.typicode.com/posts');
        const body = await response.json();

        expect(Array.isArray(body)).toBeTruthy();
        expect(body.length).toBe(100);
        expect(body[0]).toHaveProperty('id');
    });
    
});

test.describe('Perbedaan PUT vs PATCH', () => {

    test('Uji PUT (Total Replacement)', async ({ request }) => {
        const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
            data: { title: 'Ganti Total pakai PUT' }
        });
        const body = await response.json();
        console.log('Hasil PUT:', body); 
    });

    test('Uji PATCH (Partial Update)', async ({ request }) => {
        const response = await request.patch('https://jsonplaceholder.typicode.com/posts/1', {
            data: { title: 'Ganti Sebagian pakai PATCH' }
        });
        const body = await response.json();
        console.log('Hasil PATCH:', body);
    });

});