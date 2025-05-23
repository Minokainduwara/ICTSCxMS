import {useState} from "react";
import { Link } from "react-router-dom";
import { BookOpen, MapPin, MessageCircle, Mail, Phone, Github, Linkedin, Facebook, Twitter } from "lucide-react";

const TechnologyPortal = () => {
    const [showChatbot, setShowChatbot] = useState(false); 
    const featuredPrograms = [
        {
            title: 'Azure Cloud Azure 101',
            location: 'On-Campus',
            duration: '1 Hour',
            type: 'Workshop',
            image: "/img/azure-icon.png",
            description: "Introduction to cloud computing fundamentals using Microsoft Azure"
        },
        {
            title: 'Azure AI Solutions Development',
            location: 'On-Campus',
            duration: '1 Hour',
            type: 'Workshop',
            image: "/img/openai-icon.png",
            description: "Learn to build intelligent applications with Azure Cognitive Services"
        },
        {
            title: 'DevOps with Azure Pipeline',
            location: 'On-Campus',
            duration: '1 Hour',
            type: 'Workshop',
            image: "/img/Azure-Devops.png",
            description: "Implement CI/CD pipelines using Azure DevOps for efficient software delivery"
        }
    ];

    const speakers = [
        {
            name: "Abishek Haththakage",
            title: "Microsoft Student Ambassador",
            image: "/img/abishek.jpg"
        },
        {
            name: "Chamini Palliyaguru",
            title: "Microsoft Student Ambassador",
            image: "/img/chamini.JPG"
        },
        {
            name: "Theekshana Nirmal",
            title: "UG at Uva Wellassa University",
            image: "/img/theekshana.jpeg"
        },
        {
            name: "Vihini Wathsiluni",
            title: "UG at Uva Wellassa University",
            image: "/img/vihini.jpg"
        }
    ];

    return (
<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 relative">
                {/* Hero Section */}
            <div className="relative bg-indigo-900 text-white">
                <div className="absolute inset-0">
                    <img
                        src="/img/uwu.jpg"
                        alt="University campus"
                        className="w-full h-full object-cover opacity-20"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Ms Club UWU X ICTSC
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-gray-200">
                            Azure, Azure AI, and Azure DevOps Workshop
                        </p>
                    </div>
                </div>
            </div>

            {/* AI Chatbot Section */}
            <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="mb-6 md:mb-0">
                            <h2 className="text-2xl font-bold mb-2">Need assistance?</h2>
                            <p className="text-white text-opacity-90">
                                Our AI assistant can answer all your questions about our Azure workshop programs
                            </p>
                        </div>
                        <Link to="/chatbot">

                        <button
  onClick={() => setShowChatbot(true)}
  className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium flex items-center hover:bg-opacity-90 transition-colors shadow-lg"
>
  <MessageCircle className="mr-2 h-5 w-5" />
  Chat with our AI Assistant
</button>
                        </Link>

                    </div>
                </div>
            </div>


            {/* Featured Programs Section */}
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4"> Azure, Azure AI, and Azure DevOps Sessions</h2>
                    <p className="text-gray-600">Unlock the Future of Cloud Computing and Artificial Intelligence</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredPrograms.map((program, index) => (
                        <div key={index} className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow">
                            <div className="flex items-center justify-between mb-4">
                                <img
                                    src={program.image}
                                    alt={program.title}
                                    className="w-16 h-16 rounded-lg object-cover"
                                />
                                {/* <button className="border border-gray-200 px-3 py-1 rounded text-sm">
                                    {program.type}
                                </button> */}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                            <p className="text-gray-600 mb-4">{program.description}</p>
                            <div className="flex items-center text-gray-500 mb-4">
                                <MapPin className="w-4 h-4 mr-2" />
                                {program.location}
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-indigo-600 font-semibold">{program.duration}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Speakers Section */}
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Meet Our Speakers</h2>
                        {/* <p className="text-gray-600 max-w-2xl mx-auto">
                            Learn from industry experts and thought leaders in the fields of cloud computing, artificial intelligence, and DevOps
                        </p> */}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {speakers.map((speaker, index) => (
                            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                                <div className="p-1 bg-gradient-to-r from-indigo-500 to-blue-500">
                                    <img
                                        src={speaker.image}
                                        alt={speaker.name}
                                        className="w-full aspect-square object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-1">{speaker.name}</h3>
                                    <p className="text-indigo-600 text-sm mb-3">{speaker.title}</p>
                                    <p className="text-gray-600 text-sm">{speaker.bio}</p>
                                    <div className="mt-4 flex space-x-3">
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* About Us Section */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">About MS Club of Uva Wellassa University</h2>
                            <p className="text-gray-600 mb-4">
                                The MS Club of Uva Wellassa University (UWU) is a student-run organization that fosters collaboration, innovation, and knowledge-sharing in the field of technology and software development.
                            </p>
                            <p className="text-gray-600 mb-4">
                                We aim to bridge the gap between academia and industry by organizing workshops, events, and activities that enhance the skills of our members in emerging technologies such as cloud computing, DevOps, and full-stack development.
                            </p>
                            <p className="text-gray-600 mb-4">
                                The club serves as a platform for students to learn, collaborate, and grow together while also gaining real-world insights through industry partnerships and networking opportunities.
                            </p>
                            <div className="mt-8 grid grid-cols-2 gap-4">
                                <div className="bg-indigo-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-lg mb-2">Skill Development</h3>
                                    <p className="text-gray-600">Workshops and events to enhance technical skills</p>
                                </div>
                                <div className="bg-indigo-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-lg mb-2">Networking Opportunities</h3>
                                    <p className="text-gray-600">Connecting students with industry experts</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 lg:mt-0 flex justify-center items-center">
                            <img
                                src="/img/qr.png"
                                alt="MS Club of UWU"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>


{/* Footer */}
<footer className="bg-indigo-900 text-white">
    <div className="max-w-7xl mx-auto px-4 pt-12 pb-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="mb-8 md:mb-0">
                <h3 className="text-xl font-bold mb-4">MS Club of Uva Wellassa University</h3>
                <p className="text-gray-300 mb-4">
                    Uva Wellassa University,<br />
                    Badulla, Sri Lanka
                </p>
                <div className="flex space-x-4 mt-6">
                    <a href="https://web.facebook.com/msclubuwu/?_rdc=1&_rdr#" className="text-gray-300 hover:text-white">
                        <Facebook className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/company/ms-club-of-uva-wellassa-university" className="text-gray-300 hover:text-white">
                        <Linkedin className="w-5 h-5" />
                    </a>
                </div>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <ul className="space-y-3">
                    <li className="flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        <span>076-5576407</span>
                    </li>
                    <li className="flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        <span>msclub@uwu.ac.lk</span>
                    </li>
                </ul>
            </div>
        </div>
        <div className="border-t border-indigo-800 mt-12 pt-8 text-center">
            <p className="text-gray-300">© {new Date().getFullYear()} MS Club of Uva Wellassa University. All rights reserved.</p>
        </div>
    </div>
</footer>

{showChatbot && (
  <div className="fixed bottom-4 right-4 z-50">
    <Chatbot onClose={() => setShowChatbot(false)} />
  </div>
)}

        </div>
    );
};

export default TechnologyPortal;