import { FaGraduationCap, FaRegClock } from "react-icons/fa";

function Education() {
  return (
    <div className="px-10 py-10">
      <h1 className="text-center text-5xl text-white font-bold mb-10">EDUCATION JOURNEY</h1>

      <div className="max-w-4xl mx-auto">
        <ul className="space-y-6">
          {educationData.map((edu, index) => (
            <li
              key={index}
              className="flex items-center gap-6 p-6 bg-white shadow-lg rounded-lg border-l-8 border-blue-500 hover:scale-105 transition-transform"
            >
              {/* Hiển thị icon tốt nghiệp hoặc đồng hồ dựa vào điều kiện */}
              <div className="text-blue-500 text-4xl">
                {edu.inProgress ? <FaRegClock /> : <FaGraduationCap />}
              </div>
              <div>
                <h2 className="font-semibold text-2xl text-gray-800">{edu.year}</h2>
                <p className="text-lg text-gray-600">{edu.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Dữ liệu quá trình học tập
const educationData = [
  { year: "2010 - 2015", description: "✔️ Attended An Phong Primary School" },
  { year: "2015 - 2019", description: "✔️ Attended Tang Bat Ho Secondary School" },
  { year: "2019 - 2022", description: "✔️ Attended Hoai An High School" },
  { year: "2022 - Today", description: "⏰ Attending Ho Chi Minh City University of Education", inProgress: true }
];

export default Education;
