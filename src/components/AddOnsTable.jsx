import { Check } from "lucide-react";
import { useEffect, useState } from "react";

export default function AutomationPlans() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const plans = [
    { name: "Basic Automation", price: "$19 /mo", desc: "Perfect for small trades" },
    { name: "Growth Automation", price: "$39 /mo", desc: "For growing businesses" },
    { name: "Pro Automation", price: "$79 /mo", desc: "Full automation suite" },
  ];

  const features = [
    { name: "AI Chatbot (messages/month)", available: ["200–300", "1,000", "3,000+"] },
    { name: "FAQ + Lead Capture (Email/WhatsApp)", available: [true, true, true] },
    { name: "Appointment Booking (Site Visits, Meetings)", available: [false, true, true] },
    { name: "Monthly Usage Report", available: [false, true, true] },
    { name: "WhatsApp + Website + Facebook Integration", available: [false, false, true] },
    { name: "Follow-up Reminders & Multilingual Support", available: [false, false, true] },
  ];

  const container = {
    backgroundColor: "black",
    color: "white",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
  };

  const wrapper = {
    maxWidth: "1000px",
    width: "100%",
  };

  const grid = isMobile
    ? { display: "flex", flexDirection: "column", gap: "1rem" }
    : {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: "1rem",
      };

  const planBox = {
    backgroundColor: "#111",
    borderRadius: "12px",
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minWidth: isMobile ? "100%" : "auto",
  };

  const featureCol = {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    color: "#aaa",
    textAlign: isMobile ? "center" : "left",
    marginTop: "11.5pc",
    fontSize: "13px"
  };

  const featureCell = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "24px",
  };

  return (
    <div style={container}>
      <div style={wrapper}>
        <h2 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "2rem", textAlign: "center" }}>
          Compare Automation Plans
        </h2>

        <div style={grid}>
          {/* Feature names */}
          {!isMobile && (
            <div style={featureCol}>
              {features.map((feature, idx) => (
                <div key={idx}>{feature.name}</div>
              ))}
            </div>
          )}

          {/* Plans */}
          {plans.map((plan, idx) => (
            <div key={idx} style={planBox}>
              <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                <h3 style={{ fontSize: "18px", fontWeight: "600" }}>{plan.name}</h3>
                <p style={{ fontSize: "20px", fontWeight: "bold", margin: "0.3rem 0" }}>{plan.price}</p>
                <p style={{ fontSize: "14px", color: "#aaa" }}>{plan.desc}</p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {features.map((feature, fIdx) => (
                  <div key={fIdx} style={featureCell}>
                    {isMobile ? (
                      <span style={{ marginRight: "8px", flex: 1 }}>{feature.name}</span>
                    ) : null}

                    {typeof feature.available[idx] === "boolean" ? (
                      feature.available[idx] ? (
                        <Check color="limegreen" size={20} />
                      ) : (
                        <span style={{ color: "#555" }}>—</span>
                      )
                    ) : (
                      <span>{feature.available[idx]}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
