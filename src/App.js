import React, { useState } from 'react';
import './App.scss';
import Split from 'react-split';
import AddForm from "./components/addForm/AddForm";
import Table from "./components/listTable/ListTable";

function App() {
    const [verticalSizes, setVerticalSizes] = useState([70, 30]);
    const [horizontalTopSizes, setHorizontalTopSizes] = useState([30, 70]);
    const [horizontalBottomSizes, setHorizontalBottomSizes] = useState([70, 30]);


    const handleVerticalDragEnd = (newSizes) => {
        setVerticalSizes(newSizes);
        console.log("new sizes",newSizes);
        localStorage.setItem('verticalSizes', JSON.stringify(newSizes));
    };

    const handleHorizontalTopDragEnd = (newSizes) => {
        setHorizontalTopSizes(newSizes);
        console.log("new horizontal top sizes", newSizes);
        localStorage.setItem('horizontalTopSizes', JSON.stringify(newSizes));
    };

    const handleHorizontalBottomDragEnd = (newSizes) => {
        setHorizontalBottomSizes(newSizes);
        console.log("new horizontal bottom sizes", newSizes);
        localStorage.setItem('horizontalBottomSizes', JSON.stringify(newSizes));
    };


    return (
        <Split
            className="split"
            direction="vertical"
            sizes={verticalSizes}
            onDragEnd={handleVerticalDragEnd}
        >
            <Split onDragEnd={handleHorizontalTopDragEnd} className="splitx" direction="horizontal" sizes={[70, 30]}>
                <div>
                    <Table/>
                </div>
                <div className="info">
                    <p><span> yatay pencere</span>  :  % {verticalSizes[0]}  -  %{verticalSizes[1]}</p>
                    <p><span> üst dikey pencere</span>  :  % {horizontalTopSizes[0]}  -  %{horizontalTopSizes[1]}</p>
                    <p><span> alt dikey pencere</span>  :  % {horizontalBottomSizes[0]}  -  %{horizontalBottomSizes[1]}</p>
                </div>
            </Split>
            <Split onDragEnd={handleHorizontalBottomDragEnd} className="splitx" direction="horizontal" sizes={[70, 30]}>
                <div>
                    <AddForm/>
                </div>
                <div>sağ alt</div>
            </Split>
        </Split>
    );
}

export default App;
