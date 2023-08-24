import React, { useState } from "react";
import AdvanceTable from "./AdvanceTable";
import AdvanceTableWrapper from "./AdvanceTableWrapper";
import { Button, Card, Placeholder, Table } from "react-bootstrap";
import UnsolvedTicketsHeader from "./UnsolvedTicketsHeader";
import { columns, CardLayout } from "./TicketsLayout";
import PropTypes from "prop-types";
import useBulkSelect from "@hooks/useBulkSelect";
import usePagination from "@hooks/usePagination";
import Flex from "@components/common/Flex";

const UnsolvedTickets = ({ data }) => {
  const [layout, setLayout] = useState("tableView");
  const ticketIds = data.map((ticket) => ticket.id);
  const { selectedItems, isSelectedItem, toggleSelectedItem } =
    useBulkSelect(ticketIds);
  const [tickets] = useState(data.slice(0, 12));
  const [primaryTickets, setPrimaryTickets] = useState(tickets);
  const {
    paginationState: {
      data: paginatedTicket,
      totalItems,
      canNextPage,
      canPreviousPage,
      from,
      to,
    },
    nextPage,
    prevPage,
  } = usePagination(primaryTickets, 6);

  const thElements = Array.from({ length: 5 }, (_, index) => (
    <th key={index}>
      <Placeholder as="p" animation="glow" className="">
        <Placeholder xs={7} />
      </Placeholder>
    </th>
  ));

  const tbaleRows = Array.from({ length: 3 }).map((_, index) => (
    <tr key={index}>{thElements}</tr>
  ));
  return (
    <AdvanceTableWrapper
      columns={columns}
      data={paginatedTicket.length ? paginatedTicket : primaryTickets}
      selection
      selectionColumnWidth={52}
      sortable
    >
      <Card>
        <Card.Header className="border-bottom border-200 px-0">
          {/* <UnsolvedTicketsHeader
            table
            setLayout={setLayout}
            layout={layout}
            selectedItems={selectedItems}
            handleTicketsSearch={handleTicketsSearch}
          /> */}

          <div className="row justify-content-between container-fluid">
            <div className="col-8">
              <Placeholder as="p" animation="glow">
                <Placeholder xs={2} />
                <Placeholder xs={3} className="ms-2" />
              </Placeholder>
            </div>
            <div className="col-4">
              <Placeholder as="p" animation="glow" className="">
                <Placeholder xs={2} />
                <Placeholder xs={2} className="ms-2" />
                <Placeholder xs={2} className="ms-2" />
                <Placeholder xs={2} className="ms-2" />
              </Placeholder>
            </div>
          </div>
        </Card.Header>
        {layout === "tableView" ? (
          <div>
            <Card.Body className="p-0">
              <div className="table-responsive scrollbar">
                <Table>
                  <thead className="bg-light text-800 align-middle">
                    <tr>{thElements}</tr>
                  </thead>
                  <tbody>{tbaleRows}</tbody>
                </Table>
              </div>
            </Card.Body>
            <Card.Footer className="d-flex container-fluid align-items-center justify-content-between">
              <Placeholder as="p" animation="glow" className='row' >
                <Placeholder xs={12} className="ms-3"/>
              </Placeholder>
              <Flex>
                <Placeholder as="p" animation="glow">
                  <Placeholder.Button xs={2} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder.Button
                    variant="primary"
                    xs={12}
                    className="ms-2"
                  />
                </Placeholder>
              </Flex>
            </Card.Footer>
          </div>
        ) : (
          <Card.Body className="bg-light">
            <CardLayout
              data={paginatedTicket}
              isSelectedItem={isSelectedItem}
              toggleSelectedItem={toggleSelectedItem}
            />
          </Card.Body>
        )}
      </Card>
    </AdvanceTableWrapper>
  );
};

UnsolvedTickets.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default UnsolvedTickets;
