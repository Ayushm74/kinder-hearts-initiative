
import { SearchIcon, ChevronRight, ChevronLeft } from "lucide-react";

const storiesData = [
  {
    id: 1,
    name: "Mia Johnson",
    age: 8,
    condition: "Down Syndrome",
    story: "Mia's journey with EmpowerKind began when she was 4. Through specialized education programs and therapy, she's now thriving in school and has developed a love for painting.",
    image: "https://images.unsplash.com/photo-1601288496920-b6154fe3626a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 2,
    name: "Elijah Williams",
    age: 12,
    condition: "Autism",
    story: "When Elijah joined our program, he struggled with social interactions. Today, he's made incredible progress through music therapy and is performing in school concerts.",
    image: "https://images.unsplash.com/photo-1518826778770-a729fb53c5c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
  },
  {
    id: 3,
    name: "Sophia Martinez",
    age: 7,
    condition: "Cerebral Palsy",
    story: "Sophia received her first specialized wheelchair through EmpowerKind. She's now participating in adaptive sports and recently won a medal in a children's wheelchair race.",
    image: "https://images.unsplash.com/photo-1560233987-59677222fe94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
  },
  {
    id: 4,
    name: "Lucas Thompson",
    age: 10,
    condition: "Hearing Impairment",
    story: "Lucas received hearing aids and sign language training through our program. His communication skills have improved dramatically, and he's now teaching sign language to his classmates.",
    image: "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 5,
    name: "Emma Davis",
    age: 9,
    condition: "Visual Impairment",
    story: "Emma joined our reading program and received braille learning materials. She's now an avid reader and has been recognized for her academic achievements.",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
  },
  {
    id: 6,
    name: "Ethan Brown",
    age: 11,
    condition: "ADHD",
    story: "Through our support program, Ethan received specialized educational assistance and coaching. His academic performance has improved significantly, and he's discovered a talent for science.",
    image: "https://images.unsplash.com/photo-1595956553066-fe24a8c33395?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
  }
];

const Stories = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-empowerkind-coral text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h1>
          <p className="text-xl md:text-2xl mb-8 text-white/80">
            Meet the incredible children whose lives have been transformed through your support.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search stories"
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:border-empowerkind-purple"
              />
              <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Filter by:</span>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-empowerkind-purple">
                <option value="">All conditions</option>
                <option value="autism">Autism</option>
                <option value="down">Down Syndrome</option>
                <option value="cerebral">Cerebral Palsy</option>
                <option value="visual">Visual Impairment</option>
                <option value="hearing">Hearing Impairment</option>
                <option value="adhd">ADHD</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-empowerkind-purple">
                <option value="">All ages</option>
                <option value="0-5">0-5 years</option>
                <option value="6-10">6-10 years</option>
                <option value="11-15">11-15 years</option>
                <option value="16+">16+ years</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="section-container pt-8">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg card-shadow">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <img
                src={storiesData[0].image}
                alt={storiesData[0].name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden flex items-end">
                <div className="p-6 text-white">
                  <h2 className="text-2xl font-bold">{storiesData[0].name}</h2>
                  <p>{storiesData[0].age} years old | {storiesData[0].condition}</p>
                </div>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="text-sm text-empowerkind-coral font-semibold uppercase tracking-wider mb-3">Featured Story</span>
              <h2 className="text-3xl font-bold text-gray-800 mb-2 hidden md:block">{storiesData[0].name}</h2>
              <p className="text-gray-600 mb-3 hidden md:block">{storiesData[0].age} years old | {storiesData[0].condition}</p>
              <p className="text-gray-700 mb-6 text-lg">
                {storiesData[0].story}
              </p>
              <p className="text-gray-700 mb-6">
                With the help of our specialized education programs and dedicated therapists, Mia has made incredible progress in her motor skills and cognitive development. Her parents share that she now eagerly participates in school activities and has developed close friendships with her classmates.
              </p>
              <p className="text-gray-700">
                "EmpowerKind has been a blessing for our family. The support we've received has transformed Mia's life and given us hope for her future." - Susan Johnson, Mia's mother
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {storiesData.slice(1).map((story) => (
            <div key={story.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-56 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{story.name}</h3>
                <p className="text-empowerkind-coral mb-3">{story.age} years old | {story.condition}</p>
                <p className="text-gray-600 mb-4">{story.story}</p>
                <a href="#" className="text-empowerkind-purple font-medium hover:text-empowerkind-darkPurple inline-flex items-center">
                  Read full story
                  <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pagination */}
      <section className="section-container pb-16">
        <div className="flex justify-center">
          <nav className="flex items-center space-x-2">
            <a
              href="#"
              className="px-3 py-2 rounded-md text-gray-500 hover:text-empowerkind-purple hover:bg-empowerkind-lightPurple flex items-center"
            >
              <ChevronLeft size={16} className="mr-1" />
              Previous
            </a>
            <a
              href="#"
              className="px-4 py-2 rounded-md bg-empowerkind-purple text-white"
            >
              1
            </a>
            <a
              href="#"
              className="px-4 py-2 rounded-md text-gray-700 hover:bg-empowerkind-lightPurple"
            >
              2
            </a>
            <a
              href="#"
              className="px-4 py-2 rounded-md text-gray-700 hover:bg-empowerkind-lightPurple"
            >
              3
            </a>
            <span className="px-3 py-2">...</span>
            <a
              href="#"
              className="px-4 py-2 rounded-md text-gray-700 hover:bg-empowerkind-lightPurple"
            >
              8
            </a>
            <a
              href="#"
              className="px-3 py-2 rounded-md text-gray-500 hover:text-empowerkind-purple hover:bg-empowerkind-lightPurple flex items-center"
            >
              Next
              <ChevronRight size={16} className="ml-1" />
            </a>
          </nav>
        </div>
      </section>

      {/* Share Your Story */}
      <section className="bg-empowerkind-lightPurple py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-empowerkind-darkPurple mb-6">Share Your Story</h2>
          <p className="text-gray-700 text-lg mb-8">
            Has EmpowerKind made a difference in your child's life? We'd love to hear about it and potentially feature your story.
          </p>
          <a
            href="#"
            className="bg-empowerkind-purple hover:bg-empowerkind-darkPurple text-white font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg inline-block"
          >
            Submit Your Story
          </a>
        </div>
      </section>
    </>
  );
};

export default Stories;
