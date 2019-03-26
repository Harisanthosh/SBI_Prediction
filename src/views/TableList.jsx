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
                        <th>Year</th>
                        <th>Cash Inflow</th>
                        <th>% Change</th>
                        <th className="text-center">Net Profit</th>
                      </tr>
                    </thead>
                     <tbody>
                      <tr>
                        <td>2011</td>
                        <td>$76,738</td>
                        <td>2</td>
                        <td className="text-center">$36,738</td>
                      </tr>
                      <tr>
                        <td>2012</td>
                        <td>$96,721</td>
                        <td>12</td>
                        <td className="text-center">$23,789</td>
                      </tr>
                      <tr>
                        <td>2013</td>
                        <td>$38,735</td>
                        <td>-3</td>
                        <td className="text-center">$16,142</td>
                      </tr>
                      <tr>
                        <td>2014</td>
                        <td>$63,542</td>
                        <td>6</td>
                        <td className="text-center">$63,542</td>
                      </tr>
                      <tr>
                        <td>2015</td>
                        <td>63,542</td>
                        <td>21</td>
                        <td className="text-center">$43,992</td>
                      </tr>
                      <tr>
                        <td>2016</td>
                        <td>$78,615</td>
                        <td>19</td>
                        <td className="text-center">$58,177</td>
                      </tr>
                      <tr>
                        <td>2017</td>
                        <td>$63,542</td>
                        <td>11</td>
                        <td className="text-center">$48,625</td>
                      </tr>
                       <tr>
                        <td>2018</td>
                        <td>$93,142</td>
                        <td>11</td>
                        <td className="text-center">$38,615</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col md="12">
              <Card className="card-plain">
                <CardHeader>
                  <CardTitle tag="h4">Cash Flow Of Competitors</CardTitle>
                  <p className="category">To estimate the cash flow of competitors in the same industry</p>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                     <tbody>
                      <tr>
                        <td>AAPL</td>
                        <td>$93,142</td>
                        <td>2</td>
                        <td className="text-center">$36,738</td>
                      </tr>
                      <tr>
                        <td>GOOGL</td>
                        <td>$102,142</td>
                        <td>12</td>
                        <td className="text-center">$23,789</td>
                      </tr>
                      <tr>
                        <td>VZ</td>
                        <td>$81,142</td>
                        <td>-3</td>
                        <td className="text-center">$56,142</td>
                      </tr>
                      <tr>
                        <td>ATT</td>
                        <td>$103,243</td>
                        <td>6</td>
                        <td className="text-center">$38,735</td>
                      </tr>
                      <tr>
                        <td>TATA</td>
                        <td>$93,142</td>
                        <td>21</td>
                        <td className="text-center">$63,542</td>
                      </tr>
                      <tr>
                        <td>SBI</td>
                        <td>$73,142</td>
                        <td>19</td>
                        <td className="text-center">$78,615</td>
                      </tr>
                      <tr>
                        <td>ICICI</td>
                        <td>$63,140</td>
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
