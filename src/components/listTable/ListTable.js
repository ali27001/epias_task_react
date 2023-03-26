import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './ListTable.scss'; // SASS dosyasını içe aktarın
const Table = () => {
    const dataList = useSelector(state => state.data.dataList);
    const [uniqueContracts, setUniqueContracts] = useState([]);
    const [selectedContract, setSelectedContract] = useState("");
    const [selectedColumns, setSelectedColumns] = useState({
        userNo: true,
        kontrat: true,
        teklif: true,
        data: true
    });

    useEffect(() => {
        const contracts = [...new Set(dataList.map(data => data.kontrat))];
        setUniqueContracts(contracts);
    }, [dataList]);

    const handleContractChange = (event) => {
        setSelectedContract(event.target.value);
    };

    const handleColumnChange = (event) => {
        const column = event.target.value;
        const checked = event.target.checked;
        setSelectedColumns(prevState => ({ ...prevState, [column]: checked }));
    };

    const filteredData = dataList.filter(data => selectedContract === "" || data.kontrat === selectedContract);

    return (
        <div>
            <div className={"table-filters"}>
                <select value={selectedContract} onChange={handleContractChange}>
                    <option value="">Kontrat Seç</option>
                    {uniqueContracts.map(contract => (
                        <option key={contract} value={contract}>{contract}</option>
                    ))}
                </select>
                {Object.keys(selectedColumns).map(column => (
                    <label key={column}>
                        <input
                            type="checkbox"
                            value={column}
                            checked={selectedColumns[column]}
                            onChange={handleColumnChange}
                        />
                        {column}
                    </label>
                ))}
            </div>
            <table>
                <thead>
                <tr>
                    {selectedColumns.userNo && <th>Kullanıcı No</th>}
                    {selectedColumns.kontrat && <th>Kontrat</th>}
                    {selectedColumns.teklif && <th>Teklif</th>}
                    {selectedColumns.data && <th>Data</th>}
                </tr>
                </thead>
                <tbody>
                {filteredData.map((data, index) => (
                    <tr key={index}>
                        {selectedColumns.userNo && <td>{data.userNo}</td>}
                        {selectedColumns.kontrat && <td>{data.kontrat}</td>}
                        {selectedColumns.teklif && <td>{data.teklif}</td>}
                        {selectedColumns.data && <td>{data.data}</td>}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
