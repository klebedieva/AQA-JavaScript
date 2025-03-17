import { Objects } from '../endpoints';

const objects = new Objects('https://api.restful-api.dev');

describe('Objects endpoints tests', () => {
  let objectId;

  test('Get all objects (positive)', async () => {
    const response = await objects.getAllObjects();
    expect(response.status).toBe(200);
    expect(response.data).toBeInstanceOf(Array); 
    expect(response.data.length).toBeGreaterThan(0); 

    response.data.forEach(obj => {
      expect(obj).toHaveProperty('id');
      expect(obj).toHaveProperty('name');
      expect(obj).toHaveProperty('data');
    });
  });

  test('Add an object (positive)', async () => {
    const data = {
      name: 'Apple MacBook Pro 16',
      data: {
        year: 2019,
        price: 1849.99,
        'CPU model': 'Intel Core i9',
        'Hard disk size': '1 TB'
      }
    };
    const response = await objects.addObject({ data });
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id');
    expect(response.data).toHaveProperty('name', data.name);
    expect(response.data).toHaveProperty('data', data.data);
    objectId = response.data.id; 
  });


  test('Get a single object (positive)', async () => {
    const response = await objects.getSingleObject(objectId); 
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', objectId); 
    expect(response.data).toHaveProperty('name');
    expect(response.data).toHaveProperty('data');
  });

  test('Get a single object (negative)', async () => {
    const invalidId = ''; 
    const response = await objects.getSingleObject(invalidId);
    expect(response.status).toBe(200); 
    expect(response.data).toHaveProperty('id'); 
    expect(response.data.id).not.toBe(invalidId); 
  });
  
  test('Update an object (positive)', async () => {
    const data = {
      name: 'Samsung Galaxy S24 Ultra',
      data: {
        year: 2024,
        price: 1499.99,
        'CPU model': 'Snapdragon 8 Gen 3',
        'Storage': '1 TB'
      }};  

    const response = await objects.updateObject(objectId, data); 
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', objectId);
    expect(response.data).toHaveProperty('name', data.name);
    expect(response.data).toHaveProperty('data', data.data);
  });

  test('Update an object (negative)', async () => {
    const invalidId = '999'; 
    const data = {
      name: 'Updated Object'
    };
    const response = await objects.updateObject(invalidId, data);
    expect(response.status).toBe(404);
  });

  test('Partially update an object (positive)', async () => {
    const data = {
      data: {
        price: 1399.99,
        'Storage': '1 TB'
      }
    };
    const response = await objects.partiallyUpdateObject(objectId, data); 
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', objectId);
    expect(response.data).toHaveProperty('data.price', data.data.price);
    expect(response.data).toHaveProperty('data.Storage', data.data['Storage']);
  });
  
  test('Partially update an object (negative)', async () => {
    const invalidId = '999';
    const data = {
      data: {
        price: 1399.99,
        'Storage': '1 TB'
      }
    };
    const response = await objects.partiallyUpdateObject(invalidId, data);
    expect(response.status).toBe(404); 
  });

  test('Delete an object (positive)', async () => {
    const response = await objects.deleteObject(objectId); 
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('message', `Object with id = ${objectId} has been deleted.`);
  });

  test('Delete an object (negative)', async () => {
    const invalidId = '999'; 
    const response = await objects.deleteObject(invalidId);
    expect(response.status).toBe(404);
  });
});