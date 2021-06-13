
import React from 'react';
//import React, { Component } from 'react';
import {encryptData} from './OrginalData';

//class Main extends Component               
    const originalData={
            name:'IDKBlogs'
     }
    const salt = process.env.SALT || '6d090796-ecdf-11ea-adc1-0242ac120003';
    const encryptedData = encryptData(originalData, salt);
    localStorage.setItem('SOME_NON_RADABLE_KEY', encryptedData); // SOME_NON_RADABLE_KEY like 'mk' as 'myKey'

export default originalData
