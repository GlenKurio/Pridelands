import styled from "styled-components";
import { devices } from "./layout/Queries";

const STable = styled.table`
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;

  @media ${devices.tablet} {
    border: 0;
  }
`;
const Caption = styled.caption`
  font-size: 1.5rem;
  margin: 0.5em 0 0.75em;
  font-family: inherit;
  font-weight: 700;
  @media ${devices.tablet} {
    font-size: 1.3em;
  }
`;

const Tr = styled.tr`
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: 0.35em;
  font-size: 1rem;

  @media ${devices.tablet} {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.625em;
  }
`;

const Thead = styled.thead`
  @media ${devices.tablet} {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`;
const Th = styled.th`
  padding: 0.625em;
  text-align: center;
  font-size: 1rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;
const Td = styled.td`
  padding: 0.625em;
  text-align: center;
  font-size: 1rem;

  @media ${devices.tablet} {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 0.8em;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:last-child {
      border-bottom: 0;
    }
  }
`;

const Tbody = styled.tbody``;

const Tfoot = styled.tfoot`
  background-color: var(--color-gray-200);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`;

function Table({ children }) {
  return <STable>{children}</STable>;
}

function Head({ children }) {
  return <Thead>{children}</Thead>;
}
function Row({ children }) {
  return <Tr>{children}</Tr>;
}
function Data({ children }) {
  return <Td>{children}</Td>;
}
function Body({ data, render }) {
  if (!data) return <Tr>No data to show at the moment</Tr>;
  return <Tbody>{data.map(render)}</Tbody>;
}
Table.Caption = Caption;
Table.Head = Head;
Table.Th = Th;
Table.Body = Body;
Table.Row = Row;
Table.Data = Data;
Table.Foot = Tfoot;

export default Table;

// function ResponsiveTable() {
//   return (
//     <table>
//       <caption>Statement Summary</caption>
//       <thead>
//         <tr>
//           <th scope="col">Account</th>
//           <th scope="col">Due Date</th>
//           <th scope="col">Amount</th>
//           <th scope="col">Period</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td data-label="Account">Visa - 3412</td>
//           <td data-label="Due Date">04/01/2016</td>
//           <td data-label="Amount">$1,190</td>
//           <td data-label="Period">03/01/2016 - 03/31/2016</td>
//         </tr>
//         <tr>
//           <td scope="row" data-label="Account">
//             Visa - 6076
//           </td>
//           <td data-label="Due Date">03/01/2016</td>
//           <td data-label="Amount">$2,443</td>
//           <td data-label="Period">02/01/2016 - 02/29/2016</td>
//         </tr>
//         <tr>
//           <td scope="row" data-label="Account">
//             Corporate AMEX
//           </td>
//           <td data-label="Due Date">03/01/2016</td>
//           <td data-label="Amount">$1,181</td>
//           <td data-label="Period">02/01/2016 - 02/29/2016</td>
//         </tr>
//         <tr>
//           <td scope="row" data-label="Account">
//             Visa - 3412
//           </td>
//           <td data-label="Due Date">02/01/2016</td>
//           <td data-label="Amount">$842</td>
//           <td data-label="Period">01/01/2016 - 01/31/2016</td>
//         </tr>
//       </tbody>
//     </table>
//   );
// }

// export default ResponsiveTable;
