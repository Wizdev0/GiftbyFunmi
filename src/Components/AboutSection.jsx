import './AboutSection.css';
import AboutPicture from '../assets/about-pic.png';
import {
    FiShield,
    FiEdit3,
    FiTruck,
    FiHeart
} from 'react-icons/fi';
import { motion } from 'motion/react';

export function AboutSection() {
    return (
        <section className="about-section" id='about'>
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut"}}
                viewport={{ once: true, amount: 0.2 }}
                className="about-image"
            >
                <img src={AboutPicture} alt="" className="about-pic" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="about-write-up"
            >
                <h2 className="about-h2">
                    About Giftsbyfunmi
                </h2>
                <p className="about-para">
                    At GiftsbyFunmi,we create beautiful, customized gifts and kitchen souveniers that adds special touch to your special moments. Wheather it's a wedding, birthday or any occasion, we're here to help you give something meaningful. We help you make your special moments memorable with thoughtful, customised gifts.
                </p>

                <div className="about-features">

                    <div className="feature">
                        <FiShield />
                        <p>Quality Products</p>
                    </div>

                    <div className="feature">
                        <FiEdit3 />
                        <p>Custom Designs</p>
                    </div>

                    <div className="feature">
                        <FiTruck />
                        <p>On-Time Delivery</p>
                    </div>

                    <div className="feature">
                        <FiHeart />
                        <p>Customer Care</p>
                    </div>

                </div>
            </motion.div>
        </section>
    );
}