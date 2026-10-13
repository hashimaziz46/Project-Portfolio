import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';

const ExperienceSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${theme.colors.textLight};
  padding: ${theme.spacing.lg} 0;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} 0;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: calc(${theme.spacing.xl} * 1.5);
  color: ${theme.colors.light};
  position: relative;

  @media (min-width: ${theme.breakpoints.md}) {
    margin-bottom: calc(${theme.spacing.xl} * 2);
  }

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
`;

const RoleList = styled(motion.ol)`
  list-style: none;
  display: grid;
  gap: ${theme.spacing.lg};
  width: 100%;
  margin-top: ${theme.spacing.lg};

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.xl};
    margin-top: ${theme.spacing.xl};
  }
`;

const Role = styled(motion.li)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: ${theme.spacing.lg};
  transition: box-shadow ${theme.transitions.default};

  @media (min-width: ${theme.breakpoints.md}) {
    display: grid;
    grid-template-columns: 150px 1fr;
    column-gap: ${theme.spacing.lg};
    padding: ${theme.spacing.xl};
  }

  &:hover {
    box-shadow: 0 15px 35px rgba(246, 177, 122, 0.15);
  }
`;

/*
 * Timeline column. On desktop each marker's rail runs past the bottom of its card
 * (card padding + list gap + next card's padding) to meet the next marker's dot,
 * so the dots read as one continuous timeline while the cards keep the section's edges.
 */
const Marker = styled.div<{ current: boolean; last: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.sm};
  color: ${theme.colors.accent};
  font-size: 0.9rem;
  font-weight: 500;

  &::before {
    content: '';
    flex-shrink: 0;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: ${props => props.current ? theme.colors.accent : theme.colors.primary};
    border: 2px solid ${theme.colors.accent};
    box-shadow: ${props => props.current ? `0 0 0 5px ${theme.colors.accent}30` : 'none'};
    position: relative;
    z-index: 1;
  }

  span + span::before {
    content: '– ';
  }

  @media (min-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
    margin-bottom: 0;
    padding-left: calc(14px + ${theme.spacing.md});

    &::before {
      position: absolute;
      left: 0;
      top: 4px;
    }

    &::after {
      content: '';
      display: ${props => props.last ? 'none' : 'block'};
      position: absolute;
      left: 6px;
      top: 18px;
      bottom: calc(-3 * ${theme.spacing.xl});
      width: 2px;
      background: ${theme.colors.accent}50;
    }

    span + span::before {
      content: none;
    }

    span:last-of-type {
      opacity: 0.7;
    }
  }
`;

const RoleBody = styled.div`
  min-width: 0;
`;

const RoleTitle = styled.h3`
  font-size: clamp(1.2rem, 3vw, 1.4rem);
  color: ${theme.colors.light};
  margin-bottom: ${theme.spacing.md};

  span {
    display: block;
    font-family: ${theme.fonts.body};
    font-size: 1rem;
    font-weight: 500;
    color: ${theme.colors.textLight};
    opacity: 0.85;
  }
`;

const Achievements = styled.ul`
  margin-left: 1.1rem;
  font-size: clamp(0.9rem, 2vw, 1rem);
  line-height: 1.6;
  opacity: 0.9;

  li {
    margin-bottom: ${theme.spacing.xs};
  }

  li::marker {
    color: ${theme.colors.accent};
  }
`;

const roles = [
  {
    title: 'Global Project Manager',
    company: 'Geeks Ltd',
    start: 'Oct 2025',
    end: 'Present',
    achievements: [
      'Run solution design workshops that turn client business requirements into Agile roadmaps, supporting projects worth over $500K in revenue',
      'Manage a portfolio of 18 concurrent projects, covering delivery, change requests and ongoing maintenance',
      'Mentor development teams: 4% higher operational efficiency, 8% better milestone achievement and 3% fewer defects',
      'Set up weekly delivery governance sessions that improved risk visibility, with average CSAT above 80%',
      'Designed a standard project offboarding framework that raised operational efficiency by 5%',
    ],
  },
  {
    title: 'Project Manager',
    company: 'CareCloud',
    start: 'Mar 2025',
    end: 'May 2026',
    achievements: [
      'Owned backlog prioritisation and roadmap planning, including migrating deliverables into JIRA for on-time sprints',
      'Oversaw SOX audits, vendor risk assessments and compliance processes with zero delays',
      'Built resource allocation models and tracking systems that improved team efficiency by at least 20% and cut errors by 80%',
      'Acted as backup PMO and introduced quality-check frameworks to protect high-priority delivery timelines',
    ],
  },
  {
    title: 'Project Manager',
    company: 'Gitstart',
    start: 'Feb 2023',
    end: 'Feb 2025',
    achievements: [
      'Managed several teams of 10+ members in parallel, delivering projects on time and within scope',
      'Wrote detailed specification documents that improved cost and time estimates and reduced overruns',
      'Broke user stories into actionable tasks, improving sprint efficiency by at least 21%',
      'Mentored 10+ junior engineers, raising development velocity by 17%',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Gitstart',
    start: 'Mar 2022',
    end: 'Feb 2025',
    achievements: [
      'Built and maintained applications with React Native, React.js, Next.js, TypeScript and Nest.js, backed by MongoDB and PostgreSQL',
      'Integrated GitHub repositories and set up CI/CD pipelines for automated deployments',
      'Implemented over 100 telematics solutions for a client, improving data tracking and analysis',
      'Recommended and implemented infrastructure updates that improved performance and code quality',
      'Ran code reviews and QA checks, and wrote test suites to raise coverage and catch issues early',
    ],
  },
  {
    title: 'Website Developer & Manager',
    company: 'Safeway Renewable Energy (Pvt) Ltd.',
    start: 'May 2021',
    end: 'Oct 2021',
    achievements: [
      'Maintained website content and uptime, and acted on customer feedback',
      'Ran regular security checks, reducing vulnerabilities by 8%',
    ],
  },
];

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <ExperienceSection id="experience" aria-label="Professional Experience">
      <div className="container">
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </SectionTitle>
        <RoleList
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {roles.map((role, index) => (
            <Role key={`${role.company}-${role.start}`} variants={itemVariants}>
              <Marker current={role.end === 'Present'} last={index === roles.length - 1}>
                <span>{role.start}</span>
                <span>{role.end}</span>
              </Marker>
              <RoleBody>
                <RoleTitle>
                  {role.title}
                  <span>{role.company}</span>
                </RoleTitle>
                <Achievements>
                  {role.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </Achievements>
              </RoleBody>
            </Role>
          ))}
        </RoleList>
      </div>
    </ExperienceSection>
  );
};

export default Experience;
