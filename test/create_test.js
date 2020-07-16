const assert = require('assert');
const User = require('../src/user');

describe('Creating records', () => {
    it('saves a user', done => {
        const newUser = new User({ name: 'Felipe' });
        newUser.save()
            .then(() => {
                assert(!newUser.isNew);
                done();
            });
    });
});