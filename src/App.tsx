import React from 'react';

type CourseResult = {
  subject: string;
  catalogNbr: 2110;
  title: string;
  description: string;
  credits: string;
  offered: string;
  requisites: string;
  distribution: string;
  instructors: string;
  grading: string;
};

function App() {
  const courseResults: CourseResult[] = [
    {
      subject: 'CS',
      catalogNbr: 2110,
      title: 'Object-Oriented Programming and Data Structures',
      description:
        'Intermediate programming in a high-level language and introduction to computer science. Topics include object-oriented programming (classes, objects, subclasses, types), graphical user interfaces, algorithm analysis (asymptotic complexity, big "O" notation), recursion, testing, program correctness (loop invariants), searching/sorting, data structures (lists, trees, stacks, queues, heaps, search trees, hash tables, graphs), graph algorithms. Java is the principal programming language.',
      credits: '3',
      offered: 'Fall, Spring, Summer',
      requisites:
        'Prerequisite: CS 1110 or CS 1112 or equivalent course on programming in a procedural language.      ',
      distribution: '(MQR-AS, SMR-AS)',
      instructors: 'David Gries',
      grading: 'Letter or S/U grades (OPT)',
    },
  ];

  return (
    <div className="main">
      <div className="px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
        <div className="hero">
          <div className="hero-headline flex flex-col items-center justify-center pt-24 text-center">
            <h1 className="logo font-bold text-3xl text-gray-900">
              Pathfinder
            </h1>
            <p className="font-base text-base text-gray-600">
              Find courses at Cornell simply by searching exactly what you want
            </p>
          </div>

          <div className="box pt-6">
            <div className="box-wrapper">
              <div className=" bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
                <button className="outline-none focus:outline-none">
                  <svg
                    className=" w-5 text-gray-600 h-5 cursor-pointer"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="3 credit programming course taught by Gries that fulfills MRQ requirement"
                  x-model="q"
                  className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
                />
                <div className="select">
                  <select
                    name=""
                    id=""
                    x-model="image_type"
                    className="text-sm outline-none focus:outline-none bg-transparent"
                  >
                    <option value="all" selected>
                      FA21
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          {courseResults.map((course) => (
            <div className="mt-4">
              <div className="w-full lg:max-w-full lg:flex">
                <div className="w-full border shadow-md bg-white rounded-md p-4 flex flex-col justify-between leading-normal">
                  <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2 title cursor-pointer">
                      {course.subject} {course.catalogNbr}: {course.title}
                    </div>
                    <p className="text-gray-700 text-base">
                      {course.description}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm leading-tight">
                    <p className="text-gray-900">
                      <span className="font-bold">Co/Prerequisites:</span>{' '}
                      {course.requisites}
                    </p>
                    <p className="text-gray-900">
                      <span className="font-bold">Credits:</span>{' '}
                      {course.credits}
                    </p>
                    <p className="text-gray-900">
                      <span className="font-bold">Offered In:</span>{' '}
                      {course.offered}
                    </p>
                    <p className="text-gray-900">
                      <span className="font-bold">Distribution:</span>{' '}
                      {course.distribution}
                    </p>
                    <p className="text-gray-900">
                      <span className="font-bold">Instructors:</span>{' '}
                      {course.instructors}
                    </p>
                    <p className="text-gray-900">
                      <span className="font-bold">Grading:</span>{' '}
                      {course.grading}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <footer className="p-5 text-sm text-gray-600 text-center inline-flex items-center">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="heart"
            className="svg-inline--fa fa-heart fa-w-16 text-red-600 w-4 h-4 mr-4 align-middle"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
            ></path>
          </svg>
          <span>
            Made with love.{' '}
            <a
              href="https://tailwindcss.com/"
              target="_new"
              className="text-teal-600 font-semibold logo"
            >
              Follow Han on Twitter
            </a>{' '}
          </span>
        </footer>
      </div>
    </div>
  );
}

export default App;
