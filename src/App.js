import React from 'react';
import './App.css';
import profileImage from './profile.jpg'; // Make sure this import is still correct

function App() {
  return (
    <div className="container">
      <img src={profileImage} alt="Your Profile" className="profile-image" />
      <h1>Nikhil Basapurapu</h1>
      <p className="subtitle">Network Engineer</p>
      <p className="summary">
        CCNA Certified professional with 8+ years of experience in network
        design, implementation, and support. Proficient in routing, switching,
        Cisco ISE, ACI, and SDWAN. Expert in troubleshooting complex network
        systems and leading large-scale migrations.
      </p>

      <div className="buttons">
        <a href="https://www.linkedin.com/in/nikhil-reddy-basapurapu-952727148/" target="_blank" rel="noopener noreferrer">
          <button>LinkedIn</button>
        </a>
        <a href="https://github.com/nikhil-network/nikhil-network.github.io" target="_blank" rel="noopener noreferrer">
          <button>GitHub</button>
        </a>
        <a href="https://docs.google.com/document/d/1vCqGUcOVQNxkhuNsaPN9ZQ7winSLvNpA/edit?usp=sharing&ouid=103359850409965114873&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer"> {/* Replace with your actual resume link */}
          <button>Resume</button>
        </a>
      </div>

      <h2>About Me</h2>
      <p>  A highly skilled and CCNA Certified Network Engineer with 8+ years of
        experience in designing, implementing, and supporting complex network
        infrastructures. Expertise in routing, switching, Cisco ISE, ACI, SDWAN,
        firewall technologies, and load balancer systems. Proven ability to
        troubleshoot critical network issues, lead large-scale migrations, and
        drive product strategy with a focus on delivering efficient and effective
        network solutions.</p>

        <h2>Skills</h2>
      <div className="skills-grid">
        <div>
          <h3>Routing & Switching</h3>
          <ul>
            <li>OSPF,BGP,EIGRP,VLANs,STP</li>
            <li>Cisco Routers/Switches (4331, Nexus)</li>
          </ul>
        </div>
        <div>
          <h3>SDWAN</h3>
          <ul>
            <li>Aruba SilverPeak</li>
          </ul>
        </div>
        <div>
          <h3>Security</h3>
          <ul>
            <li>Cisco ISE</li>
            <li>AAA/TACACS+</li>
            <li>Firewalls (Fortinet, Cisco ASA)</li>
            <li>ACLs</li>
          </ul>
        </div>
        <div>
          <h3>Other</h3>
          <ul>
            <li>LAN Technologies</li>
            <li>VoIP</li>
            <li>Microsoft Office</li>
            <li>Visio</li>
          </ul>
        </div>
      </div>

      <h2>Experience</h2>
      <div className="experience-item">
        <h3>Network Engineer III | Thermofisher Sciences | Nov 2022 - Present</h3>
        <ul>
          <li>Designed and deployed ISE with high availability.</li>
          <li>Migrated sites to Aruba SDWAN.</li>
          <li>Configured ISE NAC services (Guest, BYOD, Profiling).</li>
          <li>Developed a template to migrate 10,000+ switches to ISE.</li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Sr. Network Engineer | ExxonMobil | Oct 2017 – Oct 2022</h3>
        <ul>
          <li>Designed, configured, and managed complex global network.</li>
          <li>Migrated ACS to Cisco ISE.</li>
          <li>Migrated 1000+ sites to ISE.</li>
          <li>Created EAP-TLS and MAB policies.</li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Network Engineer | Comerica, Inc. | June 2016 – Sep 2017</h3>
        <ul>
          <li>Managed network device health and stability (NOC).</li>
          <li>Troubleshooting and root cause analysis.</li>
          <li>Upgraded and troubleshoot switching/routing issues.</li>
          <li>Created firewall rules.</li>
        </ul>
      </div>

      <h2>Resume</h2>
      <a href="YOUR_RESUME_URL" className="resume-button" target="_blank" rel="noopener noreferrer">
        Download Resume
      </a>
    </div>
  );
}
export default App;