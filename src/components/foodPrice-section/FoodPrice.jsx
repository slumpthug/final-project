import React, {useState, useEffect} from 'react';
import './FoodPrice-style.css';
import axios from 'axios';

const FoodPrice = () => {

    const [foodPrice, setFoodPrice] = useState([]);

    useEffect(() => {
        axios
            .get('http://roywest3.pythonanywhere.com/api/v1/food-list/')
            .then(data => {
                setFoodPrice(data.data);
            })
    }, []);

    return (
        <div className='FoodPrice'>
            <h3 className='Rooms__title'>Menu</h3>
            <h2 className='Price__title Price__title_food'>Холодные и горячие закуски:</h2>
            <table>
                <thead>
	            	<tr>
	            		<th>Name</th>
	            		<th>Price</th>
	            	</tr>
	            </thead>
                { foodPrice.filter(food => food.category == ('Холодные и горячие закуски')).map(food => {
                    return (
                        <>
                            <tr>
                                <td>{food.name}</td>
                                <td>{food.price}</td>
                            </tr>
                        
                        </>
                    )
                })}
            </table>
            <h2 className='Price__title Price__title_food'>Напитки:</h2>
            <table>
                <thead>
	            	<tr>
	            		<th>Name</th>
	            		<th>Price</th>
	            	</tr>
	            </thead>
                { foodPrice.filter(food => food.category == ('Напитки')).map(food => {
                    return (
                        <>
                            <tr>
                                <td>{food.name}</td>
                                <td>{food.price}</td>
                            </tr>
                        
                        </>
                    )
                })}
             </table>
            
        </div>
    );
};

export default FoodPrice;