
import './ProductSection.css';
import { products } from '../products';
import { motion } from 'motion/react';

// Controls the entire group of product cards
const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

// Controls each individual product card
const cardVariants = {
    hidden: {
        opacity: 0,
        y: 50
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

export function ProductSection() {
    const orderOnWhatsApp = (productName) => {
        const phoneNumber = "2347038017176";

        const message = `Hello, I'm interested in ordering ${productName}. Please provide more details.`;

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank");
    };


    return (
        <section className="product-section" id='products'>
            <div className="product-header">
                <h2 className="product-h1">
                    Our Products
                </h2>
                <p className="pro-featured">
                    [SAMPLE PRODUCTS]
                </p>
            </div>

            <motion.div
                className="products-main"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: "some" }}
            >
                {products.map((product) => (
                    <motion.div
                        className="products-div"
                        key={product.id}
                        variants={cardVariants}
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="product-img"
                        />

                        <div className="call-to-action">
                            <p className="product-name">{product.des}</p>

                            <button 
                                onClick={() => orderOnWhatsApp(product.des)}
                                className="order-btn"
                            >
                                Order Now
                            </button>
                        </div>

                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
