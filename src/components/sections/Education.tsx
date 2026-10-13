import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { FaGraduationCap, FaAward } from 'react-icons/fa';

const EducationSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${theme.colors.textLight};
  padding: ${theme.spacing.xl} 0;

  @media (min-width: ${theme.breakpoints.md}) {
    min-height: 80vh;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: calc(${theme.spacing.xl} * 1.5);
  color: ${theme.colors.light};
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
`;

const DegreeGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr));
  gap: ${theme.spacing.lg};
  max-width: 1000px;
  margin: 0 auto;
`;

const DegreeCard = styled(motion.article)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: ${theme.spacing.lg};
  transition: all ${theme.transitions.default};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(246, 177, 122, 0.15);
  }
`;

const DegreeTitle = styled.h3`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing.sm};
  font-size: clamp(1.2rem, 3vw, 1.4rem);
  color: ${theme.colors.light};
  margin-bottom: ${theme.spacing.xs};

  svg {
    flex-shrink: 0;
    margin-top: 0.2em;
    color: ${theme.colors.accent};
  }
`;

const DegreeMeta = styled.p`
  font-size: 0.95rem;
  opacity: 0.85;
  margin-bottom: ${theme.spacing.md};

  strong {
    color: ${theme.colors.accent};
    font-weight: 600;
  }
`;

const Honours = styled.ul`
  list-style: none;

  li {
    display: flex;
    gap: ${theme.spacing.sm};
    font-size: clamp(0.9rem, 2vw, 1rem);
    line-height: 1.6;
    margin-bottom: ${theme.spacing.xs};
    opacity: 0.9;
  }

  svg {
    flex-shrink: 0;
    margin-top: 0.3em;
    color: ${theme.colors.accent};
  }
`;

const degrees = [
  {
    degree: 'Masters in Project Management',
    institution: 'COMSATS University, Pakistan',
    period: 'Mar 2023 – Mar 2025',
    grade: 'CGPA 3.96 / 4.0',
    honours: [
      'Graduated top of the class, Summa cum laude',
      'Merit Scholarship awarded by the university for academic excellence',
    ],
  },
  {
    degree: 'Bachelor of Software Engineering',
    institution: 'COMSATS University, Pakistan',
    period: 'Mar 2018 – Mar 2022',
    grade: 'CGPA 3.57 / 4.0',
    honours: [
      'Gold Medal for 1st position in the batch',
      'Fully funded Merit Scholarship from the Government of Pakistan',
    ],
  },
];

const Education = () => {
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
    <EducationSection id="education" aria-label="Education">
      <div className="container">
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </SectionTitle>
        <DegreeGrid
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {degrees.map((item) => (
            <DegreeCard key={item.degree} variants={itemVariants}>
              <DegreeTitle>
                <FaGraduationCap aria-hidden="true" />
                {item.degree}
              </DegreeTitle>
              <DegreeMeta>
                {item.institution} · {item.period} · <strong>{item.grade}</strong>
              </DegreeMeta>
              <Honours>
                {item.honours.map((honour) => (
                  <li key={honour}>
                    <FaAward aria-hidden="true" />
                    {honour}
                  </li>
                ))}
              </Honours>
            </DegreeCard>
          ))}
        </DegreeGrid>
      </div>
    </EducationSection>
  );
};

export default Education;
