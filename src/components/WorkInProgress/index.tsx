import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import TitleSection from 'components/ui/TitleSection';
import { SectionTitle } from 'helpers/definitions';

import * as Styled from './styles';

interface WorkInProgress extends SectionTitle {}

const WorkInProgress: React.FC = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "wip section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
    }
  `);

  const workInProgress: SectionTitle = markdownRemark.frontmatter;

  return (
    <Styled.WorkInProgress>
      <Container section>
        <TitleSection title={workInProgress.title} subtitle={workInProgress.subtitle} center />
      </Container>
    </Styled.WorkInProgress>
  );
};

export default WorkInProgress;
