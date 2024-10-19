import { useSearchParams } from "react-router-dom";
import Select from "./Select"

function SortBy({ options }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const sortBy = searchParams.get('sortBy') || '';
    const page = searchParams.get("page");
    
    function handleChange(e) {
        if (page) searchParams.set("page", 1);
        searchParams.set('sortBy', e.target.value);
        setSearchParams(searchParams);
    }
    return (
        <div>
            <Select options={options} value={sortBy} type="white" onChange={handleChange}/>
        </div>
    )
}

export default SortBy