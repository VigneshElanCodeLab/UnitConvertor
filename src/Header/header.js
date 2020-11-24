import React from 'react';
import classes from './header.module.css';
function header(){
     return (
        <div className={classes.header}>
            <p className={classes.para}>Unit Convertor</p >
        </div>
     );
};
export default header;