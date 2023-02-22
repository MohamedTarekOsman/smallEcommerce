import React, { Component } from "react";
import { Row } from "react-bootstrap";

export default class Counter extends Component {
  // state = {
  //   count: 0,
  // };

  // render() {
  //   let inc = () => {
  //     this.setState({
  //       count: this.state.count + 1,
  //     });
  //   };
  //   let dec = () => {
  //     this.setState({
  //       count: this.state.count - 1,
  //     });
  //   };
  //   return (
  //     <>
  //       {this.setState.count > 0
  //         ? this.setState.count + 1
  //         : this.setState.count}
  //       <div className="p-5">
  //         <div>
  //           <h2>Counter = {this.state.count}</h2>
  //         </div>
  //         <div className="d-flex gap-2 m">
  //           <button className="btn-success btn" onClick={inc}>
  //             +
  //           </button>
  //           <button
  //             className="btn-danger btn"
  //             onClick={
  //               this.state.count <= 0
  //                 ? (console.log("error"))
  //                 : dec
  //             }
  //           >
  //             -
  //           </button>
  //         </div>
  //       </div>
  //     </>
  //   );
  // }
  render()
  {
    return (
      <>
        <Row style={{ width: "100%" }}>
          <img
            src={require("./assets/best-about-us-pages.jpg")}
            alt="about-us"
            style={{
              padding: "5%",
              textAlign: "center",
            }}
          ></img>
          <div
            style={{
              textOverflow: "ellipsis",
              overflow: "auto",
              paddingLeft: "5%",
            }}
          >
            <p
              style={{
                fontSize: "25px",
                color: "white",
              }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat,
              soluta! Cum tempora et sequi quas! Voluptatibus, reiciendis quae
              id quos tenetur commodi rem asperiores, sint fugiat optio facilis
              totam voluptates.LoremLorem ipsum dolor sit amet consectetur,
              adipisicingtotam voluptates.LoremLorem ipsum dolor sit amet
              consectetur, adipisicingtotam voluptates.LoremLorem ipsum dolor
              sit amet consectetur, adipisicingtotam voluptates.LoremLorem ipsum
              dolor sit amet consectetur, adipisicing
            </p>
          </div>
        </Row>
      </>
    );
  }
}
