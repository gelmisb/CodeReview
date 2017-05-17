// User model is used with a backend.

// This is not used for any purpose, it is
// only kept for future refference

import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
    username: attr('string'),
    password: attr('string'),
    email: attr('string'),
});
