import Navbar from '../Components/Navbar'; // Adjust path as needed

export default function About() {
    return (
        <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
            {/* Navbar with a consistent background */}
            <Navbar />
            
            {/* About page content */}
            <div style={{ 
                padding: '40px', 
                textAlign: 'center', 
                fontFamily: 'Arial, sans-serif', 
                color: '#333', 
                backgroundColor: '#FFFFFF'  // Ensure consistent background color
            }}>
                <h1 style={{ 
                    fontSize: '36px', 
                    marginBottom: '20px', 
                    color: '#D11B1B'  // red color from your palette
                }}>
                    About Us
                </h1>
                
                <p style={{ 
                    fontSize: '18px', 
                    lineHeight: '1.6', 
                    color: 'black', 
                    marginBottom: '30px', 
                    maxWidth: '800px', 
                    margin: '0 auto' 
                }}>
                    Welcome to Culture Compass, your go-to educational platform that brings history and culture to life in real-time! We provide an interactive experience that combines facts, quizzes, and stunning 3D visualizations of cultural events and notable people. Whether you’re exploring from home or on the move, our platform curates educational content based on your travel ETA, making learning fun and accessible anywhere.
                    <br /><br />
                    Our mission is to celebrate and share diverse histories, especially highlighting the untold stories that have shaped our world. With a focus on inclusivity and innovation, we aim to inspire curiosity and deepen understanding through engaging, immersive content.
                    <br /><br />
                    At Culture Compass, we believe that learning about history and culture should be as dynamic as the world around us. Join us on this journey of discovery and let the past enrich your present.
                </p>
                
                <img
                    src="/path/to/about-image.jpg"
                    alt="About us image"
                    style={{ 
                        width: '60%', 
                        borderRadius: '10px', 
                        border: '3px solid #DA9F3F',  // Orange color from your palette
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' 
                    }}
                />
            </div>
        </div>
    );
}
