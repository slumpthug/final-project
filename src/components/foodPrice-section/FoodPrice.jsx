import React from 'react';
import './FoodPrice-style.css';

const FoodPrice = () => {
    return (
        <div className='FoodPrice'>
            <h3 className='Rooms__title'>Menu</h3>
            <h2 className='Price__title Price__title_food'>Hot and cold appetizers:</h2>
            <table>
                <thead>
	            	<tr>
	            		<th>Name</th>
	            		<th>Price</th>
	            	</tr>
	            </thead>
                <tr>
                    <td>Chicken Burger</td>
                    <td>220</td>
                </tr>
                <tr>
                    <td>Burger with beef</td>
                    <td>280</td>
                </tr>
                <tr>
                    <td>Burger with beans</td>
                    <td>210</td>
                </tr>
                <tr>
                    <td>Sandwich with cheese and salad</td>
                    <td>130</td>
                </tr>
                <tr>
                    <td>Roll sandwich with chicken</td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>Club sandwich with chicken</td>
                    <td>210</td>
                </tr>
                <tr>
                    <td>Quesadilla with vegetables and chicken</td>
                    <td>250</td>
                </tr>
            </table>
            <h2 className='Price__title Price__title_food'>Breakfasts:</h2>
            <table>
                <thead>
	            	<tr>
	            		<th>Name</th>
	            		<th>Price</th>
	            	</tr>
	            </thead>
                <tr>
                    <td>Oatmeal porridge</td>
                    <td>80</td>
                </tr>
                <tr>
                    <td>Rice porridge</td>
                    <td>80</td>
                </tr>
                <tr>
                    <td>Buckwheat porridge</td>
                    <td>80</td>
                </tr>
                <tr>
                    <td>Porridge Wheat</td>
                    <td>90</td>
                </tr>
                <tr>
                    <td>Pancakes (sour cream, jam, honey)</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>Cheesecakes (sour cream, jam)</td>
                    <td>160</td>
                </tr>
                <tr>
                    <td>English breakfast (eggs, cherry tomatoes, sausages, vegetable mousses, beans)</td>
                    <td>320</td>
                </tr>
            </table>
        </div>
    );
};

export default FoodPrice;