import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const teamMembers = [
  {
    name: 'Leo',
    surname: 'Miranda',
    role: 'Vue Fronted Developer',
    subRole: 'Creator Of This Website',
    image: 'https://valor-ai-main.vercel.app/_next/image?url=https%3A%2F%2Fi.pravatar.cc%2F250%3Fimg%3D58&w=640&q=75',
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#'
    }
  },
  // ...other team members
];

function Teams() {
  return (
    <div id="team" className="min-h-screen bg-white text-black py-20 px-8 sm:px-4 dark:bg-gray-900 dark:text-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-orange-500 mb-2">Team</p>
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-16">
          The Company Dream Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-transform transform hover:scale-105 dark:bg-gray-800"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={member.image}
                  alt={`${member.name} ${member.surname}`}
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-orange-500">
                  {member.name} {member.surname}
                </h3>
                <p className="text-gray-600 text-sm dark:text-gray-300">{member.role}</p>
                {member.subRole && <p className="text-gray-500 text-xs dark:text-gray-400">{member.subRole}</p>}
                <div className="mt-4 flex space-x-4">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-200"
                    >
                      <Linkedin />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
                    >
                      <Github />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="text-blue-500 hover:text-blue-300 dark:text-blue-300 dark:hover:text-blue-200"
                    >
                      <Twitter />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Teams;
