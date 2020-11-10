//test example 

it('should be able to create a new product', async() => {
    const response = await request(app).post('/products').send({
        id: '1',
        name: 'Product1',
        description: 'This is a product1',
        price: '10',
        category: 'Test'
    });

    expect(response.body).toEqual(
        expect.objectContaining({
            id: '1',
            name: 'Product1',
            description: 'This is a product1',
            price: '10',
            category: 'Test'
        }),
    );
});

it('should be able to list all the products', async() => {});

it('should be able to list one product', async() => {});

it('should be able to update a product with same id', async() => {});

it('should be able to delete a product', async() => {});