const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of the database', () => {
    let newUser;
    beforeEach(done => {
        newUser = new User({ name: 'Felipe' });
        newUser.save()
            .then(() => done());
    });
    it('finds all users with a name of Felipe', done => {
        User.find({ name: 'Felipe' })
            .then(users => {
                assert(users[0]._id.toString() === newUser._id.toString());
                done();
            });
    });
});