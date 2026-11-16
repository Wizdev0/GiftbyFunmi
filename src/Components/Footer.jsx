import './Footer.css';
import { FiMapPin } from 'react-icons/fi';
import { socials } from '../socials';
import { motion } from 'motion/react';

export function Footer({ whatsapplink }) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            id="contact" className='contact-section'
        >

            <div className="theme-and-links">

                {/* THEME */}
                <div className="theme">

                    <p className="theme-p">
                        We help you make your special moments memorable with thoughtful, customised gifts.
                    </p>

                    <div className="socials">
                        {socials.map((commedia) => {
                            const Icon = commedia.icon;

                            return (
                                <a
                                    key={commedia.name}
                                    href={commedia.name === "Whatsapp" ? undefined : commedia.url}
                                    onClick={commedia.name === "Whatsapp" ? (e) => {
                                        e.preventDefault();
                                        whatsapplink();
                                    } : undefined}
                                    target='blank'
                                    rel='noopener noreferrer'
                                    className='social-links'
                                >
                                    <Icon title={commedia.name} />
                                </a>
                            );
                        })}
                    </div>

                    <div className="location-div">
                        <FiMapPin />
                        <p>Abuja & Nasarawa State, Nigeria</p>
                    </div>

                </div>

                <div className="links">

                    {/* LINKS */}
                    <div className="links-and-lnk-head">

                        <div className="link-head">
                            <p className="link-head-p">
                                Links
                            </p>
                        </div>

                        <div className="link-main">
                            <a href="#home">Home</a>
                            <a href="#about">About</a>
                            <a href="#products">Products</a>
                            <a href="#contact">Contact Us</a>
                        </div>


                    </div>

                    {/* OUR SERVICES */}
                    <div className="service">

                        <div className="service-head">
                            <p className="service-head-p">
                                Our Services
                            </p>
                        </div>

                        <div className="service-main">
                            <p className="service-main-p">Customized mugs</p>
                            <p className="service-main-p">Tote bags</p>
                            <p className="service-main-p">Bottles</p>
                            <p className="service-main-p">Jotters</p>
                            <p className="service-main-p">Food flasks</p>
                            <p className="service-main-p">Resin key holders</p>
                            <p className="service-main-p">Wedding and birthday souvenirs</p>
                        </div>

                    </div>
                </div>

            </div>

            <hr />

            <div className="rights-div">
                <div className="right-and-date">
                    <p className="date">
                        &copy; {new Date().getFullYear()} Giftsbyfunmi
                    </p>
                    <p className="rights">
                        .  All Rights Reserved
                    </p>
                </div>

                <div className="back-div">
                    <a href="#home" className="home-top">
                        ↑ Back to Top
                    </a>
                </div>
            </div>
        </motion.section>
    );
}