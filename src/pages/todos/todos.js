import React from 'react';
import { useSelector } from 'react-redux';
import TodoModal from './modal';
import { Card, Button } from 'antd';
import { useDispatch } from 'react-redux';
import EditModal from "./editmodal"

function Posts() {
    const {todos} = useSelector((state) => state.todoReducer);
    const dispatch = useDispatch();
    return (
      <div style={{padding:"30px"}}><h2>Обувь</h2></div>
    );
}

export default Posts;
