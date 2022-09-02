import React, {useState, useEffect} from 'react';
import Inputs from "./inputs";



const App = () => {


    return (
        <>
       <Inputs/>
        <table>
            <thead>
                <tr>
                    <th>Company</th>
                    <th>Position</th>
                    <th>Location</th>
                    <th>link</th>
                    <th>Date Applied</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        </>
    );
}

export default App;