import React from 'react'

const Footer = () => {
    return (
        <footer id="contact" className="py-8 px-8 bg-white border-t text-center">
          <div className="max-w-5xl mx-auto">
            <p className="text-gray-600 mb-4">&copy; {new Date().getFullYear()} MobiusEngine.ai. All rights reserved.</p>
            <div className="flex justify-center gap-6 text-gray-700">
              <a href="#features" className="hover:text-primary">Features</a>
              <a href="#about" className="hover:text-primary">About</a>
              <a href="#contact" className="hover:text-primary">Contact</a>
            </div>
          </div>
        </footer>
    );
}

export default Footer