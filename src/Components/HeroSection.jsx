import HeroPicture from '../assets/hero.png';
import './HeroSection.css';
import { motion } from 'motion/react';

export function HeroSection({ whatsapplink }) {

    

    return (
        <section className="hero-section" id='home'>
            <div className="hero-write-up-and-picture">
                <div className="hero-h2-and-buttons">
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-h1"

                    >
                        Thoughtful Gifts,<br />
                        Made just for You.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hero-p"
                    >
                        Your one-stop shop for customized and kitchen souvenirs, perfect for weddings, birthdays, special occasions, and memorable gifts
                    </motion.p>

                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <a href="#products" className="explore">
                            Explore our collection
                        </a>
                        <a className="enquiry" onClick={() => {whatsapplink()}}>
                            Make an Enquiry
                        </a>
                    </motion.div>
                </div>

                <div className="hero-picture-div">
                    <motion.img
                        src={HeroPicture}
                        alt="Customized gifts and souvenirs"
                        className="hero-picture"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}

                    />
                </div>
            </div>
        </section>
    );
}