
import { useState } from "react";
import { getList } from "../jsapi/api";

const ListView = () => {
    const [arr, setArr] = useState([]);

    const fetchData = async () => {
        try {
            const response = await getList();

            if (response?.success) {
                setArr(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <h1>List Data</h1>

            <button
                className="bg-amber-700"
                onClick={fetchData}
            >
                Get Data
            </button>

            <div>
                {arr.map((e) => (
                    <h1 key={e._id}>{e.text}</h1>
                ))}
            </div>
        </>
    );
};

export default ListView;
