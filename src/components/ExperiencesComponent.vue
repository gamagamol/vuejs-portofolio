<!-- @format -->

<script setup>
const data = [
  {
    position: 'Fullstack Software Engineer',
    company: 'PT Sigma Cipta Caraka (Telkom Group)',
    description:
      'Built and maintained supporting applications for a data center company, including ITSM and bidding applications. Worked as a full-stack engineer, handling both frontend and backend development. Responsible for gathering requirements, development, deployment, and testing to ensure system reliability and performance',
    year_start: 'Feb 2023 ',
    year_end: 'Present',
    skills: [
      'HTML',
      'CSS',
      'TailWind CSS',
      'JavaScript',
      'Vue Js',
      'PHP',
      'Golang',
      'NodeJS',
      'Laravel',
      'Express JS',
      'Docker',
      'Fiber',
      'Python',
      'Airflow',
      'Kafka',
      'MySQL',
      'MongoDB',
      'Redis',
      'System Architecture',
      'Cloud Engineer',
      'AWS',
      'Alibaba Cloud',
      'Postman',
      'Api',
      'Microservice',
    ],
  },
  {
    position: 'Junior Backend Engineer',
    company: 'Ayoconnect',
    description:
      'Led the development, testing, and ongoing maintenance efforts of the payment gateway platform which integrated with GCP, MySQL and Apiegee,GO, ensuring its reliability, security, and performance.Created comprehensive integration testing reports using Postman for individual bank partners, serving as vital references for integration development application',
    year_start: 'Nov 2022',
    year_end: 'Feb 2023',
    skills: ['Golang', 'Postman', 'Api', 'MySQL', 'GCP', 'System Architecture', 'Microservice', 'Cloud Engineer'],
  },
  {
    position: 'Full Stack Software Developer',
    company: 'Bandung Tecno Park (Telkom Group)',
    description:
      'Crafted administrative and financial systems application to make data-driven decisions by providing real-time insights into tuition fees, enrollment data, budget allocations, and employee records, resulting in 70% reduction of processing time and improved transparency across the university.Orchestrated end-to-end testing for application features, ensuring seamless functionality, while concurrently spearheading database design initiatives for optimal performance and scalability.',
    year_start: 'Jul 2022',
    year_end: 'Feb 2023',
    skills: ['HTML', 'CSS', 'Bootstrap CSS', 'JavaScript', 'PHP', 'Laravel', 'MySQL', 'System Architecture', 'Postman', 'Api', 'Oracle'],
  },
  {
    position: 'Full Stack Software Developer and Database Engineer',
    company: 'Telkom Education Foundation ( Telkom Group)',
    description:
      'Iniate and Manage a dashboard system within an application accessed by thousands of users, including teachers, students, and the foundation, to track the development of students under the foundation using PHP, Bootstrap , and Oracle database. ● Supporting the creation of a custom administrative system and financial dashboard to assist the financial team in decision-making and real-time tracking of financial movements.',
    year_start: 'March 2022',
    year_end: 'August 2022 ',
    skills: ['HTML', 'CSS', 'Bootstrap CSS', 'JavaScript', 'PHP', 'Laravel', 'MySQL', 'System Architecture', 'Postman', 'Api', 'Oracle'],
  },
];
</script>

<template>
  <section class="h-screen w-full flex items-center justify-center snap-start" id="experiences">
    <div class="flex flex-row gap-6 w-full h-full p-8 mt-16 justify-center text-white">
      <div class="w-1/4 text-center flex flex-col items-center justify-center">
        <h1 class="font-bold text-5xl lg:text-7xl text-white ml-5">Experiences</h1>
      </div>
      <div class="w-full max-h-screen overflow-y-auto">
        <div class="min-h-full" v-for="(d, i) in data" :key="i">
          <div class="flex flex-col lg:flex-row gap-6 w-full p-8 items-start justify-start text-white">
            <div class="w-full lg:w-1/4 flex flex-col justify-start">
              <h1 class="font-bold text-xl">{{ d.year_start }} - {{ d.year_end }}</h1>
            </div>

            <div class="flex flex-col w-full h-full">
              <h1 class="font-bold text-2xl text-center mt-6">{{ d.position }} | {{ d.company }}</h1>
              <p>
                {{ d.description }}
              </p>

              <div class="flex flex-wrap justify-start gap-2 mt-4 text-center">
                <p class="bg-primary-opacity40 p-2 border-1 rounded-full" v-for="(s, j) in d.skills" :key="j">{{ s }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
