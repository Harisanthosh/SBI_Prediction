import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

class Tables extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">CASH FLOW</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Symbol</th>
                        <th>LTP</th>
                        <th>% Change</th>
                        <th className="text-center">Value</th>
                      </tr>
                    </thead>
                     <tbody>
                      <tr>
                        <td>AAPL</td>
                        <td>Niger</td>
                        <td>2</td>
                        <td className="text-center">$36,738</td>
                      </tr>
                      <tr>
                        <td>GOOGL</td>
                        <td>Curaçao</td>
                        <td>12</td>
                        <td className="text-center">$23,789</td>
                      </tr>
                      <tr>
                        <td>VZ</td>
                        <td>Netherlands</td>
                        <td>-3</td>
                        <td className="text-center">$56,142</td>
                      </tr>
                      <tr>
                        <td>ATT</td>
                        <td>Korea, South</td>
                        <td>6</td>
                        <td className="text-center">$38,735</td>
                      </tr>
                      <tr>
                        <td>TATA</td>
                        <td>Malawi</td>
                        <td>21</td>
                        <td className="text-center">$63,542</td>
                      </tr>
                      <tr>
                        <td>SBI</td>
                        <td>Chile</td>
                        <td>19</td>
                        <td className="text-center">$78,615</td>
                      </tr>
                      <tr>
                        <td>ICICI</td>
                        <td>Portugal</td>
                        <td>11</td>
                        <td className="text-center">$98,615</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col md="12">
              <Card className="card-plain">
                <CardHeader>
                  <CardTitle tag="h4">Previous Year Cash Flow</CardTitle>
                  <p className="category">To estimate the overall trend of the company</p>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                     <tbody>
                      <tr>
                        <td>AAPL</td>
                        <td>Niger</td>
                        <td>2</td>
                        <td className="text-center">$36,738</td>
                      </tr>
                      <tr>
                        <td>GOOGL</td>
                        <td>Curaçao</td>
                        <td>12</td>
                        <td className="text-center">$23,789</td>
                      </tr>
                      <tr>
                        <td>VZ</td>
                        <td>Netherlands</td>
                        <td>-3</td>
                        <td className="text-center">$56,142</td>
                      </tr>
                      <tr>
                        <td>ATT</td>
                        <td>Korea, South</td>
                        <td>6</td>
                        <td className="text-center">$38,735</td>
                      </tr>
                      <tr>
                        <td>TATA</td>
                        <td>Malawi</td>
                        <td>21</td>
                        <td className="text-center">$63,542</td>
                      </tr>
                      <tr>
                        <td>SBI</td>
                        <td>Chile</td>
                        <td>19</td>
                        <td className="text-center">$78,615</td>
                      </tr>
                      <tr>
                        <td>ICICI</td>
                        <td>Portugal</td>
                        <td>11</td>
                        <td className="text-center">$98,615</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Tables;
