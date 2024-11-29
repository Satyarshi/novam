"use client";
import React, { useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa6";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const Help = () => {
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (subject && message) {
      // Handle form submission (e.g., API call or form processing)
      console.log("Form Submitted:");
      console.log("Subject:", subject);
      console.log("Message:", message);

      // Reset form
      setSubject("");
      setMessage("");

      // Optionally, display a success message
      alert("Your message has been sent successfully!");
    } else {
      // Handle validation if necessary
      alert("Please fill in both the subject and message fields.");
    }
  };

  return (
    <DefaultLayout>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Help & Support" />
        <div className="my-8 w-full text-center">
          <h1 className="text-4xl font-semibold text-[#181C31] dark:text-white">
            Let’s Stay Connected
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-[#79808A]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using.
          </p>
        </div>

        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-4 xl:col-span-2">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="space-y-6 p-6 text-gray-700">
                {/* Email Address */}
                <div>
                  <h3 className="text-lg font-medium text-[#181C31] dark:text-white">
                    Email Address
                  </h3>
                  <p className="text-[#79808A]">support@novamlegal.com</p>
                </div>

                {/* Office Location */}
                <div>
                  <h3 className="text-lg font-medium text-[#181C31] dark:text-white">
                    Office Location
                  </h3>
                  <p className="text-[#79808A]">76/A, Green city, Ghaziabad</p>
                </div>

                {/* Phone Number */}
                <div>
                  <h3 className="text-lg font-medium text-[#181C31] dark:text-white">
                    Phone Number
                  </h3>
                  <p className="text-[#79808A]">+91 8754 3433 223</p>
                </div>

                {/* Secondary Email */}
                <div>
                  <h3 className="text-lg font-medium text-[#181C31] dark:text-white">
                    Secondary Email
                  </h3>
                  <p className="text-[#79808A]">example@novamlegal.com</p>
                </div>
                <hr />
                {/* Social Media */}
                <div>
                  <h3 className="text-lg font-medium text-[#181C31] dark:text-white">
                    Social Media
                  </h3>
                  <div className="mt-2 flex space-x-4">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-transform hover:scale-110"
                    >
                      <FaFacebookF size={30} />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-transform hover:scale-110"
                    >
                      <FaTwitter size={30} />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-transform hover:scale-110"
                    >
                      <FaLinkedin size={30} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-4 xl:col-span-3">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="p-7">
                <form onSubmit={handleSubmit}>
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="subject"
                    >
                      Subject
                    </label>
                    <input
                      className="w-full rounded border border-stroke px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      name="subject"
                      id="subject"
                      value={subject}
                      onChange={handleSubjectChange}
                      placeholder="Type your subject"
                    />
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <div className="relative">
                      <textarea
                        className="w-full rounded border border-stroke px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        name="message"
                        id="message"
                        rows={6}
                        value={message}
                        onChange={handleMessageChange}
                      ></textarea>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <button
                      className="flex justify-center rounded bg-primary px-6 py-2 font-medium text-gray hover:bg-opacity-90"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Help;
