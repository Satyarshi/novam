import React, { useState } from "react";

interface ProfessionalInfoForm {
  barCouncilId: string;
  barCouncilName: string;
  specialization: string;
  experience: string;
}

const ProfessionalInfo: React.FC = () => {
  const [formData, setFormData] = useState<ProfessionalInfoForm>({
    barCouncilId: "",
    barCouncilName: "",
    specialization: "",
    experience: "",
  });

  const [submittedData, setSubmittedData] =
    useState<ProfessionalInfoForm | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmittedData(formData);
    alert("Form submitted successfully!");
    // Add further form processing logic here
  };

  return (
    <div className="grid grid-cols-5 gap-8">
      <div className="col-span-5 my-8 xl:col-span-3">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Professional Information
            </h3>
          </div>
          <div className="p-7">
            <form onSubmit={handleSubmit}>
              <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                <div className="w-full sm:w-1/2">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                    htmlFor="barCouncilId"
                  >
                    Bar Council ID
                  </label>
                  <input
                    className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type="text"
                    name="barCouncilId"
                    id="barCouncilId"
                    value={formData.barCouncilId}
                    onChange={handleChange}
                    placeholder="Enter your Bar Council ID"
                  />
                </div>

                <div className="w-full sm:w-1/2">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                    htmlFor="barCouncilName"
                  >
                    Bar Council Name
                  </label>
                  <input
                    className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type="text"
                    name="barCouncilName"
                    id="barCouncilName"
                    value={formData.barCouncilName}
                    onChange={handleChange}
                    placeholder="Enter Bar Council Name"
                  />
                </div>
              </div>

              <div className="mb-5.5 w-full sm:w-1/2">
                <label
                  className="mb-3 block text-sm font-medium text-black dark:text-white"
                  htmlFor="specialization"
                >
                  Specialization
                </label>
                <input
                  className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                  type="text"
                  name="specialization"
                  id="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  placeholder="Enter your specialization"
                />
              </div>

              <div className="mb-5.5 w-full">
                <label
                  className="mb-3 block text-sm font-medium text-black dark:text-white"
                  htmlFor="experience"
                >
                  Experience
                </label>
                <textarea
                  placeholder="Write your experience here"
                  className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                  name="experience"
                  id="experience"
                  rows={3}
                  value={formData.experience}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="flex justify-end gap-4.5">
                <button
                  className="flex justify-center rounded border border-stroke px-6 py-2 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                  type="button"
                  onClick={() =>
                    setFormData({
                      barCouncilId: "",
                      barCouncilName: "",
                      specialization: "",
                      experience: "",
                    })
                  }
                >
                  Cancel
                </button>
                <button
                  className="flex justify-center rounded bg-primary px-6 py-2 font-medium text-gray hover:bg-opacity-90"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalInfo;
