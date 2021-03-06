import React from 'react';
import { Link } from 'react-router-dom';
import { mapRoutes } from '@/router';
import style from './style.m.css';

function Navigation() {
  return (
    <div className={style.navigation}>
      <ul>
        <li><Link to={mapRoutes.list}>List</Link></li>
        <li><Link to={mapRoutes.products}>Products</Link></li>
        <li><Link to={mapRoutes.form}>Form</Link></li>
      </ul>
      Navigation
    </div>
  );
}

export default Navigation;
