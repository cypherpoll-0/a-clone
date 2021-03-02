import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/BlackFriday/Fuji_TallHero_BFWeek_v1_en_US_1x._CB415746974_.jpg" 
                alt="" />
            
            
            <div className="home__row">
                <Product 
                id="12321341"
                title="Lenovo Legion 5 Gaming Laptop, 15.6 FHD (1920x1080) IPS Screen, AMD Ryzen 7 4800H Processor, 16GB DDR4, 512GB SSD, NVIDIA GTX 1660Ti, Windows 10, 82B1000AUS, Phantom Black"
                price={999.99}
                image="https://m.media-amazon.com/images/I/81w+3k4U8PL._AC_UL800_FMwebp_QL65_.jpg"
                rating={4}
                />
                <Product
                id="12321342"
                title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver"
                price={364.99}
                image="https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_UL800_FMwebp_QL65_.jpg"
                rating={4}
                />
            </div>

            <div className="home__row">
                <Product 
                id="12321343"
                title="ASUS Laptop L210 Ultra Thin Laptop, 11.6” HD Display, Intel Celeron N4020 Processor, 4GB RAM, 64GB Storage, NumberPad, Windows 10 Home in S Mode with One Year of Microsoft 365 Personal, L210MA-DB01"
                price={229.85}
                image="https://m.media-amazon.com/images/I/810BY5U9baL._AC_UL640_FMwebp_QL65_.jpg"
                rating={3}
                />
                <Product 
                id="12321344"
                title="Acer Chromebook Spin 311 Convertible Laptop, Intel Celeron N4020, 11.6 HD Touch, 4GB LPDDR4, 32GB eMMC, Gigabit Wi-Fi 5, Bluetooth 5.0, Google Chrome, CP311-2H-C679"
                price={269.99}
                image="https://m.media-amazon.com/images/I/71c5W9NxN5L._AC_UL640_FMwebp_QL65_.jpg"
                rating={4}
                />
                <Product 
                id="12321345"
                title="iBUYPOWER Gaming PC Computer Desktop Element MR 9320 (Intel i7-10700F 2.9GHz, NVIDIA GTX 1660 Ti 6GB, 16GB DDR4 RAM, 240GB SSD, 1TB HDD, Wi-Fi Ready, Windows 10 Home)"
                price={999.99}
                image="https://m.media-amazon.com/images/I/715zrA5cmLL._AC_UL640_FMwebp_QL65_.jpg"
                rating={4}
                />
            </div>

            <div className="home__row">
                <Product 
                id="12321346"
                title="Acer Predator Helios 300 Gaming Laptop, Intel i7-10750H, NVIDIA GeForce RTX 2060 6GB, 15.6 Full HD 144Hz 3ms IPS Display, 16GB Dual-Channel DDR4, 512GB NVMe SSD, Wi-Fi 6, RGB Keyboard, PH315-53-72XD"
                price={1199.99}
                image="https://m.media-amazon.com/images/I/71k45hZkLmL._AC_UL640_FMwebp_QL65_.jpg"
                rating={3}
                />
            </div>
            </div>
            
        </div>
    )
}

export default Home
