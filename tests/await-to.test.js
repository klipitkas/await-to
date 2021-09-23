const { to } = require('../src/await-to');

describe('Await to test', () => {

  it('should return a value when resolved', async() => {
    const testInput = 42;
    const promise = Promise.resolve(testInput);

    const [data, err] = await to(promise);

    expect(err).toBeUndefined();
    expect(data).toEqual(testInput);
  });

  it('should return an error when promise is rejected', async () => {
    const testInput = 42;
    const promise = Promise.reject('Error');

    const [data, err] = await to(promise);

    expect(err).toEqual('Error');
    expect(data).toBeUndefined();
  });

  it('should receive the type of the parent if no type was passed', async () => {
    let user = {};
    let err;

    [user, err] = await to(Promise.resolve({ name: '123' }));

    expect(user.name).toEqual('123');
  });
});
