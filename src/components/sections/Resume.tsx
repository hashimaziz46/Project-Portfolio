import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { FaDownload, FaExternalLinkAlt, FaFilePdf } from 'react-icons/fa';
import { profile } from '../../data/profile';

const ResumeSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${theme.colors.textLight};
  padding: ${theme.spacing.xl} 0;
`;

const ResumeCard = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: ${theme.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.lg};
  text-align: center;
  box-shadow: 0 8px 32px rgba(246, 177, 122, 0.15);

  @media (min-width: ${theme.breakpoints.md}) {
    flex-direction: row;
    text-align: left;
    padding: ${theme.spacing.xl};
  }

  > svg {
    flex-shrink: 0;
    font-size: 3.5rem;
    color: ${theme.colors.accent};
  }
`;

const ResumeText = styled.div`
  flex: 1;

  h2 {
    font-size: clamp(1.5rem, 3vw, 2rem);
    color: ${theme.colors.light};
    margin-bottom: ${theme.spacing.xs};
  }

  p {
    opacity: 0.85;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${theme.spacing.sm};
`;

const ResumeButton = styled(motion.a, {
  shouldForwardProp: (prop) => prop !== 'variant',
})<{ variant?: 'primary' | 'secondary' }>`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border-radius: 30px;
  font-weight: 600;
  white-space: nowrap;
  border: 1px solid ${theme.colors.accent};
  transition: all ${theme.transitions.default};
  background: ${props => props.variant === 'secondary' ? theme.colors.glass.card : theme.colors.gradient.accent};
  color: ${props => props.variant === 'secondary' ? theme.colors.accent : theme.colors.textDark};

  &:hover {
    box-shadow: 0 6px 16px rgba(246, 177, 122, 0.3);
  }
`;

const Resume = () => (
  <ResumeSection id="resume" aria-label="Resume">
    <div className="container">
      <ResumeCard
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <FaFilePdf aria-hidden="true" />
        <ResumeText>
          <h2>Resume</h2>
          <p>My full work history, education and achievements in one PDF.</p>
        </ResumeText>
        <Actions>
          <ResumeButton
            href={profile.resume}
            download="Hashim-Aziz-Resume.pdf"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload aria-hidden="true" />
            Download
          </ResumeButton>
          <ResumeButton
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="View resume in a new tab"
          >
            <FaExternalLinkAlt aria-hidden="true" />
            View
          </ResumeButton>
        </Actions>
      </ResumeCard>
    </div>
  </ResumeSection>
);

export default Resume;
