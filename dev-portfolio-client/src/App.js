// import React from 'react';
// import './App.css'; // צרף קובץ עיצוב TailwindCSS או CSS משלך
// import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// function App() {
//   return (
//     <div className="bg-gray-100 text-gray-800">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 text-center">
//         <h1 className="text-4xl font-bold mb-4">[Your Name]</h1>
//         <p className="text-xl mb-6">Fullstack Developer | Problem Solver</p>
//         <a
//           href="#contact"
//           className="bg-white text-indigo-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
//         >
//           צור קשר
//         </a>
//       </section>

//       {/* About Section */}
//       <section className="py-16 px-8 text-center">
//         <h2 className="text-3xl font-bold mb-6">אודותיי</h2>
//         <p className="text-lg max-w-3xl mx-auto">
//           אני הנדסאי תוכנה המתמקד בפיתוח תוכנות חדשניות ופתרון בעיות מורכבות. מחפש הזדמנות לעבוד על פרויקטים מאתגרים בסביבה דינמית.
//         </p>
//       </section>

//       {/* Skills Section */}
//       <section className="bg-gray-200 py-16 px-8">
//         <h2 className="text-3xl font-bold text-center mb-6">מיומנויות</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
//           <div className="bg-white p-4 rounded shadow">HTML</div>
//           <div className="bg-white p-4 rounded shadow">CSS</div>
//           <div className="bg-white p-4 rounded shadow">JavaScript</div>
//           <div className="bg-white p-4 rounded shadow">React</div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section className="py-16 px-8">
//         <h2 className="text-3xl font-bold text-center mb-6">פרויקטים</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
//           <div className="bg-white p-6 rounded shadow">
//             <h3 className="text-xl font-semibold mb-2">פרויקט 1</h3>
//             <p className="text-gray-700">תיאור קצר של הפרויקט, מטרות וטכנולוגיות.</p>
//             <a
//               href="https://github.com"
//               className="text-indigo-600 hover:underline mt-4 block"
//             >
//               צפה בפרויקט
//             </a>
//           </div>
//           <div className="bg-white p-6 rounded shadow">
//             <h3 className="text-xl font-semibold mb-2">פרויקט 2</h3>
//             <p className="text-gray-700">תיאור קצר של הפרויקט, מטרות וטכנולוגיות.</p>
//             <a
//               href="https://github.com"
//               className="text-indigo-600 hover:underline mt-4 block"
//             >
//               צפה בפרויקט
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-16 px-8">
//         <h2 className="text-3xl font-bold text-center mb-6">צור קשר</h2>
//         <form className="max-w-xl mx-auto space-y-4">
//           <input
//             type="text"
//             placeholder="שם"
//             className="w-full p-3 rounded text-gray-800"
//           />
//           <input
//             type="email"
//             placeholder="אימייל"
//             className="w-full p-3 rounded text-gray-800"
//           />
//           <textarea
//             placeholder="הודעה"
//             rows="4"
//             className="w-full p-3 rounded text-gray-800"
//           ></textarea>
//           <button
//             type="submit"
//             className="bg-white text-indigo-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
//           >
//             שלח
//           </button>
//         </form>
//       </section>

//       {/* Footer */}
//       <footer className="text-center py-4 bg-gray-800 text-white">
//         <div className="flex justify-center space-x-6">
//           <a href="https://github.com" target="_blank" rel="noopener noreferrer">
//             <FaGithub size={24} />
//           </a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//             <FaLinkedin size={24} />
//           </a>
//           <a href="mailto:your-email@example.com">
//             <FaEnvelope size={24} />
//           </a>
//         </div>
//         <p className="mt-4">&copy; 2025 [Your Name]. כל הזכויות שמורות.</p>
//       </footer>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import './App.css'; // צור קובץ עיצוב עם TailwindCSS
// import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// function App() {
//   return (
//     <div className="bg-gray-900 text-white font-sans antialiased">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-teal-500 to-blue-600 text-white py-24 text-center relative">
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <div className="relative z-10">
//           <h1 className="text-5xl md:text-6xl font-bold mb-6 animate__animated animate__fadeInUp">שלום, אני [Your Name]</h1>
//           <p className="text-xl md:text-2xl mb-8 animate__animated animate__fadeInUp">מפתח Fullstack | פותר בעיות יצירתיות</p>
//           <a
//             href="#contact"
//             className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-100 transition transform hover:scale-105"
//           >
//             צור קשר
//           </a>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="py-24 px-8 text-center bg-gray-800">
//         <h2 className="text-4xl font-semibold mb-6 text-blue-300">אודותיי</h2>
//         <p className="text-lg max-w-3xl mx-auto">
//           אני מפתח Fullstack מנוסה, המתמקד ביצירת פתרונות טכנולוגיים מתקדמים ובפיתוח תוכנה חדשנית.  
//           עם ניסיון בעבודה עם טכנולוגיות עדכניות, אני מחפש הזדמנויות חדשות להתפתח ולהוביל פרויקטים מאתגרים.
//         </p>
//       </section>

//       {/* Skills Section */}
//       <section className="bg-gray-800 py-24 px-8">
//         <h2 className="text-4xl font-semibold text-center text-blue-300 mb-12">מיומנויות</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto">
//           <div className="bg-gradient-to-r from-green-400 to-teal-400 p-6 rounded-lg shadow-lg hover:scale-105 transition">
//             <h3 className="text-2xl font-semibold text-center">HTML</h3>
//           </div>
//           <div className="bg-gradient-to-r from-blue-400 to-indigo-600 p-6 rounded-lg shadow-lg hover:scale-105 transition">
//             <h3 className="text-2xl font-semibold text-center">CSS</h3>
//           </div>
//           <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-lg shadow-lg hover:scale-105 transition">
//             <h3 className="text-2xl font-semibold text-center">JavaScript</h3>
//           </div>
//           <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-6 rounded-lg shadow-lg hover:scale-105 transition">
//             <h3 className="text-2xl font-semibold text-center">React</h3>
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section className="py-24 px-8 bg-gray-900">
//         <h2 className="text-4xl font-semibold text-center text-blue-300 mb-12">פרויקטים</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:scale-105 transition">
//             <h3 className="text-2xl font-semibold mb-4">פרויקט 1</h3>
//             <p className="text-lg text-gray-300">תיאור של פרויקט מרתק שבו פיתחתי פתרונות חדשניים תוך שימוש בטכנולוגיות מתקדמות.</p>
//             <a href="https://github.com" className="text-blue-400 hover:underline mt-4 block">צפה בפרויקט</a>
//           </div>
//           <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:scale-105 transition">
//             <h3 className="text-2xl font-semibold mb-4">פרויקט 2</h3>
//             <p className="text-lg text-gray-300">תיאור של פרויקט נוסף עם דגש על פיתוח חוויית משתמש ופתרונות חכמים.</p>
//             <a href="https://github.com" className="text-blue-400 hover:underline mt-4 block">צפה בפרויקט</a>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-24 px-8">
//         <h2 className="text-4xl font-semibold text-center mb-12">צור קשר</h2>
//         <form className="max-w-3xl mx-auto space-y-6">
//           <input
//             type="text"
//             placeholder="שם"
//             className="w-full p-4 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <input
//             type="email"
//             placeholder="אימייל"
//             className="w-full p-4 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <textarea
//             placeholder="הודעה"
//             rows="6"
//             className="w-full p-4 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           ></textarea>
//           <button
//             type="submit"
//             className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-100 transition transform hover:scale-105"
//           >
//             שלח
//           </button>
//         </form>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-8">
//         <div className="flex justify-center space-x-6">
//           <a href="https://github.com" target="_blank" rel="noopener noreferrer">
//             <FaGithub size={30} />
//           </a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//             <FaLinkedin size={30} />
//           </a>
//           <a href="mailto:your-email@example.com">
//             <FaEnvelope size={30} />
//           </a>
//         </div>
//         <p className="text-center mt-6">&copy; 2025 [Your Name]. כל הזכויות שמורות.</p>
//       </footer>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import 'animate.css';
// import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// function App() {
//   return (
//     <div className="bg-gray-100 text-gray-800 animate__animated animate__fadeIn">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-32 text-center animate__animated animate__fadeIn animate__delay-1s">
//         <h1 className="text-5xl font-bold mb-4">ברוך הבא לדף הנחיתה שלי</h1>
//         <p className="text-2xl mb-6">הנדסאי תוכנה | מפתח Fullstack</p>
//         <a
//           href="#contact"
//           className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300"
//         >
//           צור קשר
//         </a>
//       </section>

//       {/* About Section */}
//       <section className="py-16 px-8 text-center animate__animated animate__fadeIn animate__delay-2s">
//         <h2 className="text-4xl font-bold mb-6">אודותיי</h2>
//         <p className="text-lg max-w-3xl mx-auto">
//           אני הנדסאי תוכנה המתמקד בפיתוח תוכנות חדשניות ופתרון בעיות מורכבות. מחפש הזדמנות לעבוד על פרויקטים מאתגרים בסביבה דינמית.
//         </p>
//       </section>

//       {/* Skills Section */}
//       <section className="bg-gray-200 py-16 px-8 animate__animated animate__fadeIn animate__delay-3s">
//         <h2 className="text-3xl font-bold text-center mb-6">מיומנויות</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
//           <div className="bg-white p-6 rounded shadow transform hover:scale-105 transition duration-300">
//             <h3 className="text-xl font-semibold">HTML</h3>
//             <p className="text-gray-600">מבנה האתר.</p>
//           </div>
//           <div className="bg-white p-6 rounded shadow transform hover:scale-105 transition duration-300">
//             <h3 className="text-xl font-semibold">CSS</h3>
//             <p className="text-gray-600">עיצוב וסטיילינג.</p>
//           </div>
//           <div className="bg-white p-6 rounded shadow transform hover:scale-105 transition duration-300">
//             <h3 className="text-xl font-semibold">JavaScript</h3>
//             <p className="text-gray-600">פיתוח דינמי ואינטראקטיביות.</p>
//           </div>
//           <div className="bg-white p-6 rounded shadow transform hover:scale-105 transition duration-300">
//             <h3 className="text-xl font-semibold">React</h3>
//             <p className="text-gray-600">פיתוח אפליקציות חדשות.</p>
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section className="py-16 px-8 animate__animated animate__fadeIn animate__delay-4s">
//         <h2 className="text-3xl font-bold text-center mb-6">פרויקטים</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
//           <div className="bg-white p-6 rounded shadow transform hover:scale-105 transition duration-300">
//             <h3 className="text-xl font-semibold mb-2">פרויקט 1</h3>
//             <p className="text-gray-700">תיאור קצר של הפרויקט, מטרות וטכנולוגיות.</p>
//             <a
//               href="https://github.com"
//               className="text-indigo-600 hover:underline mt-4 block"
//             >
//               צפה בפרויקט
//             </a>
//           </div>
//           <div className="bg-white p-6 rounded shadow transform hover:scale-105 transition duration-300">
//             <h3 className="text-xl font-semibold mb-2">פרויקט 2</h3>
//             <p className="text-gray-700">תיאור קצר של הפרויקט, מטרות וטכנולוגיות.</p>
//             <a
//               href="https://github.com"
//               className="text-indigo-600 hover:underline mt-4 block"
//             >
//               צפה בפרויקט
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-16 px-8 animate__animated animate__fadeIn animate__delay-5s">
//         <h2 className="text-3xl font-bold text-center mb-6">צור קשר</h2>
//         <form className="max-w-xl mx-auto space-y-4">
//           <input
//             type="text"
//             placeholder="שם"
//             className="w-full p-3 rounded text-gray-800"
//           />
//           <input
//             type="email"
//             placeholder="אימייל"
//             className="w-full p-3 rounded text-gray-800"
//           />
//           <textarea
//             placeholder="הודעה"
//             rows="4"
//             className="w-full p-3 rounded text-gray-800"
//           ></textarea>
//           <button
//             type="submit"
//             className="bg-white text-indigo-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
//           >
//             שלח
//           </button>
//         </form>
//       </section>

//       {/* Footer */}
//       <footer className="text-center py-4 bg-gray-800 text-white animate__animated animate__fadeIn animate__delay-6s">
//         <div className="flex justify-center space-x-6">
//           <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="transform transition-all duration-300 hover:scale-125">
//             <FaGithub size={24} />
//           </a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="transform transition-all duration-300 hover:scale-125">
//             <FaLinkedin size={24} />
//           </a>
//           <a href="mailto:your-email@example.com" className="transform transition-all duration-300 hover:scale-125">
//             <FaEnvelope size={24} />
//           </a>
//         </div>
//         <p className="mt-4">&copy; 2025 [Your Name]. כל הזכויות שמורות.</p>
//       </footer>
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import './App.css'; // TailwindCSS or additional CSS
// import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// function App() {
//   return (
//     <div className="bg-white text-gray-800 font-sans antialiased">
//       {/* Header */}
//       <header className="bg-gray-100 py-6 px-8 shadow-md">
//         <div className="flex justify-between items-center max-w-6xl mx-auto">
//           <h1 className="text-3xl font-bold text-gray-900">[Your Name]</h1>
//           <nav className="space-x-4">
//             <a href="#about" className="text-gray-600 hover:text-blue-600">אודות</a>
//             <a href="#skills" className="text-gray-600 hover:text-blue-600">מיומנויות</a>
//             <a href="#projects" className="text-gray-600 hover:text-blue-600">פרויקטים</a>
//             <a href="#contact" className="text-gray-600 hover:text-blue-600">צור קשר</a>
//           </nav>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-blue-500 to-teal-400 text-white py-24 text-center">
//         <h2 className="text-5xl font-bold mb-6">שלום, אני [Your Name]</h2>
//         <p className="text-xl mb-8">מפתח Fullstack עם תשוקה לפתרונות חדשניים</p>
//         <a
//           href="#contact"
//           className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-medium shadow hover:bg-blue-100 transition"
//         >
//           צור קשר
//         </a>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-16 px-8 bg-gray-50">
//         <h2 className="text-4xl font-semibold text-center mb-6">אודותיי</h2>
//         <p className="text-lg max-w-4xl mx-auto text-center">
//           אני מפתח Fullstack עם ניסיון בעיצוב ופיתוח מערכות תוכנה מתקדמות. אשמח לעבוד על פרויקטים מאתגרים ולהביא ערך באמצעות טכנולוגיה.
//         </p>
//       </section>

//       {/* Skills Section */}
//       <section id="skills" className="bg-white py-16 px-8">
//         <h2 className="text-4xl font-semibold text-center mb-8">מיומנויות</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
//           {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'TailwindCSS', 'Git'].map((skill, index) => (
//             <div
//               key={index}
//               className="bg-gray-100 text-center py-6 rounded-lg shadow hover:shadow-lg transition"
//             >
//               <h3 className="text-xl font-medium text-gray-800">{skill}</h3>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="py-16 px-8 bg-gray-100">
//         <h2 className="text-4xl font-semibold text-center mb-8">פרויקטים</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-2xl font-semibold mb-2">פרויקט ראשון</h3>
//             <p className="text-gray-600 mb-4">תיאור קצר של הפרויקט והטכנולוגיות שבהן השתמשת.</p>
//             <a
//               href="https://github.com"
//               className="text-blue-500 hover:underline"
//             >
//               קישור לפרויקט
//             </a>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-2xl font-semibold mb-2">פרויקט שני</h3>
//             <p className="text-gray-600 mb-4">תיאור קצר של פרויקט נוסף והאתגרים בו.</p>
//             <a
//               href="https://github.com"
//               className="text-blue-500 hover:underline"
//             >
//               קישור לפרויקט
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="bg-gradient-to-r from-teal-500 to-blue-500 text-white py-16 px-8">
//         <h2 className="text-4xl font-semibold text-center mb-8">צור קשר</h2>
//         <form className="max-w-lg mx-auto space-y-6">
//           <input
//             type="text"
//             placeholder="שם מלא"
//             className="w-full p-4 rounded-lg bg-gray-200 text-gray-800 focus:ring-2 focus:ring-blue-400"
//           />
//           <input
//             type="email"
//             placeholder="כתובת אימייל"
//             className="w-full p-4 rounded-lg bg-gray-200 text-gray-800 focus:ring-2 focus:ring-blue-400"
//           />
//           <textarea
//             placeholder="הודעה"
//             rows="4"
//             className="w-full p-4 rounded-lg bg-gray-200 text-gray-800 focus:ring-2 focus:ring-blue-400"
//           ></textarea>
//           <button
//             type="submit"
//             className="w-full py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100"
//           >
//             שלח הודעה
//           </button>
//         </form>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-6">
//         <div className="flex justify-center space-x-6">
//           <a href="https://github.com" target="_blank" rel="noopener noreferrer">
//             <FaGithub size={24} />
//           </a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//             <FaLinkedin size={24} />
//           </a>
//           <a href="mailto:your-email@example.com">
//             <FaEnvelope size={24} />
//           </a>
//         </div>
//         <p className="text-center mt-4">&copy; 2025 [Your Name]. כל הזכויות שמורות.</p>
//       </footer>
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import './App.css'; // צור קובץ עיצוב עם TailwindCSS
// import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// function App() {
//   return (
//     <div className="bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800 font-sans antialiased">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-teal-400 to-blue-500 text-white py-32 text-center">
//         <h1 className="text-6xl font-bold mb-6">שלום, אני [Your Name]</h1>
//         <p className="text-xl md:text-2xl mb-8">מפתח Fullstack | אוהב לפתור בעיות</p>
//         <a
//           href="#contact"
//           className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition transform hover:scale-105"
//         >
//           צור קשר
//         </a>
//       </section>

//       {/* About Section */}
//       <section className="py-24 px-8 text-center bg-white">
//         <h2 className="text-4xl font-bold mb-6 text-teal-500">אודותיי</h2>
//         <p className="text-lg max-w-3xl mx-auto">
//           אני מפתח Fullstack עם תשוקה ליצירת חוויות דיגיטליות חדשניות ואפקטיביות. אני מחפש לעבוד בסביבות דינמיות המשלבות טכנולוגיה ויצירתיות.
//         </p>
//       </section>

//       {/* Skills Section */}
//       <section className="bg-gray-100 py-24 px-8">
//         <h2 className="text-4xl font-bold text-center text-blue-500 mb-12">מיומנויות</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto">
//           <div className="p-6 rounded-lg shadow-lg bg-gradient-to-br from-green-400 to-teal-400 text-white text-center">
//             <h3 className="text-2xl font-semibold">HTML</h3>
//           </div>
//           <div className="p-6 rounded-lg shadow-lg bg-gradient-to-br from-blue-400 to-indigo-400 text-white text-center">
//             <h3 className="text-2xl font-semibold">CSS</h3>
//           </div>
//           <div className="p-6 rounded-lg shadow-lg bg-gradient-to-br from-yellow-400 to-orange-400 text-white text-center">
//             <h3 className="text-2xl font-semibold">JavaScript</h3>
//           </div>
//           <div className="p-6 rounded-lg shadow-lg bg-gradient-to-br from-purple-400 to-pink-400 text-white text-center">
//             <h3 className="text-2xl font-semibold">React</h3>
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section className="py-24 px-8 bg-gray-50">
//         <h2 className="text-4xl font-bold text-center text-teal-500 mb-12">פרויקטים</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition">
//             <h3 className="text-2xl font-semibold mb-4 text-blue-500">פרויקט 1</h3>
//             <p className="text-lg text-gray-700">
//               פרויקט יצירתי שבו פיתחתי מערכת לניהול נתונים.
//             </p>
//             <a
//               href="https://github.com"
//               className="text-teal-500 hover:underline mt-4 block"
//             >
//               צפה בפרויקט
//             </a>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition">
//             <h3 className="text-2xl font-semibold mb-4 text-blue-500">פרויקט 2</h3>
//             <p className="text-lg text-gray-700">
//               פרויקט שבו יצרתי ממשק משתמש אינטראקטיבי ומותאם אישית.
//             </p>
//             <a
//               href="https://github.com"
//               className="text-teal-500 hover:underline mt-4 block"
//             >
//               צפה בפרויקט
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-24 px-8">
//         <h2 className="text-4xl font-bold text-center mb-12">צור קשר</h2>
//         <form className="max-w-3xl mx-auto space-y-6">
//           <input
//             type="text"
//             placeholder="שם"
//             className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
//           />
//           <input
//             type="email"
//             placeholder="אימייל"
//             className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
//           />
//           <textarea
//             placeholder="הודעה"
//             rows="6"
//             className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
//           ></textarea>
//           <button
//             type="submit"
//             className="bg-white text-teal-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition transform hover:scale-105"
//           >
//             שלח
//           </button>
//         </form>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-8">
//         <div className="flex justify-center space-x-6">
//           <a href="https://github.com" target="_blank" rel="noopener noreferrer">
//             <FaGithub size={30} />
//           </a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//             <FaLinkedin size={30} />
//           </a>
//           <a href="mailto:your-email@example.com">
//             <FaEnvelope size={30} />
//           </a>
//         </div>
//         <p className="text-center mt-6">&copy; 2025 [Your Name]. כל הזכויות שמורות.</p>
//       </footer>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function App() {
  return (
    <div className="bg-gradient-to-b from-pink-100 to-purple-200 text-gray-800 font-sans antialiased">
  {/* Hero Section */}
  <section className="bg-gradient-to-r from-purple-700 via-pink-500 to-red-400 text-white py-32 text-center">
    <h1 className="text-6xl font-extrabold mb-6">
      שלום, אני [Your Name]
    </h1>
    <p className="text-2xl md:text-3xl font-light mb-8">
      מפתח Fullstack | בונה חוויות דיגיטליות
    </p>
    <a
      href="#contact"
      className="bg-yellow-300 text-purple-800 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-400 hover:shadow-2xl transition transform hover:scale-110"
    >
      צור קשר עכשיו
    </a>
  </section>

  {/* About Section */}
  <section className="py-24 px-8 bg-gradient-to-br from-yellow-200 to-orange-100">
    <h2 className="text-4xl font-bold mb-6 text-pink-600 text-center">
      אודותיי
    </h2>
    <p className="text-lg max-w-3xl mx-auto text-center text-gray-700">
      אני מפתח תוכנה נלהב עם תשוקה לחדשנות ויצירתיות. אוהב להתמודד עם אתגרים
      ולהציע פתרונות יעילים ומעוצבים.
    </p>
  </section>

      {/* Skills Section */}
      <section className="bg-gradient-to-b from-yellow-100 to-orange-200 py-24 px-8">
        <h2 className="text-4xl font-bold text-center text-indigo-600 mb-12">
          מיומנויות
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto">
          <div className="p-6 rounded-lg shadow-lg bg-gradient-to-br from-red-400 to-pink-400 text-white text-center transform hover:scale-105 transition">
            <h3 className="text-2xl font-semibold">HTML</h3>
          </div>
          <div className="p-6 rounded-lg shadow-lg bg-gradient-to-br from-blue-400 to-indigo-400 text-white text-center transform hover:scale-105 transition">
            <h3 className="text-2xl font-semibold">CSS</h3>
          </div>
          <div className="p-6 rounded-lg shadow-lg bg-gradient-to-br from-yellow-400 to-orange-400 text-white text-center transform hover:scale-105 transition">
            <h3 className="text-2xl font-semibold">JavaScript</h3>
          </div>
          <div className="p-6 rounded-lg shadow-lg bg-gradient-to-br from-purple-400 to-blue-500 text-white text-center transform hover:scale-105 transition">
            <h3 className="text-2xl font-semibold">React</h3>
          </div>
          
        </div>
      </section>
    {/* Skills Section */}
    <section id="skills" className="bg-white py-16 px-8">
        <h2 className="text-4xl font-semibold text-center mb-8">מיומנויות</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'TailwindCSS', 'Git'].map((skill, index) => (
            <div
              key={index}
              className="bg-gray-100 text-center py-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-medium text-gray-800">{skill}</h3>
            </div>
          ))}
        </div>
      </section>
      <div className="bg-gradient-to-b from-pink-100 to-purple-200 text-gray-800 font-sans antialiased">
  {/* Hero Section */}
  <section className="bg-gradient-to-r from-purple-700 via-pink-500 to-red-400 text-white py-32 text-center">
    <h1 className="text-6xl font-extrabold mb-6">
      שלום, אני [Your Name]
    </h1>
    <p className="text-2xl md:text-3xl font-light mb-8">
      מפתח Fullstack | בונה חוויות דיגיטליות
    </p>
    <a
      href="#contact"
      className="bg-yellow-300 text-purple-800 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-400 hover:shadow-2xl transition transform hover:scale-110"
    >
      צור קשר עכשיו
    </a>
  </section>

  {/* About Section */}
  <section className="py-24 px-8 bg-gradient-to-br from-yellow-200 to-orange-100">
    <h2 className="text-4xl font-bold mb-6 text-pink-600 text-center">
      מיומנויות טכניות
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {[
        { title: "React", description: "פיתוח ממשקי משתמש אינטראקטיביים", color: "bg-gradient-to-r from-blue-400 to-green-400" },
        { title: "Node.js", description: "פיתוח צד שרת עם JavaScript", color: "bg-gradient-to-r from-yellow-300 to-orange-500" },
        { title: "Tailwind CSS", description: "עיצוב מהיר ומתקדם עם CSS", color: "bg-gradient-to-r from-purple-400 to-pink-400" },
        { title: "MongoDB", description: "ניהול בסיסי נתונים NoSQL", color: "bg-gradient-to-r from-green-400 to-blue-600" },
        { title: "TypeScript", description: "שימוש ב-TypeScript לכתיבת קוד בטוח", color: "bg-gradient-to-r from-indigo-400 to-blue-500" },
        { title: "Git", description: "ניהול גרסאות ושיתוף פעולה בצוותים", color: "bg-gradient-to-r from-red-400 to-yellow-500" },
      ].map((skill, index) => (
        <div
          key={index}
          className={`p-6 rounded-lg shadow-md text-white ${skill.color}`}
        >
          <h3 className="text-2xl font-semibold mb-4">{skill.title}</h3>
          <p className="text-lg">{skill.description}</p>
        </div>
      ))}
    </div>
  </section>
</div>

      {/* Projects Section */}
      <section className="py-24 px-8 bg-white">
        <h2 className="text-4xl font-bold text-center text-pink-500 mb-12">
          פרויקטים
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-4">פרויקט 1</h3>
            <p className="text-lg">
              מערכת לניהול מידע, עם ממשק משתמש יעיל ופונקציונלי.
            </p>
            <a
              href="https://github.com"
              className="text-yellow-300 hover:underline mt-4 block"
            >
              צפה בפרויקט
            </a>
          </div>
          <div className="bg-gradient-to-r from-pink-500 to-orange-500 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-4">פרויקט 2</h3>
            <p className="text-lg">
              פיתוח אתר אינטראקטיבי ומותאם לכל המכשירים.
            </p>
            <a
              href="https://github.com"
              className="text-yellow-300 hover:underline mt-4 block"
            >
              צפה בפרויקט
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white py-24 px-8"
      >
        <h2 className="text-4xl font-bold text-center mb-12">צור קשר</h2>
        <form className="max-w-3xl mx-auto space-y-6">
          <input
            type="text"
            placeholder="שם"
            className="w-full p-4 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            placeholder="אימייל"
            className="w-full p-4 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            placeholder="הודעה"
            rows="6"
            className="w-full p-4 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-400 text-purple-800 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-500 transition transform hover:scale-105"
          >
            שלח
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="flex justify-center space-x-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="mailto:your-email@example.com">
            <FaEnvelope size={30} />
          </a>
        </div>
        <p className="text-center mt-6">
          &copy; 2025 [Your Name]. כל הזכויות שמורות.
        </p>
      </footer>
    </div>
  );
}

export default App;
