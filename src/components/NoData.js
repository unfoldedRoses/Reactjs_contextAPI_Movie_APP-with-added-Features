import {React} from 'react'
import './NoData.css'
export default function NoData({watchedNot}) {


    return (
        <div>
            <h1>{watchedNot}</h1>
       <img src="https://image.shutterstock.com/image-vector/no-data-concept-flat-illustration-260nw-1806544537.jpg" /> 
        </div>
    )
}
