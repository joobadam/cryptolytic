export default function AboutUsSection() {
  return (
    <div className="container mx-auto px-6 py-16 " id="about">
      <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
        About Us
      </h2>
      <div className="flex flex-wrap justify-center items-center text-center glass py-10">
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <h3 className="text-xl font-semibold gradient-text">Our Mission</h3>
          <p>
            At{" "}
            <span className="font-bold uppercase text-violet-500">
              cryptolytic
            </span>
            , our mission is clear: to revolutionize the way people engage with
            cryptocurrencies. We are committed to providing accessible,
            innovative, and secure solutions that empower individuals to
            navigate the complex world of digital assets with confidence.
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <h3 className="text-xl font-semibold gradient-text">Our Story</h3>
          <p>
            Our journey began in 2018, driven by a shared passion for technology
            and finance. Since then, we have embarked on a mission to
            democratize access to crypto markets, starting with [Specific
            Initiative or Milestone]. Today, we proudly stand as a beacon of
            innovation and trust in the crypto community.
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4 ">
          <h3 className="text-xl font-semibold gradient-text">Our Culture</h3>
          <p>
            At{" "}
            <span className="font-bold uppercase text-violet-500">
              cryptolytic
            </span>
            , our culture is the cornerstone of everything we do. We foster a
            dynamic and inclusive environment that celebrates diversity,
            encourages collaboration, and values integrity. Together, we strive
            for excellence, embrace challenges, and push boundaries to shape the
            future of finance.
          </p>
        </div>
      </div>
    </div>
  );
}
