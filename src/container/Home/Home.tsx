import React, {useCallback, useEffect, useState} from 'react';
import {Container, Grid, Typography} from "@mui/material";
import Spinner from "../../components/Spinner/Spinner";
import axiosApi from "../../axiosApi";
import {useLocation} from "react-router-dom";

const Home = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    const [pageInfo, setPageInfo] = useState({
        title: '',
        content: ''
    })
    const fetchPages = useCallback(async ()=> {
        try {
            setLoading(true);
            if(location.pathname === '/schools' || location.pathname === '/'){
                location.pathname = 'schools/home'
            }
            const response = await axiosApi(`${location.pathname}.json`);
            const pages = response.data;
            setPageInfo(pages);
        }finally {
            setLoading(false);
        }
    },[location]);
    useEffect(() => {
        fetchPages().catch(console.error);
    }, [fetchPages]);

    return (
        <>
            <Container maxWidth="sm"  style={{marginTop: 100}}>
                {loading ? <Spinner/> :
                <Grid item xs={8}>
                    <Typography variant="h1">{pageInfo.title}</Typography>
                    <Typography variant="h4">{pageInfo.content}</Typography>
                </Grid>}
            </Container>
        </>
    );
};

export default Home;