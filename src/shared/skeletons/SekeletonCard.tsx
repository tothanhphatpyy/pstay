import React from 'react';
import { Button, Card, Placeholder } from 'react-bootstrap';
import PageHeader from '@components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DigiBirdComponentCard from '@components/common/DigiBirdComponentCard';
import { reactBootstrapDocsUrl } from '@helpers/utils';
import generic1 from '@assets/img/generic/1.jpg';
import Flex from '@components/common/Flex';

const SekeletonCard = () => (
  <>
    <Card className="h-md-100">
        <Card.Header className="pb-0">
        <Placeholder as="p" animation="glow">
            <Placeholder xs={4} />
          </Placeholder>
        </Card.Header>

        <Card.Body as={Flex} alignItems="end" justifyContent="between">
          <div className="w-25">
            <Placeholder as="p" animation="glow">
              <Placeholder xs={12} size="lg" />
            </Placeholder>
            <div>
              <Placeholder as="p" animation="glow">
                <Placeholder xs={12} />
              </Placeholder>
            </div>
          </div>

          <div style={{ width: width || "11.5rem", height: 80 }}>
            <Placeholder animation="glow">
              <Placeholder xs={12} className="h-100" />
            </Placeholder>
          </div>
        </Card.Body>
      </Card>
  </>
);

export default SekeletonCard;
