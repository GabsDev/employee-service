export default {
    type: "object",
    properties: {
        age: { type: 'number' },
        name: { type: 'string' },
        position: { type: 'string' },
    },
    required: ['age','name','position']
} as const;