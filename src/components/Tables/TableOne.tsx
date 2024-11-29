import Image from "next/image";
import { FaClock, FaCalendarAlt } from "react-icons/fa";

const lawyerApplications = [
  {
    profilePic: "/images/user/user-01.png",
    name: "Ram Kumar Sharma",
    time: "10:20 AM",
    date: "14 February, 2025",
    status: "Pending",
  },
  {
    profilePic: "/images/user/user-01.png",
    name: "Meeting: Ankit Gupta",
    time: "09:30 AM",
    date: "14 February, 2025",
    status: "Pending",
  },
  {
    profilePic: "/images/user/user-01.png",
    name: "Meeting: Saurabh Kumar",
    time: "10:30 AM",
    date: "14 February, 2025",
    status: "Pending",
  },
  {
    profilePic: "/images/user/user-01.png",
    name: "Meeting: Saurbhi Kumar",
    time: "10:30 AM",
    date: "14 February, 2025",
    status: "Pending",
  },
];

const LawyerApplications = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white border-b border-stroke pb-4 last:border-0">
        Lawyers Applications
      </h4>

      <div className="space-y-4">
        {lawyerApplications.map((application, index) => (
          <div
            key={index}
            className="flex items-center justify-between pb-6"
          >
            <div className="flex items-center gap-3">
              <Image
                src={application.profilePic}
                alt="Profile"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="text-black dark:text-white">{application.name}</p>
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mt-2">
                  <FaClock className="mr-1" />
                  <span>{application.time}</span>
                  <FaCalendarAlt className="ml-3 mr-1" />
                  <span>{application.date}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className="bg-red-100 text-red-500 text-sm font-medium px-3 py-1 rounded">
                {application.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LawyerApplications;
