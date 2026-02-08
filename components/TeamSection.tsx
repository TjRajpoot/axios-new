"use client";
import Image from "next/image";

const teamMembers = [
  {
    name: "Ankit Kaushik",
    role: "CORDINATOR",
    image: "/ankit.png",
  },
  {
    name: "Jitesh Shewaramani",
    role: "CO-CORDINATOR",
    image: "/jitesh.png",
  },
  {
    name: "Yuvraj Singh Gour",
    role: "LEAD EXECUTIVE",
    image: "/yuvraj.png",
  },
  {
    name: "Ronak Nayak",
    role: "WEB DEV LEAD",
    image: "/ronak.png",
  },
  {
    name: "Anuj Vishwakarma",
    role: "APP DEV LEAD",
    image: "/anuj.png",
  },
  {
    name: "Pritam Goyal",
    role: "DATA SCIENCE LEAD",
    image: "/pritam.png",
  },
  {
    name: "Pratham Upadhyay",
    role: "AI/ML LEAD",
    image: "/pratham.png",
  },
  {
    name: "Somil Rathore",
    role: "CLOUD LEAD",
    image: "/somil.png",
  },
  {
    name: "Himank Shrimal",
    role: "VLSI LEAD",
    image: "/himank.png",
  },
  {
    name: "Ajinkya Lakhara",
    role: "MANAGEMENT LEAD",
    image: "/ajinkya.png",
  },
  {
    name: "Kunal Karole",
    role: "SOCIAL MEDIA LEAD",
    image: "/kunal.png",
  },
  {
    name: "Mohd Faraz Siddiqui",
    role: "AI/ML RESEARCH LEAD",
    image: "/mohd.png",
  },
  {
    name: "Suyash Pradeep Patil",
    role: "DATA SCIENCE RESEARCH LEAD",
    image: "/suyash.png",
  },
  {
    name: "Suraj Mishra",
    role: "WEB DEV LEAD",
    image: "/suraj.png",
  },
  {
    name: "Abhishek Patel",
    role: "PR/OUTREACH LEAD",
    image: "/abhishek.png",
  },
];

const assistantMembers = [
  {
    name: "Shashank Agrawal",
    role: "ASSISTANT WEB DEVELOPER",
    image: "/ShashankAgarwal.webp",
  },
  {
    name: "Arpit Chauhan",
    role: "ASSISTANT WEB DEVELOPER",
    image: "/arpit.png",
  },
  {
    name: "Aryan Wattamwar",
    role: "ASSISTANT WEB DEVELOPER",
    image: "/aryan.jpg",
  },
  {
    name: "Mayank Kumar Verma",
    role: "ASSISTANT WEB DEVELOPER",
    image: "/mayank.jpg",
  },
  {
    name: "Krish Chordiya",
    role: "ASSISTANT AI/ML DEVELOPER",
    image: "/krishc.jpg",
  },
  {
    name: "Kanishk Mishra",
    role: "ASSISTANT AI/ML DEVELOPER",
    image: "/kanishk.jpg",
  },
  {
    name: "Puneet Waswani",
    role: "ASSISTANT AI/ML DEVELOPER",
    image: "/puneet.jpg",
  },
  {
    name: "Deepak kumar",
    role: "ASSISTANT AI/ML DEVELOPER",
    image: "/deepak.jpg",
  },
  {
    name: "Krish Rathi",
    role: "GRAPHIC DESIGNER",
    image: "/krishr.jpg",
  },
  {
    name: "Almaaz Abbas Rizvi",
    role: "GRAPHIC DESIGNER",
    image: "/almaas.jpg",
  },
  {
    name: "Apoorva Bhajpai",
    role: "ASSISTANT APP DEVELOPER",
    image: "/apoorva.png",
  },
  {
    name: "Akshit Pahade",
    role: "ASSISTANT APP DEVELOPER",
    image: "/akshit.jpg",
  },
  {
    name: "Dhruv Sarin",
    role: "ASSISTANT DATA SCIENTIST",
    image: "/dhruv.jpg",
  },
  {
    name: "Tejasri Pendota",
    role: "ASSISTANT DATA SCIENTIST",
    image: "/tejasri.jpg",
  },
  {
    name: "Dhruvi Sharma",
    role: "ASSISTANT DATA SCIENTIST",
    image: "/dhruvi.png",
  },
  {
    name: "Harsh Goyal",
    role: "ASSISTANT VLSI LEAD",
    image: "/harsh.jpg",
  },
  {
    name: "Jatin Wadhwani",
    role: "ASSISTANT CLOUD DEVELOPER",
    image: "/Jatin.jpg",
  },
  {
    name: "Ashmit Rajput",
    role: "ASSISTANT CLOUD DEVELOPER",
    image: "/ashmit.jpg",
  },
  {
    name: "Vansh Tambi",
    role: "ASST. SOCIAL MEDIA MANAGER",
    image: "/vansh.jpg",
  },
  {
    name: "Kshitij Nigam",
    role: "ASST. SOCIAL MEDIA MANAGER",
    image: "/kshitij.jpg",
  },
  {
    name: "Shivam Jawaliya",
    role: "PR & OUTREACH TEAM ASST.",
    image: "/shivam.jpg",
  },
  {
    name: "Umesh Kumar",
    role: "PR & OUTREACH TEAM ASST.",
    image: "/umesh.jpg",
  },
  {
    name: "Manish Kumar",
    role: "MANANGEMENT TEAM ASST.",
    image: "/manish.png",
  },
  {
    name: "Akash Singh Lalla",
    role: "MANANGEMENT TEAM ASST.",
    image: "/akash.webp",
  },
  {
    name: "Deepanshu Rajput",
    role: "ASST. EXECUTIVE",
    image: "/deepanshu.jpg",
  },
];

export const TeamSection = () => {
  return (
    <section className="text-center py-20 bg-black text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Meet Our <span className="text-blue-500">Team 2024-25</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-10 px-6 max-w-7xl mx-auto">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="w-[150px] md:w-[180px] flex flex-col items-center"
          >
            <div className="rounded-xl border-2 border-cyan-400 overflow-hidden w-full aspect-[3/4]">
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={250}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="mt-3 text-sm font-medium">{member.name}</p>
            <p className="text-xs text-gray-300">{member.role}</p>
          </div>
        ))}
      </div>

      <h2 className="text-3xl md:text-4xl font-bold mt-24 mb-12">
        Assistant <span className="text-blue-500">Team Leads 2024-25</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-10 px-6 max-w-7xl mx-auto">
        {assistantMembers.map((member, idx) => (
          <div
            key={idx}
            className="w-[150px] md:w-[180px] flex flex-col items-center"
          >
            <div className="rounded-xl border-2 border-cyan-400 overflow-hidden w-full aspect-[3/4]">
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={250}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="mt-3 text-sm font-medium">{member.name}</p>
            <p className="text-xs text-gray-300">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
