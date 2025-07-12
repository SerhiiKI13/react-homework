import {useSearchParams} from "react-router-dom";

export const Pagination = () => {
    const [page, setPage] = useSearchParams({pg: '1'});
    const pg = page.get('pg');
    const handleClickPlus = () => {

        if (pg) {
            let currentPage = +pg;
            setPage({pg: (++currentPage).toString()})
        }
    }
    const handleClickMinus = () => {

        if (pg) {
            let currentPage = +pg;
            setPage({pg: (--currentPage).toString()})
        }
    }
    return (
        <div>
            <button onClick={() => {
                handleClickMinus()
            }}>Prev
            </button>
            <p>{pg}</p>
            <button onClick={() => {
                handleClickPlus()
            }}>Next
            </button>
        </div>
    );
};