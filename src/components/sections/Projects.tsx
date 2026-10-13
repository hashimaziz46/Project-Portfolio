import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { FaUsers, FaClock, FaChartLine } from 'react-icons/fa';

const ProjectsSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: ${theme.spacing.lg} 0;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} 0;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: calc(${theme.spacing.xl} * 1.5);
  color: ${theme.colors.textLight};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -${theme.spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${theme.colors.accent};
    border-radius: 2px;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    margin-bottom: calc(${theme.spacing.xl} * 2);
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr));
  gap: ${theme.spacing.lg};
  width: 100%;
  margin-top: ${theme.spacing.lg};

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.xl};
    margin-top: ${theme.spacing.xl};
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 12px;
  overflow: hidden;
  color: ${theme.colors.textLight};
  transition: all ${theme.transitions.default};
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(246, 177, 122, 0.15);
  }
`;

const ProjectMeta = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
  margin-bottom: ${theme.spacing.md};
  font-size: 0.85rem;
  opacity: 0.85;

  li {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  svg {
    color: ${theme.colors.accent};
  }
`;

const Highlights = styled.ul`
  margin: 0 0 ${theme.spacing.lg} 1.1rem;
  font-size: clamp(0.85rem, 2vw, 0.95rem);
  line-height: 1.6;
  flex: 1;
  opacity: 0.9;

  li {
    margin-bottom: ${theme.spacing.xs};
  }

  li::marker {
    color: ${theme.colors.accent};
  }
`;

const ProjectContent = styled.div`
  padding: ${theme.spacing.md};
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.lg};
  }
`;

const ProjectTitle = styled.h3`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: clamp(1.6rem, 3.5vw, 2rem);
  line-height: 1.2;
  margin-bottom: ${theme.spacing.md};
  padding-bottom: ${theme.spacing.md};
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  color: ${theme.colors.light};
  font-weight: 600;

  span {
    display: block;
    margin-top: ${theme.spacing.xs};
    font-family: ${theme.fonts.body};
    font-size: clamp(0.9rem, 2vw, 1rem);
    font-weight: 500;
    color: ${theme.colors.textLight};
    opacity: 0.8;
  }

  /* Fixed header height (fits a two-line name plus subtitle) so every card's header matches */
  @media (min-width: ${theme.breakpoints.md}) {
    min-height: 8rem;
  }
`;

const ProjectDescription = styled.p`
  color: ${theme.colors.textLight};
  margin-bottom: ${theme.spacing.md};
  font-size: clamp(0.9rem, 2vw, 1rem);
  line-height: 1.6;
  opacity: 0.9;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.xs};
  margin-top: auto;

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.sm};
  }
`;

const TechTag = styled.span`
  background: ${theme.colors.glass.card};
  color: ${theme.colors.accent};
  padding: 4px 10px;
  border-radius: 20px;
  font-size: clamp(0.75rem, 2vw, 0.85rem);
  font-weight: 500;
  transition: all ${theme.transitions.default};

  @media (min-width: ${theme.breakpoints.md}) {
    padding: 6px 12px;
  }

  &:hover {
    background: ${theme.colors.gradient.accent};
    color: ${theme.colors.textDark};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(246, 177, 122, 0.2);
  }
`;

const projects = [
  {
    id: 1,
    name: 'Search Acumen',
    subtitle: 'AI-Powered Land Registry Processing',
    description:
      'Designed and delivered an AI document-processing system using OCR and LLMs (OpenAI GPT-4, later migrated to Claude) to read and analyse land registry documents from 145 land authorities.',
    team: '10-member team',
    duration: '6-month engagement',
    revenue: '$660K revenue',
    highlights: [
      'Cut processing time from about 2 hours to under 15 minutes per document (87% reduction)',
      '80% improvement in processing throughput across all 145 land authorities',
      'AI-assisted QA process reduced reported issues by 75%',
      'Handed over in full after the client was acquired, with zero delays',
    ],
    tags: ['AI / LLM', 'OCR', 'Conveyancing'],
  },
  {
    id: 2,
    name: 'Toyota Financial Services',
    subtitle: 'Leasing Automation',
    description:
      "Led a 60-person distributed team (20 onshore in the US, 40 offshore) to automate core workflows for Toyota Financial Services' leasing department.",
    team: '60-member team',
    duration: 'Cross-border delivery',
    revenue: '$4.15M est. quarterly revenue',
    highlights: [
      'Automated invoicing with dynamic tax rates: 80% fewer errors, 60% faster processing',
      'Automated 6 categories of lease correspondence, 30%+ more efficient',
      'Set up a QA function: 70% faster error detection, 23% fewer incidents',
      "Won 1st place in TFS's inter-departmental competition with zero incidents over 6 months",
    ],
    tags: ['Automation', 'Financial Services', 'QA'],
  },
  {
    id: 3,
    name: 'SOMOS',
    subtitle: 'Invoice & Billing Automation',
    description:
      'Managed the full 6-month post-acquisition transition of SOMOS infrastructure, from parallel running to complete internal ownership, with no operational disruption.',
    team: '30-member team',
    duration: '6-month transition',
    revenue: '$3.7M quarterly revenue',
    highlights: [
      'Automated invoice generation for a 20% gain in billing efficiency',
      'Built a QA department from scratch, cutting billing errors by 5%',
      'Owned quarterly business reviews with C-suite and VP stakeholders',
    ],
    tags: ['Billing', 'Transition Management', 'QA Setup'],
  },
  {
    id: 4,
    name: 'Shippeo',
    subtitle: 'Telematics Integration',
    description:
      'Led the backend integration of real-time telematics data, including live driver tracking and shipment location, for a fleet logistics platform.',
    team: '19-member team',
    duration: 'Agile 2-week sprints',
    revenue: '$1.2M revenue',
    highlights: [
      'Delivered 2,500 telematics units to production a month ahead of the 11-month deadline',
      'Kept a risk register to catch API-mapping and data-format issues before they hit sprints',
      'Shared tracking dashboard cut status-query response time by 15%',
    ],
    tags: ['Logistics', 'Integrations', 'Real-time Data'],
  },
  {
    id: 5,
    name: 'Drata',
    subtitle: 'UI Component Migration',
    description:
      'Led a full-codebase migration of 50+ UI components to custom Drata components, using a phased rollout to keep deployment continuous.',
    team: '20-member team',
    duration: 'Agile 2-week sprints',
    revenue: '$840K revenue',
    highlights: [
      'End users reported a 20% increase in application speed after migration',
      'Centralised issue logging saved about 4 hours of investigation per incident',
      'Structured QA templates increased testing throughput by 5%',
    ],
    tags: ['Frontend', 'Migration', 'Code Quality'],
  },
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <ProjectsSection id="projects" role="region" aria-label="Featured Projects">
      <div className="container">
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          role="heading"
          aria-level={2}
        >
          Featured Projects
        </SectionTitle>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ProjectGrid role="list">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              variants={itemVariants}
              role="listitem"
              aria-labelledby={`project-title-${project.id}`}
            >
              <ProjectContent>
                <ProjectTitle id={`project-title-${project.id}`}>
                  {project.name}
                  <span>{project.subtitle}</span>
                </ProjectTitle>
                <ProjectMeta aria-label="Project facts">
                  <li><FaUsers aria-hidden="true" />{project.team}</li>
                  <li><FaClock aria-hidden="true" />{project.duration}</li>
                  <li><FaChartLine aria-hidden="true" />{project.revenue}</li>
                </ProjectMeta>
                <ProjectDescription>{project.description}</ProjectDescription>
                <Highlights aria-label={`Key results for ${project.name}`}>
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </Highlights>
                <TechStack role="list" aria-label={`Focus areas for ${project.name}`}>
                  {project.tags.map((tag) => (
                    <TechTag key={tag} role="listitem">{tag}</TechTag>
                  ))}
                </TechStack>
              </ProjectContent>
            </ProjectCard>
          ))}
          </ProjectGrid>
        </motion.div>
      </div>
    </ProjectsSection>
  );
};

export default Projects;
