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
  {
    name: 'Elizabeth',
    surname: 'Moore',
    role: 'UI/UX Designer',
    image: 'https://valor-ai-main.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1534528741775-53994a69daeb%3Fq%3D80%26w%3D1528%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&w=640&q=75',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'David',
    surname: 'Diaz',
    role: 'Machine Learning Engineer',
    subRole: 'TensorFlow Tinkerer',
    image: 'https://valor-ai-main.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1527980965255-d3b416303d12%3Fq%3D80%26w%3D1760%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&w=640&q=75',
    social: {
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Sarah',
    surname: 'Robinson',
    role: 'Cloud Native Developer',
    subRole: 'Kubernetes Orchestrator',
    image: 'https://valor-ai-main.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1573497161161-c3e73707e25c%3Fq%3D80%26w%3D1587%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&w=640&q=75',
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#'
    }
  },
  {
    name: 'Michael',
    surname: 'Holland',
    role: 'Vue Fronted Developer',
    subRole: 'DevOps Engineer, CI/CD Pipeline Mastermind',
    image: 'https://valor-ai-main.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1616805765352-beedbad46b2a%3Fq%3D80%26w%3D1887%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&w=640&q=75',
    social: {
      linkedin: '#'
    }
  },
  {
    name: 'Zoe',
    surname: 'Garcia',
    role: 'JavaScript Evangelist, Deno Champion',
    image: 'https://valor-ai-main.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1573497019940-1c28c88b4f3e%3Fq%3D80%26w%3D1587%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&w=640&q=75',
    social: {
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Evan',
    surname: 'James',
    role: 'Backend Developer',
    image: 'https://valor-ai-main.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1633332755192-727a05c4013d%3Fq%3D80%26w%3D1480%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&w=640&q=75',
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#'
    }
  },
  {
    name: 'Pam',
    surname: 'Taylor',
    role: 'Fullstack Developer,',
    subRole: 'UX Researcher',
    image: 'https://valor-ai-main.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1573497019236-17f8177b81e8%3Fq%3D80%26w%3D1740%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253Dhttps%3A%2F%2Fimages.unsplash.com%2Fphoto-1573497019236-17f8177b81e8%3Fq%3D80%26w%3D1740%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&w=640&q=75',
    social: {
      twitter: '#'
    }
  },
];

function Teams() {
  return (
    <div id="team" className="min-h-screen bg-gray-900 text-white py-20 px-8 sm:px-4">
    <div className="max-w-5xl mx-auto">
      <p className="text-center text-orange-500 mb-2">Team</p>
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-16">
        The Company Dream Team
      </h2>
  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition-transform transform hover:scale-105 dark:bg-gray-700"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={member.image}
                alt={`${member.name} ${member.surname}`}
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg text-orange-500 dark:text-orange-400">
                {member.name} {member.surname}
              </h3>
              <p className="text-gray-400 text-sm dark:text-gray-300">{member.role}</p>
              {member.subRole && <p className="text-gray-500 text-xs dark:text-gray-400">{member.subRole}</p>}
              <div className="mt-4 flex space-x-4">
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    className="text-blue-500 hover:text-blue-300 dark:text-blue-400 dark:hover:text-blue-200"
                  >
                    <Linkedin />
                  </a>
                )}
                {member.social.github && (
                  <a
                    href={member.social.github}
                    className="text-gray-400 hover:text-white dark:text-gray-300 dark:hover:text-gray-100"
                  >
                    <Github />
                  </a>
                )}
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    className="text-blue-400 hover:text-blue-300 dark:text-blue-300 dark:hover:text-blue-200"
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