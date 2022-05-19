import React, { Component } from "react";
import { Card, CardImg, CardTitle } from "reactstrap";
import { STAFFS } from "../shared/staffs";
import { NavLink } from "react-router-dom";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
      selectedStaff: null,
    };
  }

  render() {
    const menu = this.state.staffs.map((data) => {
      return (
        <div className="col-6 col-md-4 col-xl-2 mb-5" key={data.id}>
          <Card onClick={() => this.props.onClick(data.id)}>
            <NavLink className="nav-link" to={`/staff/${data.id}`}>
              <CardImg
                width="auto"
                height="200px"
                src={data.image}
                alt={data.name}
              />
            </NavLink>
            <CardTitle>{data.name}</CardTitle>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>Nhân viên</h3>
            <hr />
          </div>
        </div>
        <div className="row">{menu}</div>
      </div>
    );
  }
}

export default Menu;
