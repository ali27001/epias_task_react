const initialState = {
    dataList: []
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_DATA':
            return {
                ...state,
                dataList: [...state.dataList, action.payload]
            };
        case 'UPDATE_DATA':
            const updatedDataList = state.dataList.map(data => {
                if (data.id === action.payload.id) {
                    return { ...data, ...action.payload.data };
                } else {
                    return data;
                }
            });
            return {
                ...state,
                dataList: updatedDataList
            };
        case 'DELETE_DATA':
            const filteredDataList = state.dataList.filter(data => data.id !== action.payload);
            return {
                ...state,
                dataList: filteredDataList
            };
        default:
            return state;
    }

};

export default dataReducer;

//3 adet action dinler add_data, update_data ve delete_data  kullanıcıların verileri alıp dataListe ekleyecek
