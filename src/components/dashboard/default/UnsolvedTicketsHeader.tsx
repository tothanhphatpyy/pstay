import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconButton from '@components/common/IconButton';
import React from 'react';
import {
  Button,
  Col,
  Dropdown,
  Form,
  FormControl,
  InputGroup,
  Row
} from 'react-bootstrap';
import PropTypes from 'prop-types';

const UnsolvedTicketsHeader = ({
  selectedRowIds,
  setLayout,
  layout,
  selectedItems,
  handleTicketsSearch
}) => {
  return (
    <div className="d-lg-flex justify-content-between">
      <Row className="flex-between-center gy-2 px-x1">
        <Col xs="auto" className="pe-0">
          <h6 className="mb-0">Unsolved Tickets</h6>
        </Col>
        <Col xs="auto">
          <InputGroup className="position-relative input-search-width">
            <FormControl
              size="sm"
              id="search"
              type="search"
              className="shadow-none"
              placeholder="Search by name"
              onChange={e => handleTicketsSearch(e.target.value)}
            />
            <Button
              size="sm"
              variant="outline-secondary"
              className="border-300 hover-border-secondary"
            >
              <FontAwesomeIcon icon="search" className="fs--1" />
            </Button>
          </InputGroup>
        </Col>
      </Row>
      <div className="border-bottom border-200 my-3"></div>
      <div className="d-flex align-items-center justify-content-between justify-content-lg-end px-x1">
        <IconButton
          variant="digibird-default"
          size="sm"
          icon="filter"
          transform="shrink-4"
          iconAlign="middle"
        >
          <span className="d-none d-sm-inline-block ms-1">Filter</span>
        </IconButton>
        <div
          className="bg-300 mx-3 d-none d-lg-block"
          style={{ width: '1px', height: '29px' }}
        ></div>
        {Object.keys(selectedRowIds).length > 0 || selectedItems.length > 0 ? (
          <div className="d-flex">
            <Form.Select size="sm" aria-label="Bulk actions">
              <option>Bulk Actions</option>
              <option value="refund">Refund</option>
              <option value="delete">Delete</option>
              <option value="archive">Archive</option>
            </Form.Select>
            <Button
              type="button"
              variant="digibird-default"
              size="sm"
              className="ms-2"
            >
              Apply
            </Button>
          </div>
        ) : (
          <div id="orders-actions">
            <Dropdown
              align="end"
              className="btn-reveal-trigger d-inline-block me-2"
            >
              <Dropdown.Toggle split variant="digibird-default" size="sm">
                <span className="d-none d-sm-inline-block d-xl-none d-xxl-inline-block me-1">
                  {layout === 'tableView' ? 'Table view' : 'Card view'}
                </span>
                <FontAwesomeIcon icon="chevron-down" transform="shrink-2" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="border py-0">
                <div className="py-2">
                  <Dropdown.Item
                    active={layout === 'tableView'}
                    className="dropdown-item text-900 py-1"
                    onClick={() => setLayout('tableView')}
                  >
                    Table View
                  </Dropdown.Item>
                  <Dropdown.Item
                    active={layout === 'cardView'}
                    className="dropdown-item text-900 py-1"
                    onClick={() => setLayout('cardView')}
                  >
                    Card View
                  </Dropdown.Item>
                </div>
              </Dropdown.Menu>
            </Dropdown>
            <IconButton
              variant="digibird-default"
              size="sm"
              icon="plus"
              transform="shrink-3"
              iconAlign="middle"
            >
              <span className="d-none d-sm-inline-block d-xl-none d-xxl-inline-block ms-1">
                New
              </span>
            </IconButton>
            <IconButton
              variant="digibird-default"
              size="sm"
              icon="external-link-alt"
              transform="shrink-3"
              className="mx-2"
              iconAlign="middle"
            >
              <span className="d-none d-sm-inline-block d-xl-none d-xxl-inline-block ms-1">
                Export
              </span>
            </IconButton>
            <Dropdown align="end" className="btn-reveal-trigger d-inline-block">
              <Dropdown.Toggle variant="digibird-default" size="sm">
                <FontAwesomeIcon icon="ellipsis-h" className="fs--2" />
              </Dropdown.Toggle>

              <Dropdown.Menu className="border py-0">
                <div className="py-2">
                  <Dropdown.Item as="button" type="button">
                    View
                  </Dropdown.Item>
                  <Dropdown.Item>Export</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item className="text-danger">Remove</Dropdown.Item>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        )}
      </div>
    </div>
  );
};

UnsolvedTicketsHeader.propTypes = {
  selectedRowIds: PropTypes.object,
  layout: PropTypes.string,
  setLayout: PropTypes.func,
  selectedItems: PropTypes.array,
  handleTicketsSearch: PropTypes.func
};

export default UnsolvedTicketsHeader;
