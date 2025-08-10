import React from "react";
import instagramIcon from "../assets/instagram.png";
import linkedinIcon from "../assets/linkedin.png";
import gmailIcon from "../assets/gmail.png";


const Contact = () => {
    return (
        <section
            id="contact"
            className="py-20 text-white"
        >
            <div className="max-w-4xl mx-auto px-6 text-center">

                <h2 className="text-4xl font-bold mb-6"> Contact Me</h2>
                <p className="text-gray-300 mb-8">
                    Feel free to reach out through any of the platforms below.
                </p>

                <div className="flex justify-center gap-8">


                    <a
                        href="https://www.instagram.com/samir_tiwari1/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-2 hover:scale-110 transition-transform"
                    >
                        <img src={instagramIcon} alt="Instagram" className="h-10 w-10" />
                        <span className="text-sm">Instagram</span>
                    </a>


                    <a
                        href="https://www.linkedin.com/in/samir-tiwari-05933b336/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-2 hover:scale-110 transition-transform"
                    >
                        <img src={linkedinIcon} alt="LinkedIn" className="h-10 w-10" />
                        <span className="text-sm">LinkedIn</span>
                    </a>


                    <a
                        href="mailto:samirtiwari020@gmail.com"
                        className="flex flex-col items-center gap-2 hover:scale-110 transition-transform"
                    >
                        <img src={gmailIcon} alt="Gmail" className="h-10 w-10" />
                        <span className="text-sm">Gmail</span>
                    </a>


                </div>
            </div>
        </section>
    );
};

export default Contact;

