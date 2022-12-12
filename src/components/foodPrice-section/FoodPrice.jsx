import React, {useState, useEffect} from 'react';
import './FoodPrice-style.css';
import axios from 'axios';
import { motion } from 'framer-motion';

const textAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {delay: custom * .1},
    }),
}

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
        <motion.div
         initial='hidden'
         whileInView='visible'
         viewport={{ amount: .2, once: true }}
         className='FoodPrice'
        >
            <motion.h3 variants={textAnimation} custom={2} className='Rooms__title'>Menu</motion.h3>
            <motion.h2 variants={textAnimation} custom={3} className='Price__title Price__title_food'>Холодные и горячие закуски:</motion.h2>
            <motion.table variants={textAnimation} custom={4}>
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
            </motion.table>
            <motion.h2 variants={textAnimation} custom={5} className='Price__title Price__title_food'>Напитки:</motion.h2>
            <motion.table variants={textAnimation} custom={6}>
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
             </motion.table>
            
        </motion.div>
    );
};

export default FoodPrice;