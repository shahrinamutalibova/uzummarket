import React from 'react';
import { useSelector } from 'react-redux';
import AlbumModal from "./modal"
import { Card, Button } from 'antd';
import { useDispatch } from 'react-redux';
import EditModal from './editModal';

function Posts() {
    const { albums } = useSelector((state) => state.albumReducer);
    const dispatch = useDispatch();
    return (
        <div style={{padding:"30px"}}><h2>Одежда </h2></div>
    );
}

export default Posts;
