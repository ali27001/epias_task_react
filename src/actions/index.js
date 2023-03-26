export const addData = (data) => ({
    type: 'ADD_DATA',
    payload: {
        ...data,
        id: Date.now()
    }
});

export const updateData = (id, data) => ({
    type: 'UPDATE_DATA',
    payload: {
        id,
        data
    }
});

export const deleteData = (id) => ({
    type: 'DELETE_DATA',
    payload: id
});
