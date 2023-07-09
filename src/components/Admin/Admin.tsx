import React, {useCallback, useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
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
            <p>Выберите действие</p>
            <NavLink className='navbar-toggler'
                     style={{textTransform: 'uppercase', marginLeft:20}}
                     to={`/new-page`}
            >New page</NavLink>
            <NavLink className='navbar-toggler'
                     style={{textTransform: 'uppercase', marginLeft:20}}
                     to={`/edit-page/:id`}
            >Edit page</NavLink>
            <br/>
            <PageForm pageNames={pageNames} />
        </div>
    );
};

export default Admin;