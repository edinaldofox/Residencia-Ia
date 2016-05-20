
module.exports = {
    tableName: 'schedules',
    attributes: {
        title: {
            type: 'string',
            required: true
        },
        description: {
            type: 'string',
            required: true
        },
        //dateStart: {
        //    type: 'datetime',
        //    required: true
        //},
        //dateFinal: {
        //    type: 'datetime',
        //    required: false
        //},
        active: {
            type: 'boolean',
            required: true,
            defaultsTo: true
        }
    }
};
