import React, {useCallback, useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";
import {PagesList} from "../../type";
import PageForm from "../PageForm/PageForm";
import Spinner from "../Spinner/Spinner";


const Admin = () => {
    const [pageNames, setPageNames] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchPages  = useCallback(async () => {
        try {
            setLoading(true);
            const pagesResponse = await axiosApi.get<PagesList>('schools.json');
            const pages = pagesResponse.data;
            if(!pages){
                setPageNames([]);
                return;
            }
            const pageNames = Object.keys(pages).map(pName => {
                return pName;
            });
            setPageNames(pageNames);
        }finally {
            setLoading(false);
        }
    },[]);
    useEffect(() => {
        fetchPages().catch(console.error);
    }, [fetchPages]);

    return (
        <div className='container' style={{margin: 100}}>
            {loading ? <Spinner/> : null}
            <br/>
            <PageForm pageNames={pageNames} />
        </div>
    );
};

export default Admin;