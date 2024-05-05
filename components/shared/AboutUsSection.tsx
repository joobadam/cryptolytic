

export default function AboutUsSection() {
    return (
      <div className="container mx-auto px-6 py-16" id="about">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">About Us</h2>
        <div className="flex flex-wrap justify-center items-center text-center glass">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <h3 className="text-xl font-semibold gradient-text">Our Mission</h3>
            <p >To empower crypto traders with real-time data and comprehensive tools for informed trading decisions.</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <h3 className="text-xl font-semibold gradient-text">Our Story</h3>
            <p >Founded in 2018, we have grown rapidly to become a leader in crypto trading insights and analytics.</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4 ">
            <h3 className="text-xl font-semibold gradient-text">Our Culture</h3>
            <p>We thrive on innovation, teamwork, and the relentless pursuit of excellence.</p>
          </div>
        </div>
      </div>
    );
  }
  