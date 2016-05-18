
module.exports = {
    tableName: 'message',
    attributes: {
        title: {
            type: 'string',
            required: true
        },
        description: {
            type: 'string',
            required: true
        },
        active: {
            type: 'boolean',
            required: true,
            defaultsTo: true
        }
    }
};
