import React from "react";

import Metrics from "../../../components/Metrics";
import {Avatar} from "antd";

const userImageList = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/150',

  },
  {
    id: 4,
    image: 'https://via.placeholder.com/150',
    name: 'Mila Alba',
    rating: '5.0',
    deals: '27 Deals'
  },
]

const NewCustomers = () => {
  return (
    <Metrics title="NEW CUSTOMERS">
      <div className="gx-customers">
        <ul className="gx-list-inline gx-customers-list gx-mb-0">
          {userImageList.map((user, index) =>
            <li className="gx-mb-2" key={index}>
              <Avatar src={user.image}/>
            </li>
          )
          }
        </ul>
      </div>
    </Metrics>
  );
};


export default NewCustomers;
