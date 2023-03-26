import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { addData, updateData, deleteData } from "../../actions";
import './AddForm.scss'; // SASS dosyasını içe aktarın
const AddForm = () => {
    const [formData, setFormData] = useState({
        userNo: '',
        kontrat: '',
        teklif: '',
        data: '',
    });

    const [isUpdating, setIsUpdating] = useState(false);
    const [updateId, setUpdateId] = useState(null);

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isUpdating) {
            dispatch(updateData(updateId, formData));
            setIsUpdating(false);
        } else {
            dispatch(addData(formData));
        }
        setFormData({
            userNo: '',
            kontrat: '',
            teklif: '',
            data: '',
        });
    };

    const handleUpdate = (id, data) => {
        setUpdateId(id);
        setFormData(data);
        setIsUpdating(true);
    };

    const handleDelete = (id) => {
        dispatch(deleteData(id));
    };

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };
    const dataList = useSelector(state => state.data.dataList);

    return (
        <div className="addFrom">
            <form onSubmit={handleSubmit} className="form">
                <input type="text" name="userNo" value={formData.userNo} onChange={handleChange} placeholder="User No" />
                <input type="text" name="kontrat" value={formData.kontrat} onChange={handleChange} placeholder="Kontrat" />
                <input type="text" name="teklif" value={formData.teklif} onChange={handleChange} placeholder="Teklif" />
                <input type="text" name="data" value={formData.data} onChange={handleChange} placeholder="Data" />
                <button type="submit">{isUpdating ? 'Update Data' : 'Add Data'}</button>
                {isUpdating && <button type="button" onClick={() => setIsUpdating(false)}>Cancel</button>}
            </form>

            <div className="edit">
                            <table>
                                <tbody>
                                {dataList.map(data => (
                                    <tr key={data.id}>
                                        <td>{data.userNo}</td>
                                        <td>{data.kontrat}</td>
                                        <td>{data.teklif}</td>
                                        <td>{data.data}</td>
                                        <td>
                                            <button type="button" onClick={() => handleUpdate(data.id, data)}>Edit</button>
                                            <button type="button" onClick={() => handleDelete(data.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
            </div>
        </div>
    );
};

export default AddForm;
