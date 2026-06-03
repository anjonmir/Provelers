import {
  FaMapMarkedAlt,
  FaUsers,
  FaRoute,
  FaTrophy,
} from "react-icons/fa";

function FeatureSection() {
  const features = [
    {
      icon: <FaMapMarkedAlt />,
      title: "Smart Map",
      description:
        "Explore destinations and hidden gems across Bangladesh.",
    },
    {
      icon: <FaUsers />,
      title: "Travel Community",
      description:
        "Ask questions and connect with experienced travelers.",
    },
    {
      icon: <FaRoute />,
      title: "Trip Planning",
      description:
        "Create and organize your travel experiences.",
    },
    {
      icon: <FaTrophy />,
      title: "Explorer Rank",
      description:
        "Earn points, badges and compete with travelers.",
    },
  ];

  return (
    <section className="landing-section">
      <div className="container">
        <div className="section-title">
          <h2>Everything You Need</h2>

          <p>
            Built for modern travelers.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass-card feature-card"
            >
              <div className="feature-icon">
                {feature.icon}
              </div>

              <h4>{feature.title}</h4>

              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;