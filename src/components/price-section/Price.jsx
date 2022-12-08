import React from 'react';
import './Price-style.css';

const Price = () => {
    return (
        <div className='Price'>
            <h3 className='Rooms__title'>Комнаты с компьютерами</h3>
            <h2 className='Price__title'>Standart</h2>
            <table>
                <thead>
	            	<tr>
	            		<th>Rate</th>
	            		<th>From 08:00 to 13:00</th>
                        <th>From 13:00 to 18:00</th>
	            		<th>From 18:00 to 08:00</th>
	            	</tr>
	            </thead>
                <tr>
                    <td>1 Hour</td>
                    <td>30</td>
                    <td>35</td>
                    <td>40</td>
                </tr>
                <tr>
                    <td>Package 3</td>
                    <td>60</td>
                    <td>75</td>
                    <td>95</td>
                </tr>
                <tr>
                    <td>Package 5</td>
                    <td>90</td>
                    <td>130</td>
                    <td>150</td>
                </tr>
                <tr>
                    <td>Night (22:00 - 08:00)</td>
                    <td>120</td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            <h2 className='Price__title Price__title_stadium'>Stadium</h2>
            <table>
                <thead>
	            	<tr>
	            		<th>Rate</th>
	            		<th>From 08:00 to 13:00</th>
                        <th>From 13:00 to 18:00</th>
	            		<th>From 18:00 to 08:00</th>
	            	</tr>
	            </thead>
                <tr>
                    <td>1 Hour</td>
                    <td>50</td>
                    <td>60</td>
                    <td>70</td>
                </tr>
                <tr>
                    <td>Package 3</td>
                    <td>110</td>
                    <td>130</td>
                    <td>170</td>
                </tr>
                <tr>
                    <td>Package 5</td>
                    <td>150</td>
                    <td>200</td>
                    <td>250</td>
                </tr>
                <tr>
                    <td>Night (22:00 - 08:00)</td>
                    <td>200</td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            <h2 className='Price__title Price__title_VIP'>Vip</h2>
            <table>
                <thead>
	            	<tr>
	            		<th>Rate</th>
	            		<th>From 08:00 to 08:00</th>
	            	</tr>
	            </thead>
                <tr>
                    <td>1 Hour</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>Package 3</td>
                    <td>250</td>
                </tr>
                <tr>
                    <td>Package 5</td>
                    <td>450</td>
                </tr>
                <tr>
                    <td>Night (22:00 - 08:00)</td>
                    <td>350</td>
                </tr>
            </table>
            <h3 className='Rooms__title'>Комнаты с PlayStation</h3>
            <h2 className='Price__title'>PS4 Standart</h2>
            <table>
                <thead>
	            	<tr>
	            		<th>Rate</th>
	            		<th>From 08:00 to 13:00</th>
                        <th>From 13:00 to 18:00</th>
	            		<th>From 18:00 to 08:00</th>
	            	</tr>
	            </thead>
                <tr>
                    <td>1 Hour</td>
                    <td>70</td>
                    <td>90</td>
                    <td>120</td>
                </tr>
                <tr>
                    <td>Night (22:00 - 08:00)</td>
                    <td>200</td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            <h2 className='Price__title Price__title_stadium'>PS4 BAR</h2>
            <table>
                <thead>
	            	<tr>
	            		<th>Rate</th>
	            		<th>From 08:00 to 13:00</th>
                        <th>From 13:00 to 18:00</th>
	            		<th>From 18:00 to 08:00</th>
	            	</tr>
	            </thead>
                <tr>
                    <td>1 Hour</td>
                    <td>110</td>
                    <td>140</td>
                    <td>170</td>
                </tr>
            </table>
            <h2 className='Price__title Price__title_VIP'>PS5 VIP</h2>
            <table>
                <thead>
	            	<tr>
	            		<th>Rate</th>
	            		<th>From 08:00 to 08:00</th>
	            	</tr>
	            </thead>
                <tr>
                    <td>1 Hour</td>
                    <td>500</td>
                </tr>
                <tr>
                    <td>Night (22:00 - 08:00)</td>
                    <td>1600</td>
                </tr>
            </table>
        </div>
    );
};

export default Price;