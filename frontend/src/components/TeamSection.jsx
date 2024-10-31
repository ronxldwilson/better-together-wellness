import React from 'react';

// Sample data for team members, each object contains a name, role, image URL, and social links
const teamMembers = [
    {
        name: 'Naomi',
        role: 'Project Manager',
        image: 'https://via.placeholder.com/150',
        socials: {
            linkedin: 'https://www.linkedin.com/in/naomi-susan/',
            instagram: 'https://www.instagram.com/naomi_susan_',
        },
    },
    {
        name: 'Issac',
        role: 'Frontend Developer',
        image: 'https://via.placeholder.com/150',
        socials: {
            linkedin: 'https://www.linkedin.com/in/issac-paul-151096/',
            instagram: 'https://www.instagram.com/izach.paul',
        },
    },
    {
        name: 'Ron',
        role: 'Backend Developer',
        image: 'https://via.placeholder.com/150',
        socials: {
            linkedin: 'https://www.linkedin.com/in/ronxldwilson/',
            instagram: 'https://www.instagram.com/ronxldwilson/',
        },
    },
];

// Card component to display individual team member information
const TeamCard = ({ member }) => {
    return (
        <div className="bg-white w-full sm:w-72 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center text-center">
            <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
            <div className="mt-4 flex space-x-3">
                {/* Render social links with logos */}
                {member.socials.linkedin && (
                    <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" // LinkedIn logo URL
                            alt="LinkedIn"
                            className="w-6 h-6 text-blue-600 hover:opacity-75"
                        />
                    </a>
                )}
                {member.socials.instagram && (
                    <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" // Instagram logo URL
                            alt="Instagram"
                            className="w-6 h-6 text-pink-600 hover:opacity-75"
                        />
                    </a>
                )}
            </div>
        </div>
    );
};

// Main component to display the team section with all team members
const TeamSection = () => {
    return (
        <div className="p-10 bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
            <h2 className="text-3xl font-bold text-center mb-6">Meet Our Team</h2>
            <div className="flex flex-wrap justify-center gap-4">
                {teamMembers.map((member) => (
                    <TeamCard key={member.name} member={member} />
                ))}
            </div>
        </div>
    );
};

export default TeamSection;
