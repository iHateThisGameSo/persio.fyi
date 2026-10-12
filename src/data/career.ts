export interface CareerEntry {
  id: string;
  period: string;
  kind: 'Work' | 'Education' | 'Certification';
  organization: string;
  title: string;
  description: string;
  logo?: string;
}

// Dates come from the owner's October 2026 CV and direct biographical corrections.
export const career: CareerEntry[] = [
  { id: 'exchange', period: '1995–1996', kind: 'Education', organization: 'Chinle, Arizona', title: 'English exchange', description: 'An English-language exchange in Chinle, Arizona.' },
  { id: 'puc', period: '1997', kind: 'Education', organization: 'PUC-SP', title: 'Computer Science · first year', description: 'Completed the first year of Computer Science at Pontifícia Universidade Católica de São Paulo. This was one year of study, not a completed degree.', logo: '/logos/puc-sp.png' },
  { id: 'mandic', period: 'Jul 1998–Sep 1999', kind: 'Work', organization: 'Mandic Internet', title: 'Technical Support Analyst', description: 'Technical support and dial-up access administration. My professional starting point at Mandic, an internet provider with roots in the BBS era.', logo: '/logos/mandic.jpg' },
  { id: 'mackenzie', period: '1999–2005', kind: 'Education', organization: 'Universidade Presbiteriana Mackenzie', title: 'Bachelor of Business Administration', description: 'Business Administration studies alongside the early years of my technical career.', logo: '/logos/mackenzie.jpg' },
  { id: 'impsat', period: 'Sep 1999–Oct 2001', kind: 'Work', organization: 'Impsat Telecomunicações', title: 'Network Administrator', description: 'Backbone network administration and Level 3 support during on-call shifts.', logo: '/logos/impsat.png' },
  { id: 'ccna-ccnp', period: 'Sep–Dec 2001', kind: 'Certification', organization: 'Cisco', title: 'CCNA and CCNP Routing and Switching', description: 'CCNA achieved on 19 September, followed by CCNP on 19 December. Both credentials are now expired in retired tracks.', logo: '/logos/cisco.jpg' },
  { id: 'telefonica', period: 'Oct 2001–Jan 2002', kind: 'Work', organization: 'Telefônica Empresas', title: 'Network Specialist', description: 'A network specialist role between backbone operations at Impsat and network projects at UOL.', logo: '/logos/telefonica.svg' },
  { id: 'uol', period: 'Jan 2002–Mar 2005', kind: 'Work', organization: 'Universo Online · UOL', title: 'Project Analyst', description: 'Broadband network projects, equipment testing and approval, and quality assurance for broadband and dial-up access networks.', logo: '/logos/uol.jpg' },
  { id: 'multirede', period: 'Mar 2005–Jun 2006', kind: 'Work', organization: 'Multirede Informática', title: 'Project Analyst and Cisco Instructor', description: 'Network and security project analysis, alongside professional Cisco instruction.', logo: '/logos/multirede.jpg' },
  { id: 'verizon-operations', period: 'Jun 2006–Nov 2008', kind: 'Work', organization: 'Verizon Business', title: 'Senior Engineer · Level 2 Operations Team Lead', description: 'Led network operations support across WAN, MAN, LAN, and extranet environments. Root cause analysis and outage reports were part of the delivery.', logo: '/logos/verizon.jpg' },
  { id: 'ccip', period: '2006–2007', kind: 'Certification', organization: 'Cisco', title: 'Content networking and service-provider routing', description: 'Cisco Content Networking Specialist in November 2006, followed by CCIP in November 2007. Both credentials are now expired in retired tracks.', logo: '/logos/cisco.jpg' },
  { id: 'ccie', period: '19 Sep 2008', kind: 'Certification', organization: 'Cisco', title: 'CCIE #22112', description: 'The start date of my CCIE record. Today the certification is Enterprise Infrastructure, active through 4 May 2029.', logo: '/logos/cisco.jpg' },
  { id: 'verizon-delivery', period: 'Nov 2008–Dec 2009', kind: 'Work', organization: 'Verizon Business', title: 'Senior Network Engineer · Managed Services Delivery', description: 'Network integration for managed-services customers, with BASH scripting for network reconnaissance and deployment.', logo: '/logos/verizon.jpg' },
  { id: 'neovia', period: 'Dec 2009–May 2011', kind: 'Work', organization: 'Neovia Telecom', title: 'Manager · Network Engineering, IT and Infrastructure', description: 'Led a team developing a residential access network, and managed infrastructure budgets and vendor relationships.', logo: '/logos/neovia.jpg' },
  { id: 'universal', period: 'May 2011–Jan 2012', kind: 'Work', organization: 'Universal Telecom', title: 'Manager · Network Engineering', description: 'IP backbone and access-network maintenance and support, alongside financial-market connectivity and exchange networks.', logo: '/logos/universal.jpg' },
  { id: 'layer2', period: 'Mar 2012–Apr 2013', kind: 'Work', organization: 'Layer2 Network Consulting · assigned to Cisco Systems', title: 'Network Consulting Engineer · contractor', description: 'Enterprise network assessments and recommendations for network performance and security. The assignment was to Cisco’s Network Assessment Report team.', logo: '/logos/cisco.jpg' },
  { id: 'cisco-engineer', period: 'Apr 2013–Dec 2021', kind: 'Work', organization: 'Cisco Systems', title: 'High Touch Engineer', description: 'Proactive and reactive engineering for banks and telecom providers, troubleshooting complex networks and coordinating critical escalations with TAC and HTTS.', logo: '/logos/cisco.jpg' },
  { id: 'cisco-leader', period: 'Nov 2021–Feb 2024', kind: 'Work', organization: 'Cisco Systems', title: 'High Touch Engineer Technical Leader · Customer Experience', description: 'Technical leadership across critical incidents, customer projects, and network changes, coordinating engineers and teams around the resolution.', logo: '/logos/cisco.jpg' },
  { id: 'palo-alto', period: 'Nov 2024–Jul 2026', kind: 'Work', organization: 'Palo Alto Networks', title: 'Customer Success Engineer · contractor', description: 'Prisma Access SASE customer adoption, knowledge transfer, deployment, and ongoing use of security services, including CASB and Enterprise DLP.', logo: '/logos/palo-alto.jpg' },
  { id: 'independent', period: 'Aug 2026–present', kind: 'Work', organization: 'Independent practice', title: 'Developer and consultant', description: 'I define problems and direct AI agents through software delivery, while retaining priorities and acceptance judgment. The work spans websites, automation, agent tooling, self-hosted infrastructure, and consulting on project risk and control.' },
];

export interface Certification {
  name: string;
  abbreviation: string;
  status: 'Active' | 'Expired';
  start: string;
  expires: string;
  logo?: string;
}

// Owner-provided Cisco certification tracking export, 12 October 2026.
export const certifications: Certification[] = [
  { name: 'CCIE Certification — Enterprise Infrastructure', abbreviation: 'CCIE-Enterprise Infrastructure', status: 'Active', start: '2008-09-19', expires: '2029-05-04' },
  { name: 'Cisco Certified Specialist — Enterprise Core', abbreviation: 'CCS-ECore', status: 'Active', start: '2008-09-19', expires: '2029-05-04', logo: '/certifications/enterprise-core.png' },
  { name: 'Cisco Lifecycle Services for Advanced Wireless LAN', abbreviation: 'CLCSAWL', status: 'Expired', start: '2008-10-07', expires: '2010-10-07' },
  { name: 'Cisco Advanced Wireless Field Specialist', abbreviation: 'CS-CAWLANFS', status: 'Expired', start: '2008-10-07', expires: '2016-09-19' },
  { name: 'Cisco Lifecycle Services Advanced Security', abbreviation: 'CLCSAS', status: 'Expired', start: '2008-07-30', expires: '2010-07-30' },
  { name: 'CCSP', abbreviation: 'CCSP', status: 'Expired', start: '2008-07-30', expires: '2014-09-19' },
  { name: 'Cisco Network Admission Control Specialist', abbreviation: 'CNACS', status: 'Expired', start: '2008-07-30', expires: '2016-09-19' },
  { name: 'Cisco Firewall Specialist', abbreviation: 'CS-CFWS', status: 'Expired', start: '2008-07-29', expires: '2010-09-19' },
  { name: 'Cisco Information Security Specialist', abbreviation: 'CS-CISecS', status: 'Expired', start: '2008-07-29', expires: '2010-09-19' },
  { name: 'Cisco IOS Security Specialist', abbreviation: 'CIOSSS', status: 'Expired', start: '2008-07-29', expires: '2016-09-19' },
  { name: 'Advanced Routing and Switching Field Engineer Representative', abbreviation: 'CH-ARASFER', status: 'Expired', start: '2008-04-22', expires: '2016-09-19' },
  { name: 'Cisco Routing and Switching Field Specialist', abbreviation: 'CS-CRSFS', status: 'Expired', start: '2008-04-22', expires: '2016-09-19' },
  { name: 'Cisco Lifecycle Services Advanced Routing and Switching', abbreviation: 'CLCSARS', status: 'Expired', start: '2008-04-02', expires: '2010-04-02' },
  { name: 'CCIP (Cisco Certified Internetwork Professional)', abbreviation: 'CCIP', status: 'Expired', start: '2007-11-07', expires: '2015-08-10' },
  { name: 'Cisco Content Networking Specialist', abbreviation: 'CS-CCNS', status: 'Expired', start: '2006-11-30', expires: '2008-11-30' },
  { name: 'CCNP Routing and Switching', abbreviation: 'CCNP', status: 'Expired', start: '2001-12-19', expires: '2016-10-03' },
  { name: 'CCNA Routing and Switching', abbreviation: 'CCNA-RS', status: 'Expired', start: '2001-09-19', expires: '2016-10-03' },
];
